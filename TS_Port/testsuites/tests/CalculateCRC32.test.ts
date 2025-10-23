import { spawnSync } from 'child_process';
import { existsSync, mkdirSync } from 'fs';
import { join } from 'path';

// Adjust import path if needed
import { CalculateCRC32 } from '../../typescript_src/Crc32';

const ROOT = join(__dirname, '../');
const PAS_SRC= join(ROOT, 'pascal_src_modified/');
const PAS_TEST_SRC= join(ROOT, 'pascal_function_wrappers/');
const BUILD = join(ROOT, 'build/');
const BIN = join(ROOT, 'bin/');
const PAS_PROG = join(BIN, 'CalculateCRC32');

function ensureCompiled(): boolean {
  try {
    if (!existsSync(BUILD)) mkdirSync(BUILD, { recursive: true });
    if (!existsSync(BIN)) mkdirSync(BIN, { recursive: true });
    if (existsSync(PAS_PROG)) return true;
    // compile with fpc; -Fu adds tools/ for unit search
    const res = spawnSync('fpc', [
      '-Mdelphi',
      '-Fu' + PAS_SRC,
      '-Fu' + join(PAS_SRC, 'VCL'),
      '-FU' + BUILD,
      '-o' + PAS_PROG,
      join(PAS_TEST_SRC, 'CalculateCRC32.pas')
    ], {
      stdio: 'pipe',
      encoding: 'utf8',
    });
    if (res.status !== 0) {
      // eslint-disable-next-line no-console
      console.warn('Skipping Pascal compare - fpc compile failed:\n', res.stdout, res.stderr);
      return false;
    }
    return true;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn('Skipping Pascal compare - fpc not found or failed:', e);
    return false;
  }
}

function urlEncode(s: string): string {
  // Keep ASCII-safe; encodeURIComponent is fine
  return encodeURIComponent(s);
}

function pasCrc(seed: number, s: string): number {
  const args = [String(seed >>> 0), urlEncode(s)];
  const res = spawnSync(PAS_PROG, args, { stdio: 'pipe', encoding: 'utf8' });
  if (res.status !== 0) {
    throw new Error(`pas_crc32 failed: ${res.status}\n${res.stdout}\n${res.stderr}`);
  }
  const out = res.stdout.trim();
  const val = Number(out);
  if (!Number.isFinite(val)) throw new Error(`Invalid CRC output: "${out}"`);
  return (val >>> 0);
}

const compiled = ensureCompiled();

(compiled ? describe : describe.skip)('Crc32 TS vs Pascal', () => {
  it('vector: "123456789", seed 0', () => {
    const seed = 0;
    const s = '123456789';
    const ts = CalculateCRC32(s, seed) >>> 0;
    const pas = pasCrc(seed, s) >>> 0;
    expect(ts).toBe(pas);
    expect(ts.toString(16).toUpperCase()).toBe('2DFD2D88');
  });

  it('empty string returns seed', () => {
    for (const seed of [0, 1, 0xFFFFFFFF >>> 0, 0xC90C2086 >>> 0]) {
      const ts = CalculateCRC32('', seed) >>> 0;
      const pas = pasCrc(seed, '') >>> 0;
      expect(ts).toBe(seed >>> 0);
      expect(ts).toBe(pas);
    }
  });

  it('random ASCII strings and seeds match (100 cases)', () => {
    const rng = (n: number) => Math.floor(Math.random() * n);
    for (let i = 0; i < 100; i++) {
      const len = rng(64);
      let s = '';
      for (let j = 0; j < len; j++) {
        // printable ASCII to avoid Unicode differences in Delphi/FPC strings
        const ch = 32 + rng(95); // 0x20..0x7E
        s += String.fromCharCode(ch);
      }
      const seed = (Math.floor(Math.random() * 0x100000000) >>> 0);
      const ts = CalculateCRC32(s, seed) >>> 0;
      const pas = pasCrc(seed, s) >>> 0;
      expect(ts).toBe(pas);
    }
  });
});

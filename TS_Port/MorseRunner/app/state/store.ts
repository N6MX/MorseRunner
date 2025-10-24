import { create } from 'zustand';

export type Conditions = {
  qrn: boolean;
  qrm: boolean;
  qsb: boolean;
  flutter: boolean;
  lids: boolean;
  activity: number; // 1..9
};

export type SettingsState = {
  stationCall: string;
  wpm: number;
  qsk: boolean;
  pitchHz: number;
  rxBandwidthHz: number;
  monLevel01: number; // 0..1
  durationMin: number;
  contest: string;
  exchange: string;
  conditions: Conditions;
};

export type RuntimeState = {
  running: boolean;
  call: string;
  rst: string;
  nr: string;
  timerSec: number;
};

export type Actions = {
  run: () => void;
  stop: () => void;
  setField: (k: keyof RuntimeState, v: string | number | boolean) => void;
  setSetting: (k: keyof SettingsState, v: any) => void;
  toggleCondition: (k: keyof Conditions) => void;
  sendFKey: (n: 1|2|3|4|5|6|7|8) => void;
};

export type Store = SettingsState & RuntimeState & Actions;

export const useApp = create<Store>((set, get) => ({
  // settings defaults
  stationCall: 'VE3NEA',
  wpm: 25,
  qsk: false,
  pitchHz: 550,
  rxBandwidthHz: 300,
  monLevel01: 0.75,
  durationMin: 30,
  contest: 'Pile-Up',
  exchange: '3A ON',
  conditions: { qrn:false, qrm:false, qsb:false, flutter:false, lids:false, activity:3 },

  // runtime defaults
  running: false,
  call: '',
  rst: '599',
  nr: '001',
  timerSec: 0,

  // actions
  run: () => set({ running: true }),
  stop: () => set({ running: false }),
  setField: (k, v) => set({ [k]: v } as any),
  setSetting: (k, v) => set({ [k]: v } as any),
  toggleCondition: (k) => set(s => ({ conditions: { ...s.conditions, [k]: !s.conditions[k] } })),
  sendFKey: (_n) => { /* hook later */ },
}));



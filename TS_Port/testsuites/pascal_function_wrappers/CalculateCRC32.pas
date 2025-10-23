program pas_crc32;

{$IFDEF FPC}{$mode delphi}{$ENDIF}
{$IFDEF MSWINDOWS}
{$APPTYPE CONSOLE}
{$ENDIF}

uses
  SysUtils, Crc32;

function UrlDecode(const S: AnsiString): AnsiString;
var
  i: Integer;
  hi: Byte;
begin
  Result := '';
  i := 1;
  while i <= Length(S) do
  begin
    if (S[i] = '%') and (i + 2 <= Length(S)) then
    begin
      hi := StrToIntDef('$' + Copy(String(S), i+1, 2), 0);
      Result := Result + AnsiChar(hi);
      Inc(i, 3);
    end
    else if S[i] = '+' then
    begin
      Result := Result + ' ';
      Inc(i);
    end
    else
    begin
      Result := Result + S[i];
      Inc(i);
    end;
  end;
end;

function ParseSeed(const S: string): DWord;
begin
  if (Length(S) > 2) and ((Copy(S,1,2) = '0x') or (Copy(S,1,2) = '0X')) then
    Result := DWord(StrToQWordDef(S, 0))
  else
    Result := DWord(StrToQWordDef(S, 0));
end;

var
  seedStr: string;
  encStr: AnsiString;
  seed: DWord;
  data: AnsiString;
  crc: DWord;
begin
  if ParamCount < 2 then
  begin
    Writeln('Usage: pas_crc32 <seed-dec-or-0xHEX> <url-encoded-string>');
    Halt(2);
  end;

  seedStr := ParamStr(1);
  encStr := AnsiString(ParamStr(2));
  seed := ParseSeed(seedStr);
  data := UrlDecode(encStr);
  crc := CalculateCRC32(data, seed);
  Writeln(crc);
end.

// Morse code table - ported from MorseTbl.pas
export const MORSE_TABLE: { [key: string]: string } = {
  'A': '.- ',
  'B': '-... ',
  'C': '-.-. ',
  'D': '-.. ',
  'E': '. ',
  'F': '..-. ',
  'G': '--. ',
  'H': '.... ',
  'I': '.. ',
  'J': '.--- ',
  'K': '-.- ',
  'L': '.-.. ',
  'M': '-- ',
  'N': '-. ',
  'O': '--- ',
  'P': '.--. ',
  'Q': '--.- ',
  'R': '.-. ',
  'S': '... ',
  'T': '- ',
  'U': '..- ',
  'V': '...- ',
  'W': '.-- ',
  'X': '-..- ',
  'Y': '-.-- ',
  'Z': '--.. ',
  '0': '----- ',
  '1': '.---- ',
  '2': '..--- ',
  '3': '...-- ',
  '4': '....- ',
  '5': '..... ',
  '6': '-.... ',
  '7': '--... ',
  '8': '---.. ',
  '9': '----. ',
  '.': '.-.-.- ',
  ',': '--..-- ',
  '?': '..--.. ',
  '/': '-..-. ',
  '=': '-...- ',
  ' ': ' ',
  '_': ' ',
};

export function encodeToMorse(text: string): string {
  let result = '';
  for (let i = 0; i < text.length; i++) {
    const char = text[i].toUpperCase();
    if (char === ' ' || char === '_') {
      result += ' ';
    } else if (MORSE_TABLE[char]) {
      result += MORSE_TABLE[char];
    }
  }
  if (result) {
    result = result.slice(0, -1) + '~'; // EOM has ~5U spacing
  }
  return result;
}

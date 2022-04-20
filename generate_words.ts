import {WORDS} from "https://raw.githubusercontent.com/oradwell/jazle/main/src/constants/wordlist.ts"
import {VALID_GUESSES} from "https://raw.githubusercontent.com/oradwell/jazle/main/src/constants/validGuesses.ts"

const correctWords = [...new Set(WORDS)].map(word => `u"${word.toUpperCase()}"`);
const validWords = [...new Set(VALID_GUESSES)].map(word => `u"${word.toUpperCase()}"`);

const wordsSource = `#include "words.hpp"

std::array<const char16_t *, ${correctWords.length}> choices = {${correctWords.join(', ')}};
std::array<const char16_t *, ${validWords.length}> guesses = {${validWords.join(', ')}};`;
await Deno.writeTextFile('WordleDS/source/words.cpp', wordsSource);

const wordsHeader = `#ifndef WORDS_HPP
#define WORDS_HPP

#include <array>

extern std::array<const char16_t *, ${correctWords.length}> choices;
extern std::array<const char16_t *, ${validWords.length}> guesses;

#endif // WORDS_HPP`;
await Deno.writeTextFile('WordleDS/include/words.hpp', wordsHeader);

await Deno.copyFile('./bgTop.png', 'WordleDS/gfx/bgTop.png')
await Deno.copyFile('./howtoTop.png', 'WordleDS/gfx/howtoTop.png')

await Deno.copyFile('./defines.hpp', 'WordleDS/include/defines.hpp')
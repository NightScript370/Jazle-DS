import {WORDS} from "https://raw.githubusercontent.com/oradwell/jazle/main/src/constants/wordlist.ts"
import {VALID_GUESSES} from "https://raw.githubusercontent.com/oradwell/jazle/main/src/constants/validGuesses.ts"

const fileContent = `#include "words.hpp"

std::array<const char16_t *, ${WORDS.length}> choices = {${(WORDS as string[]).map(word => `u"${word}"`).join(', ')}};
std::array<const char16_t *, ${VALID_GUESSES.length}> guesses = {${(VALID_GUESSES as string[]).map(word => `u"${word}"`).join(', ')}};`;


await Deno.writeTextFile('WordleDS/source/words.cpp', fileContent)
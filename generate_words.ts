import {WORDS} from "./source-from-sourcemaps/sources-gen/constants/wordlist.ts"
import {VALID_GUESSES} from "./source-from-sourcemaps/sources-gen/constants/validGuesses.ts"

const fileContent = `#include "words.hpp"

std::array<const char16_t *, ${WORDS.length}> choices = {${WORDS.map(word => `u"${word}"`).join(', ')}};
std::array<const char16_t *, ${VALID_GUESSES.length}> guesses = {${VALID_GUESSES.map(word => `u"${word}"`).join(', ')}};`;


await Deno.writeTextFile('WordleDS/source/words.cpp', fileContent)
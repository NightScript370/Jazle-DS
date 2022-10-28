import {WORDS} from "https://raw.githubusercontent.com/oradwell/jazle/main/src/constants/wordlist.ts"
import {VALID_GUESSES} from "https://raw.githubusercontent.com/oradwell/jazle/main/src/constants/validGuesses.ts"

import * as STRINGS from "https://raw.githubusercontent.com/oradwell/jazle/main/src/constants/strings.ts"

import defaultModJSON from "https://raw.githubusercontent.com/Epicpkmn11/WordleDS/mods/examples/No%20spoilers/mod.json" assert { type: "json" }

const correctWords = [...new Set(WORDS)].map(word => `u"${word.toUpperCase()}"`);
const validWords = [...new Set(VALID_GUESSES)].map(word => `u"${word.toUpperCase()}"`);

const modJSON = Object.assign({}, defaultModJSON);
modJSON.shareName = "Jazle DS";
modJSON.creditStr = "Jazle DS\nby oliverradwell"

modJSON.notWordMessage = STRINGS.WORD_NOT_FOUND_MESSAGE
modJSON.guessMustContainX = STRING.NOT_CONTAINED_MESSAGE("%s")
modJSON.lossMessage = STRING.CORRECT_WORD_MESSAGE("%s")
modJSON.tooShortMessage = STRING.NOT_ENOUGH_LETTERS_MESSAGE
modJSON.nthMustBeX = STRING.WRONG_SPOT_MESSAGE("%s", "%d%") //TypeError, I know
modJSON.victoryMessages = STRING.WIN_MESSAGES

modJSON.wordleOffset = 235;
modJSON.words = {guesses:validWords, choices:correctWords}

await Deno.writeTextFile("./mod.json", JSON.stringify(modJSON));

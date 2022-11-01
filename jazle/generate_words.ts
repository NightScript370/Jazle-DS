import {WORDS} from "https://raw.githubusercontent.com/oradwell/jazle/main/src/constants/wordlist.ts"
import {VALID_GUESSES} from "https://raw.githubusercontent.com/oradwell/jazle/main/src/constants/validGuesses.ts"

import * as STRINGS from "https://raw.githubusercontent.com/oradwell/jazle/main/src/constants/strings.ts"

import defaultModJSON from "https://raw.githubusercontent.com/Epicpkmn11/WordleDS/mods/examples/No%20spoilers/mod.json" assert { type: "json" }

const correctWords = WORDS.map(word => word.toUpperCase());
const validWords = VALID_GUESSES.map(word => word.toUpperCase());

const modJSON = Object.assign({}, defaultModJSON);
modJSON.shareName = "Jazle DS";
modJSON.creditStr = "Jazle DS\nby oliverradwell"

modJSON.notWordMessage = STRINGS.WORD_NOT_FOUND_MESSAGE
modJSON.guessMustContainX = STRINGS.NOT_CONTAINED_MESSAGE("%s")
modJSON.lossMessage = STRINGS.CORRECT_WORD_MESSAGE("%s")
modJSON.tooShortMessage = STRINGS.NOT_ENOUGH_LETTERS_MESSAGE
modJSON.nthMustBeX = STRINGS.WRONG_SPOT_MESSAGE("%s", "%d%") //TypeError, I know
modJSON.victoryMessages = STRINGS.WIN_MESSAGES

modJSON.wordleOffset = 235;
modJSON.words = {guesses:validWords, choices:correctWords}

await Deno.writeTextFile("./mod.json", JSON.stringify(modJSON));

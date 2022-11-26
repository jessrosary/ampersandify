import { nouns } from '/module/nouns.js';
import { adjectives } from '/module/adjectives.js';
import { things } from '/module/things.js';

const newNounA = nouns[Math.floor(Math.random() * nouns.length)];

const newNounB = nouns[Math.floor(Math.random() * nouns.length)];

const newAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];

const newThing = things[Math.floor(Math.random() * things.length)];

console.log(
  `${newNounA} & ${newNounB}: The finest in ${newAdjective} ${newThing}`
);

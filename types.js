// --------- Typecasting ---------

// --- Explicit vs. Implicit coercion ---

const x = 42;
const explicit = String(x); // explicit === "42"
const implicit = x + ""; // implicit === "42"

// --- == vs === ---

//  == coerces the types (never use double equals because it may have some strange behaviors since not everyting coerces the same)
//  === requires equivalent types

const x = 42;

console.log(typeof x);

console.log(typeof null);

// --------- Coercion ---------

// Which values are falsy?
//  undefined
//  null
//  false
//  +0, -0, NaN
//  ""

// Which values are truthy?
//  {}
//  []
//  Everything else

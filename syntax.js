const firstName = "Jordan";
const lastName = "Hayashi";

const val = 42;

const arr = [
  "string",
  42,
  function () {
    console.log("hi");
  },
];

arr[2]();

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// --------- Typecasting ---------

// --- Explicit vs. Implicit corecion ---

const x = 42;
const explicit = String(x); // explicit === "42"
const implicit = x + ""; // implicit === "42"

// --- == vs === ---

//  == coreces the types
//  === requires equivalent types

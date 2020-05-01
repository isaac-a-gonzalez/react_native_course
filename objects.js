const o = new Object();
o.firstName = "Jordan";
o.lastName = "Hayashi";
o.isTeaching = true;
o.greet = function () {
  console.log("hi!");
};

const o2 = {};
o.firstName = "Jordan";
o["lastName"] = "Hayashi";
const key = "isTeaching";
o[key] = true;
o["greet"] = function () {
  console.log("hi!");
};

const o3 = {
  firstName: "Jordan",
  lastName: "Hayashi",
  isTeaching: true,
  greet: function () {
    console.log("hi");
  },
  address: {
    street: "Main St.",
    number: 123,
  },
};

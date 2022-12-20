let mainData = {
  status: "success",
  data: {
    count: 67,
    rows: [
      {
        id: 9,
        name: "Afsha",
        roll: "BCA009",
      },
      {
        id: 1,
        name: "Tarique",
        roll: "BCA001",
      },
      {
        id: 2,
        name: "Saumya",
        roll: "BCA002",
      },
      {
        id: 3,
        name: "Adil",
        roll: "BCA003",
      },
      {
        id: 4,
        name: "Snehal",
        roll: "BCA004",
      },
      {
        id: 5,
        name: "Dilshad",
        roll: "BCA005",
      },
      {
        id: 6,
        name: "Shahnawaz",
        roll: "BCA006",
      },
      {
        id: 7,
        name: "Atandita",
        roll: "BCA007",
      },
      {
        id: 8,
        name: "Jawed",
        roll: "BCA008",
      },
    ],
  },
};

let users = mainData.data.rows;
let st = users.length;
for (let i = 0; i < st; i++) {
  for (let j = i + 1; j < st; j++) {
    if (users[i].id > users[j].id) {
      let temp = users[i];
      users[i] = users[j];
      users[j] = temp;
    }
  }
}

console.log(users);

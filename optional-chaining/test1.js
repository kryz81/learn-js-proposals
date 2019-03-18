// given
const user1 = {
  car: {
    year: 2019,
    engine: {
      type: {
        name: "diesel"
      }
    }
  }
};

const user2 = {
  car: {
    year: 2019,
    engine: {}
  }
};

// the old way
if (user1.car && user1.car.engine && user1.car.engine.type) {
  console.log(user1.car.engine.type.name);
} else {
  console.log("cannot read engine type property");
}
if (user2.car && user2.car.engine && user2.car.engine.type) {
  console.log(user2.car.engine.type.name);
} else {
  console.log("cannot read engine type property");
}

// the new way
if (user1.car?.engine?.type?.name) {
  console.log(user1.car.engine.type.name);
} else {
  console.log("cannot read engine type property");
}
if (user2.car?.engine?.type?.name) {
  console.log(user2.car.engine.type.name);
} else {
  console.log("cannot read engine type property");
}

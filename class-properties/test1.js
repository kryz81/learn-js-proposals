class User {
  name = "Chris";
  #age = 38;

  getAge() {
    return this.#age;
  }
}

const user1 = new User();
console.log(user1.name);
console.log(user1.getAge());

console.log(user1.age); // undefined

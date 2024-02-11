console.log('Hello Git!');
function Person(name,age,gender,profession,hobby) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.profession = profession;
  this.hobby = hobby;
  this.say = function() {
    console.log(`Name: ${this.name},
                 Age: ${this.age},
                 Gender: ${this.gender},
                 Profession: ${this.profession},
                 Hobby: ${this.hobby}.`);
  }
}

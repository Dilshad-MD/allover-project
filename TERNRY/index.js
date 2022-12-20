var user = /** @class */ (function () {
    function user(name, age, id) {
        this.name = name;
        this.age = age;
        this.id = id;
    }
    return user;
}());
var user1 = new user("Aadil", 27, 57);
var user2 = new user("Dilshad", 22, 34);
console.log(user1);
console.log(user2);

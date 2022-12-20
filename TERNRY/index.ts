class user{
    name:string;
    age :number;
    id:any;
    constructor(name:string, age: number, id:any){
        this.name=name
        this.age=age
        this.id=id
     }

}
const user1=new user("Aadil" , 27, 57)
const user2= new user("Dilshad", 22, 34)
console.log(user1)
console.log(user2)
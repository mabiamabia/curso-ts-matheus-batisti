// 1 - Arrays

let numbers: number [] = [1, 2, 3]

numbers.push(5)

console.log(numbers[2])

//numbers = "teste"

const nomes: string[] = ["maria", "joao", "pedro"]

nomes.push("marcia")
console.log(nomes)


// 2 - outra sintaxe de array

const nums: Array<number> = [100, 200]

nums.push(300)

console.log(nums[1])

// 3 - Any

const arr1: any = [1, "teste", true, [], {nome: "jonas"}]

console.log(arr1);

// 4 - parametros tipados

function soma(a: number, b: number){
    console.log(a + b);
    
}

soma(5,8)

//  5 - retorno de função

function greeting(name: string): string{
    return `Olá ${name}`
}

console.log(greeting("matheus"));

// 6 - funcao anonima

setTimeout(function(){
    const salary: number = 1000
    //console.log(salary);
    
}, 2000)

// 7 - Tipos de objetos

function passCordinates(coord: {x: number, y: number}){
    console.log("x coordinates: " + coord.x);
    console.log("y coordinates: " + coord.y);
}

const objCoord = {x: 329, y: 84.2}

passCordinates(objCoord)

// 8 - propriedades opcionais

function showNumbers(a: number, b?: number, c?: number){
    console.log("A: " + a);
    console.log("B: " + b);
    if(c){
        console.log("C: " + c);
    };
};
showNumbers(1,2,3);
showNumbers(4,5);

// 9 - validando argumento opcional

function avancedGreeting(firstName: string, lastName?: string){

    if(lastName !== undefined){
        return `Olá, ${firstName} ${lastName}, tudo bem?`
    }
    return `Olá, ${firstName}, tudo bem?`
}

console.log(avancedGreeting("Matheus", "Batisti"));
console.log(avancedGreeting("Joaquim"));

// 10 - union types

function showBalance (balance: string | number){
    console.log(`O saldo da conta é R$ R${balance}`);
}

showBalance(100)
showBalance("500")

const arr2: Array<number |string|boolean> = [1, "teste", true]

console.log(arr2);

// 11 - avancando em union types

function showUserRole(role: boolean | string){
    if(typeof role === "boolean"){
        return "Usuario não aprovado!"
    }
    return `A função do usuario é ${role}`
}

console.log(showUserRole(false));
console.log(showUserRole("admin"));

// type alias

type ID = string | number

function showId(id: ID) {
    console.log(`O Id é: ${id}`);
}

showId(1)
showId("200")

// 13 - interface

interface Point {
    w: number
    y: number
    z: number
}

function showCoords(obj: Point){
    console.log(`W: ${obj.w} Y: ${obj.y} Z: ${obj.z}`);
}

const coordObj: Point = {
    w: 10,
    y: 12,
    z: 40,
}
console.log(coordObj);


// 14 - interface x type alias

interface Person {
    name: string
}

interface Person {
    age: number
}

const somePerson: Person = {name: "Matheus", age: 30}

console.log(somePerson);

// 15 - literal types

let test: "testando"

//test = 1 //não aceita

test = "testando"

//usar literal types com union types

function showDirection(direction: "left" | "right" |  "center"){
    console.log(`A direção é: ${direction}`);
    
}

showDirection("center")
showDirection("left")

// 16 - Non-null Assertion operator

// const p = document.getElementById("some-p")

// console.log(p!.innerText);

// 17 - Bigint

let n: bigint

n = 1000n

console.log(n);

console.log(typeof n);

// 18 -  Symbol

let symbolA:symbol = Symbol("a")

let symbolB = Symbol("b")

console.log(symbolA == symbolB);

console.log(symbolA === symbolB);



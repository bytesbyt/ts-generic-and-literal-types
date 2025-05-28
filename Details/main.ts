// generic types

// define type
type ArrayType = number[];

// generic type with type parameter
type ArrayType2<T> = T[];

const numberArray: ArrayType2<number> = [1,2,3]
const stringArray: ArrayType2<string> = ['a', 'b', 'c']

// use case 1

// API response type example

// Category data
{
    status: "ok";
    totalPage: 1;
    page: 1;
    data: [{name: "Inception", id: 1}];
}

// Movie data
{
    status: "ok";
    totalPage: 1;
    page: 1;
    data: [{title: "Inception"}];
}

type ApiResponse<T> = {
    status: string;
    totalPage: number;
    page: number;
    data: T[];
};

type Catergory = {
    name: string;
    id: number;
};

type Movie = {
    title: string;
};

type CategoryResonse = ApiResponse<Catergory>;
type MovieResponse = ApiResponse<Movie>;

// use case 2

//const [value2, setValue2] = useState<boolean>(true);

//use case 3

interface Length{
    length: number;
}

function getValue<T extends Length>(data:T){
    console.log(data.length);
}

console.log(getValue("hello"));

// use case 4
// 1. conditional types

type IsString<T> = T extends string ? true : false;

type result1 = IsString<string>; // true
type result2 = IsString<number>; // false
type result3 = IsString<"hello">; // true

// 2. mapped types

type Movie1 = {
    title: string;
    year: number;
    rating: number;
};

type Subset <T> = {
    [K in keyof T]?: T[K];
};

const movie1: Subset<Movie1> = {title: "Inception", year: 2010};

// genric types (pairs)

interface Pair<T, U> {
    first: T;
    second: U;
    display(): void;
}

const pair: Pair<string, number> = {
    first: "One",
    second: 1,
    display() {
        console.log(`${this.first} - ${this.second}`);
    }
};
pair.display(); // Output: One - 1


// Liternal types

let direction : "left" | "right"
direction = "left"

type Direction = "left" | "right"; 
type Margin = `margin-${Direction}`; 

let margin: Margin;
margin = "margin-left"; // valid
margin = "margin-right"; // valid


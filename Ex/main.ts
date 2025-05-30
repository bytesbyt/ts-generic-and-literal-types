// Exercise: Generic Type

// Exercise 1

// 매개변수, 리턴타입 정의 필요 
function getFirstElement<T>(array: T[]): T | undefined {
    return array[0];
}
  
// 테스트 코드
console.log(getFirstElement([1, 2, 3])); // 1
console.log(getFirstElement(["a", "b", "c"])); // "a"
console.log(getFirstElement([])); // undefined
  
// Exercise 2

// 매개변수, 리턴타입 정의 필요 
function isNumberArray<T>(array: T[]): boolean {
    if (array.length === 0) return true;
    return array.every((item) => typeof item === "number");       
}

// 테스트 코드
console.log(isNumberArray([1, 2, 3])); // true
console.log(isNumberArray(["a", "b", "c"])); // false
console.log(isNumberArray([])); // true (빈 배열은 숫자 배열로 간주)

// Exercise 3

// 조건부 타입 정의
type IsArray<T> = T extends Array<any> ? true : false;

// 조건부 타입을 활용한 함수
function checkArrayType<T>(value: T): string {
    if (Array.isArray(value)) {
        return "This is an array.";
    } else {
        return "This is not an array.";
    }
}

// 테스트 코드
console.log(checkArrayType([1, 2, 3])); // "This is an array."
console.log(checkArrayType("Hello")); // "This is not an array."
console.log(checkArrayType({ key: "value" })); // "This is not an array."


// Exercise 4

// Mapped Type 정의
type WithDefault<T> = {
    [K in keyof T]?: [T[K], T[K]];
};
  
// 테스트 코드
type Original = { 
    id: number; 
    name: string; 
    isActive: boolean };

type WithDefaults = WithDefault<Original>;
  
// 기대 결과:
// type WithDefaults = {
//   id: [number, number];
//   name: [string, string];
//   isActive: [boolean, boolean];
// }
  
// Exercise 5

function createObject<K extends string | number | symbol, V>(key: K, value: V): { [P in K] : V } {
    return {[key]: value} as {[P in K] : V};
}
  
// 테스트 코드
console.log(createObject("id", 123)); // { id: 123 }
console.log(createObject("name", "Alice")); // { name: "Alice" }
  
// Excercise 6

// 매개변수, 리턴 타입 정의 필요 
function pluck<T,K extends keyof T>(array: T[], key: K): T[K][] {
    return array.map(item => item[key]);
  }
  
  // 테스트 코드
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ];
  
console.log(pluck(users, "id")); // [1, 2]
console.log(pluck(users, "name")); // ["Alice", "Bob"]

// Literal Type

// Exercise 1

type ButtonStyle = "primary" | "secondary" | "danger";

function getButtonClass(style: ButtonStyle): string {
    switch (style) {
        case "primary":
            return `btn-${style}`;
        case "secondary":
            return `btn-${style}`;
        case "danger":
            return `btn-${style}`;
        default:
            throw new Error ("Invaild button style");
    }  
  }

// 테스트 코드
console.log(getButtonClass("primary")); // "btn-primary"
console.log(getButtonClass("secondary")); // "btn-secondary"
console.log(getButtonClass("danger")); // "btn-danger"
// console.log(getButtonClass("unknown")); // 오류 발생

// Exercise 2

type DataRequest = "loading" | "success" | "error"

function handleRequestState(state: DataRequest): string {
    switch (state) {
        case "loading":
            return "Loading, please wait...";
        case "success":
            return "Request successful!";
        case "error":
            return "There was an error processing your request.";
        default:
            throw new Error ("Invaild request state");
    }   
}
  
// 테스트 코드
console.log(handleRequestState("loading")); // "Loading, please wait..."
console.log(handleRequestState("success")); // "Request successful!"
console.log(handleRequestState("error")); // "There was an error processing your request."
// console.log(handleRequestState("unknown")); // 오류 발생

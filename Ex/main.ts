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
type IsArray<T> = T extends Array<any> ? "This is an array." : "This is not an array.";

// 조건부 타입을 활용한 함수
function checkArrayType<T>(value: T): IsArray<T> {
    if (Array.isArray(value)) {
        return "This is an array." as IsArray<T>;
    } else {
        return "This is not an array." as IsArray<T>;
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
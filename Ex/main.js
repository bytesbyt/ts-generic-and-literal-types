// Exercise: Generic Type
// Exercise 1
// 매개변수, 리턴타입 정의 필요 
function getFirstElement(array) {
    return array[0];
}
// 테스트 코드
console.log(getFirstElement([1, 2, 3])); // 1
console.log(getFirstElement(["a", "b", "c"])); // "a"
console.log(getFirstElement([])); // undefined
// Exercise 2
// 매개변수, 리턴타입 정의 필요 
function isNumberArray(array) {
    if (array.length === 0)
        return true;
    return array.every(function (item) { return typeof item === "number"; });
}
// 테스트 코드
console.log(isNumberArray([1, 2, 3])); // true
console.log(isNumberArray(["a", "b", "c"])); // false
console.log(isNumberArray([])); // true (빈 배열은 숫자 배열로 간주)
// 조건부 타입을 활용한 함수
function checkArrayType(value) {
    var result = Array.isArray(value);
    return result ? "This is an array." : "This is not an array.";
}
// 테스트 코드
console.log(checkArrayType([1, 2, 3])); // "This is an array."
console.log(checkArrayType("Hello")); // "This is not an array."
console.log(checkArrayType({ key: "value" })); // "This is not an array."
// 기대 결과:
// type WithDefaults = {
//   id: [number, number];
//   name: [string, string];
//   isActive: [boolean, boolean];
// }
// Exercise 5
function createObject(key, value) {
    var _a;
    return _a = {}, _a[key] = value, _a;
}
// 테스트 코드
console.log(createObject("id", 123)); // { id: 123 }
console.log(createObject("name", "Alice")); // { name: "Alice" }
// Excercise 6
// 매개변수, 리턴 타입 정의 필요 
function pluck(array, key) {
    return array.map(function (item) { return item[key]; });
}
// 테스트 코드
var users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
];
console.log(pluck(users, "id")); // [1, 2]
console.log(pluck(users, "name")); // ["Alice", "Bob"]
function getButtonClass(style) {
    switch (style) {
        case "primary":
            return "btn-".concat(style);
        case "secondary":
            return "btn-".concat(style);
        case "danger":
            return "btn-".concat(style);
        default:
            throw new Error("Invaild button style");
    }
}
// 테스트 코드
console.log(getButtonClass("primary")); // "btn-primary"
console.log(getButtonClass("secondary")); // "btn-secondary"
console.log(getButtonClass("danger")); // "btn-danger"
function handleRequestState(state) {
    switch (state) {
        case "loading":
            return "Loading, please wait...";
        case "success":
            return "Request successful!";
        case "error":
            return "There was an error processing your request.";
        default:
            throw new Error("Invaild request state");
    }
}
// 테스트 코드
console.log(handleRequestState("loading")); // "Loading, please wait..."
console.log(handleRequestState("success")); // "Request successful!"
console.log(handleRequestState("error")); // "There was an error processing your request."
// console.log(handleRequestState("unknown")); // 오류 발생

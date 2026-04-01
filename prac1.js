// 실습 1: 콘솔 계산기

// 프로그램 동작
// 1. 숫자 두 개를 변수로 선언한다 -> 입력받지 않고 선언하기
let a = 9, b = 3;

// 2. 연산자를 문자열로 정한다 ("+", "-", "*", "/")
let operater = "*";

// 3. 연산자에 따라 계산 결과를 출력한다
if (operater === "+") {
    console.log(a + b)
} else if (operater === "*") {
    console.log(a * b)
} else if (operater === "/") {
    console.log(a / b)
} else if (operater === "-") {
    console.log(a - b)
} else {
    console.log("다른 연산자를 입력하세요.")
}
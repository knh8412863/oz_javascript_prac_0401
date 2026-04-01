// 실습 2: 최종 합격 판정 프로그램

let score = 88;
let attendance = 77;
let submitted = true;

if (submitted && (score >= 90 || (score >= 70 && attendance >= 80))) {
    console.log("합격입니다!");
} else {
    console.log("불합격입니다.");
}
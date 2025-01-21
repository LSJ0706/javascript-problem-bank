/**
 * [(lv.2)문자열-뒤집기.js]
 *
 * reverseString 함수를 작성하세요.
 * - 문자열이 아니라면 빈 문자열을 반환하세요.
 * - 반복문을 사용하여 입력받은 문자열을 뒤집어 반환하세요.
 *
 * @param {string} str
 * @returns {string}
 */

function reverseString(str) {
  const reverse = [];
  if (typeof str === "string") {
    for (let i = str.length - 1; i >= 0; i--) {
      reverse.push(str[i]);
    }
  }
  return reverse.join("");
}

// export 를 수정하지 마세요.
export { reverseString };

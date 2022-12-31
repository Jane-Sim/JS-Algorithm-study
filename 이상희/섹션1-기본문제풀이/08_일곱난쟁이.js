function solution(arr) {
  let answer = arr;
  let sum = answer.reduce(function add(result, currValue) {
    return result + currValue;
  });
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (sum - (answer[i] + answer[i + j]) === 100) {
        answer.slice(i + j, 1);
        answer.slice(i, 1);
        break;
      }
    }
  }
  return answer;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));

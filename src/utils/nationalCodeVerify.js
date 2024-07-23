export default function validateNationalCode(code) {
  if (code.length !== 10) return false;
  const status = [10, 9, 8, 7, 6, 5, 4, 3, 2];
  let sum = 0;
  for (let i = 0; i < code.length - 1; i++) {
    sum = sum + code[i] * status[i];
  }
  console.log(sum);
  const control_code = sum % 11;
  console.log(control_code);
  console.log(code[9]);
  if (control_code < 2) return control_code == code[9];
  if (control_code >= 2) {
    let result = 11 - control_code;
    console.log(result);
    return result == code[9];
  }
}

// console.log(verifyNationalCode("0939685736"));

// const code = "0939685736";
// const s = [10, 9, 8, 7, 6, 5, 4, 3, 2];
// let sum = 0;
// for (let i = 0; i < code.length - 1; i++) {
//   sum = sum + code[i] * s[i];
//   console.log("sum: ", sum);
// }
// console.log("sgrsdr");

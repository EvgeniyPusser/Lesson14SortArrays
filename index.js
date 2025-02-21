function compNumStr(e1, e2) {
  const isNum1 = typeof e1 === "number";
  const isNum2 = typeof e2 === "number";

  let result;

  if (isNum1 && isNum2) {
    result = e2 - e1;
  } else if (isNum1 || isNum2) {
    result = isNum1 ? -1 : 1;
  } else {
    result = e1 > e2 ? 1 : -1;
  }

  return result;
}

const arr = [
  "Uga",
  "java",
  78,
  "Javascript",
  "NODE",
  128,
  "Hello",
  "fraction",
  1,
  -90,
];

arr.sort(compNumStr);
console.log(arr);

function orderedList(array) {
  return `
        <ol>
            ${array.map(function (item) {
              return `<li class="item${
                typeof item === "number" ? " item_number" : ""
              }">${item}</li>`;
            })}
        </ol>
    `;
}

const bodyElement = document.querySelector("body");
bodyElement.innerHTML = orderedList([
  "I can understand nothing still",
  3900,
  -90.888,
  "Nope Java",
  "To be or not to be?",
  1000000,
]);

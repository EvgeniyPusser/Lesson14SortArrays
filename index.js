function compNumStr(e1, e2) {
  const isNum1 = typeof e1 === "number";
  const isNum2 = typeof e2 === "number";

  if (isNum1 && isNum2) {
    return e2 - e1;
  }

  if (!isNum1 && !isNum2) {
    return e1 > e2 ? 1 : -1;
  }

  return isNum1 ? -1 : 1;
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

arr.sort(compNumStr);
console.log(arr);

arrHTML = [2, "About you & me", 1, "Hello", 3, "World"];
arrHTML.map(function (element) {
  if (typeof element === "string") {
    let res = '<li class="item">element</li>';
  } else if (typeof element === "number") {
    let res = '<li class="item item_number">element</li>';
  }
});

const str = arrHTML.join("<br>");
console.log(str);

function orderedList(array) {
  return `
        <ol>
            ${array
              .map(function (item) {
                return `<li class="item${
                  typeof item === "number" ? " item_number" : ""
                }">${item}</li>`;
              })
              .join("")}
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

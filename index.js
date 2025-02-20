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

function compNumStr(arr) {
  arr.sort();

  const indOfStr = arr.findIndex(function (element) {
    return typeof element === "string";
  });

  let numbers = arr.slice(0, indOfStr).sort(function (a, b) {
    return b - a;
  });

  for (var i = 0; i < numbers.length; i++) {
    arr[i] = numbers[i];
  }
}

compNumStr(arr);
console.log(arr);

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

const arr = ["java", 78,  "Javascript", "NODE", 128, "Hello", "fraction", 1, -90];

function compNumStr(e1, e2) {
  if (typeof e1 === 'number' && typeof e2 === 'string') {
    return -1;
  } else if (typeof e1 === 'string' && typeof e2 === 'number') {
    return 1;
  } else if (typeof e1 === 'number' && typeof e2 === 'number') {
    return e2 - e1;
  } else{
    return 0;
  }
}

arr.sort(compNumStr);
console.log(arr);


arrHTML = [2, "About you & me", 1, "Hello", 3, "World"];
arrHTML.map(function (element) {
  if (typeof element === 'string') {
    let res = '<li class="item">element</li>';
  }
  else if (typeof element === 'number') {
    let res = '<li class="item item_number">element</li>';
  }
});

 const str = arrHTML.join("<br>");
console.log(str);

array = [7, 3, 1, 5, 8, 7, 2, 9, 4, 7, 4];

//quick-sort
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let pivot = arr[0];
  let lessThan = [];
  let greaterThan = [];

  for (i = 1; i < arr.length; i++) {
    if (arr[i] >= pivot) {
      greaterThan.push(arr[i]);
    } else {
      lessThan.push(arr[i]);
    }
  }
  return quickSort(lessThan).concat(pivot, quickSort(greaterThan));
}

//merge-sort
function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  let one = arr.slice(0, Math.round(arr.length / 2));
  let two = arr.slice(Math.round(arr.length / 2));

  let anotherOne = mergeSort(one);
  let anotherTwo = mergeSort(two);

  let sortedArr = [];

  let totalLength = anotherOne.length + anotherTwo.length;

  while (totalLength > 0) {
    if (anotherOne.length === 0) {
      sortedArr[sortedArr.length] = anotherTwo.shift();
    } else if (anotherTwo.length === 0) {
      sortedArr[sortedArr.length] = anotherOne.shift();
    } else if (anotherOne[0] > anotherTwo[0]) {
      sortedArr[sortedArr.length] = anotherTwo.shift();
    } else {
      sortedArr[sortedArr.length] = anotherOne.shift();
    }
    totalLength--;
  }

  return sortedArr;
}

//insertion-sort
function insertionSort(arr) {
  for (i=1; i)
  return arr;
}

//selection-sort
function selectionSort(arr) {
  return;
}

console.log(mergeSort(array));

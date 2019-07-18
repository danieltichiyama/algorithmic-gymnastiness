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
    return;
  }

  let one = arr.slice(0, parseInt(arr.length / 2));
  let two = arr.slice(parseInt(arr.length / 2));

  mergeSort(one);
  mergeSort(two);

  let sortedArr = [];
  let put;

  while (one.length !== 0 || two.length !== 0);
}

//insertion-sort
function insertionSort(arr) {
  return;
}

//selection-sort
function selectionSort(arr) {
  return;
}

let arr = [0, 1];
const fb = (n) => {
  if (n == 2) {
    return console.log(arr);
  }
  arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
  fb(n - 1);
};

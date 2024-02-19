var productExceptSelf =  (nums) => {
  let ltr = [1];
  let rtl = [1];
  let result = [];
  for (let i = 0, x = nums.length - 1; i < nums.length - 1 && x > 0; i++, x--) {
    ltr.push(nums[i] * ltr[i]);
    rtl.unshift(nums[x] * rtl[0]);
  }
  for (let r = 0; r < nums.length; r++) {
    result.push(ltr[r] * rtl[r]);
  }
  return result;
};

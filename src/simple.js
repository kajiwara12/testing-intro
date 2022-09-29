const reverse = (arr) => {
  for (let i = 0; i < arr.length / 2; i++) {
    const pairIndex = arr.length - 1 - i;

    [arr[i], arr[pairIndex]] = [arr[pairIndex], arr[i]];
  }

  return arr;
};

export default reverse;

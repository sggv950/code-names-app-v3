export function randomValsFromArray(arr: Array<any>, numOfVals: number) {
  const shuffled = arr.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numOfVals);
}

export function removeArrayDuplicates(array: Array<any>): Array<any> {
  const uniqueArray = array.filter((item, pos, self) => {
    return self.indexOf(item) == pos;
  });

  return uniqueArray;
}

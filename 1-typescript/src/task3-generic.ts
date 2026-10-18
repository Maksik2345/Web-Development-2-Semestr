function lastOrNull<T>(arr: T[]): T | null {
  if (arr.length === 0) {
    return null;
  }
  return arr[arr.length - 1];
}

console.log(lastOrNull([1, 2, 3])); // 3
console.log(lastOrNull(['a', 'b'])); // b
console.log(lastOrNull<string>([])); // null

export {};
export function removeElementAtIndex<T>(array: T[], index: number): T[] {
  return [...array.slice(0, index), ...array.slice(index + 1)];
}

export const copyToClipBoard = async (text: string) => {
  await navigator.clipboard.writeText(window.location.origin + `/${text}`);
};

export const pluralize = (count: number, options: Record<number, string>): string => {
  const reminder = count % 10;
  const isTeen = count % 100 >= 11 && count % 100 <= 19;
  const result = count.toString() + ' ';
  if (isTeen) {
    return result + options[5];
  }
  switch (reminder) {
    case 1:
      return result + options[1];
    case 2:
      return result + options[2];
    case 3:
      return result + options[2];
    case 4:
      return result + options[2];
    default:
      return result + options[5];
  }
};

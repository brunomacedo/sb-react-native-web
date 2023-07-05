export const searchText = (text: string, search?: string) => {
  if (!search) {
    return {
      rightText: text,
      leftText: '',
    };
  }

  const splitCriteria = new RegExp(`${search}(.*)`, 'i');
  const textParts = text.split(splitCriteria);
  const highlightedText = text
    .split('')
    .splice(textParts[0].length, search.length)
    .join('');

  return {
    rightText: textParts[0],
    highlightedText,
    leftText: textParts[1],
  };
};

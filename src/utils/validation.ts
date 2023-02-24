export const validateInput = (inputValue: string) => {
  const pattern = /^[가-힣ㄱ-ㅎㅏ-ㅣ\s]*$/;
  return pattern.test(inputValue);
};

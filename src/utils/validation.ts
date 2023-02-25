export const validateInput = (inputValue: string) => {
  // 특수문자, 자음, 모음, 숫자가 포함된 경우 false 반환
  if (
    /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'0-9ㄱ-ㅎㅏ-ㅣ]/gi.test(
      inputValue
    )
  ) {
    return false;
  }
  // 그 외 경우 true 반환
  return true;
};

export const longValueReplace = (inputValue: string) => {
  if (inputValue.length > 9) {
    return (inputValue = inputValue.substring(0, 9) + "...");
  }
  return inputValue;
};

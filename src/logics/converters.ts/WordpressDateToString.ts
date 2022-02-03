const WordpressDateToString = (date: string) => {
  const jsDate = new Date(date);
  // 不正な日付の場合はから文字を返す
  if (isNaN(jsDate.getTime())) {
    return '';
  }
  const year = jsDate.getFullYear();
  const month = String(jsDate.getMonth() + 1).padStart(2, '0');
  const day = String(jsDate.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export default WordpressDateToString;

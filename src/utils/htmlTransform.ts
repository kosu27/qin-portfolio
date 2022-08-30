export const textToHtml = (text: string): string => {
  const lineFeedExp = /(\n)/g;
  let convertedText = text.replace(lineFeedExp, "<br>");

  const urlRegExp = /(https?:\/\/[\w!?/+\-_~;.,*&@#$%()'[\]]+)/g;
  convertedText = convertedText.replace(
    urlRegExp,
    '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>'
  );
  return convertedText;
};

// export const htmlToText = (html: string): string => {
//   return html.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, "");
// };

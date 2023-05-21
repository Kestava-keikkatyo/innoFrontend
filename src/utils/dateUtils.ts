export const formatDate = (str: string) => {
  const date = new Date(str);
  // Results below assume UTC timezone - your results may vary

  // Specify default date formatting for language (locale)
  // return new Intl.DateTimeFormat('en-US').format(date)
  // expected output: "12/20/2020"

  // Specify default date formatting for language with a fallback language (in this case Indonesian)
  return new Intl.DateTimeFormat(['ban', 'id']).format(date)
  // expected output: "20/12/2020"

  // Specify date and time format using "style" options (i.e. full, long, medium, short)
  // return new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'long' }).format(date)
  // Expected output "Sunday, 20 December 2020 at 14:23:16 GMT+11"
}

export const format24HourDate = (dateString: string) => {
  const date = new Date(dateString);
  const year = date.getFullYear().toString().slice(-2);
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hour = String(date.getHours()).padStart(2, '0');
  const minute = String(date.getMinutes()).padStart(2, '0');
  const second = String(date.getSeconds()).padStart(2, '0');

  return `${year}/${month}/${day} ${hour}:${minute}:${second}`;
};
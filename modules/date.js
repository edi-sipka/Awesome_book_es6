import { DateTime } from './luxon.js';

const date = () => {
  const now = DateTime.now();
  const dateNow = document.querySelector('.date');
  dateNow.innerHTML = `${now.day}-${now.month}-${now.year}, ${now.hour}:${now.minute}:${now.second}`;
};

export default date;

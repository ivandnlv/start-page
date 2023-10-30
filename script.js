const MONTHS = [
  'Января',
  'Февраля',
  'Марта',
  'Апреля',
  'Мая',
  'Июня',
  'Июля',
  'Августа',
  'Сентября',
  'Октября',
  'Ноября',
  'Декабря',
];

const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');

function timeAndDateUpdate() {
  const date = new Date();

  const hours = numberFormatter(date.getHours());
  const minutes = numberFormatter(date.getMinutes());
  const seconds = numberFormatter(date.getSeconds());

  const day = numberFormatter(date.getDate());
  const month = monthToString(date.getMonth());
  const year = numberFormatter(date.getFullYear());

  timeEl.textContent = `${hours}:${minutes}:${seconds}`;
  dateEl.textContent = `${day} ${month} ${year}`;
}

function numberFormatter(number) {
  if (number < 10) {
    return '0' + number;
  }

  return number;
}

function monthToString(month) {
  return MONTHS[Number(month)];
}

// async function fetchWeatherData() {
//   try {
//     const API_KEY = '8a84eee777714351b6d34610233010';
//     const URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Salavat`;

//     const data = await fetch(URL);

//     const items = await data.json();

//     return items;
//   } catch (error) {
//     return error;
//   }
// }

window.addEventListener('DOMContentLoaded', () => {
  // const weather = fetchWeatherData();

  // const weatherImageEl = document.getElementById('weather-image');
  // const weatherTextEl = document.getElementById('weather-text');
  // const weatherFeelsEl = document.getElementById('weather-feels-like');
  // const weatherCity = document.getElementById('city');

  // weather
  //   .then((data) => {
  //     const {
  //       current: {
  //         condition: { icon, text },
  //         temp_c,
  //         feelslike_c,
  //       },
  //       location: { name },
  //     } = data;
  //     weatherCity.textContent = name;
  //     weatherImageEl.src = 'https:' + icon;
  //     weatherImageEl.alt = text;
  //     weatherTextEl.textContent = `Температура: ${Math.floor(temp_c)}°`;
  //     weatherFeelsEl.textContent = `Ощущается как: ${Math.floor(feelslike_c)}°`;
  //   })
  //   .catch((reason) => {
  //     weatherImageEl.style.display = 'none';
  //     weatherTextEl.textContent = reason;
  //     weatherTextEl.style.color = 'red';
  //   });

  setInterval(timeAndDateUpdate, 1000);

  timeAndDateUpdate();
});

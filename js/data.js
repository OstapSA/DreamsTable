const user = {
  name: 'Остап',
  surname: 'Агратіна',
  userPhoto: 'photo_2020-07-03_14-53-47.jpg',
  qrQode: 'qr-code.svg',
  dreams: [
    { src: 'image_2020-07-03_14-52-23.jpg', alt: 'Отримати хорошу роботу в міжнародній компанії' },
    { src: 'image_2020-07-03_14-51-51.jpg', alt: 'Вивчити англійську до рівня С' },
    { src: 'image_2020-07-03_14-53-17.jpg', alt: 'Зайняти призове місце в міжнародній олімпіадах з математики і програмування' },
  ],
};

// arr це середня місячна платня по рокам
const arr = [
  800, 
  900, 
  1000, 
  1100, 
  1300, 
  1500, 
  1800, 
  2100, 
  2400, 
  2700, 
  3000, 
  3300
];

const necessaryExpenses = 1000;

const todo = [
  { month: 'Червень', skill: 'JavaScript' },
  { month: 'Липень', skill: 'Java' },
  { month: 'Серпень', skill: 'Python' },
  { month: 'Вересень', skill: 'Самостійність' },
  { month: 'Жовтень', skill: 'Гнучкість' },
  { month: 'Листопад', skill: 'Емоційний інтелект' },
  { month: 'Грудень', skill: 'Англійська' },
  { month: 'Січень', skill: 'С++' },
  { month: 'Лютий', skill: 'Лідерство' },
  { month: 'Березень', skill: 'Польська' },
  { month: 'Квітень', skill: 'Unity' },
  { month: 'Травень', skill: 'Github' },
];

export { user, arr, necessaryExpenses, todo };
const products = [{
  id: 19923,
  image: './images/1.jpg',
  heading: "Тулейка 1.5мм кв",
  category: "cable-lug-connection",
  zap: 0014996,
  description: "До проводів LGY.",
  count: 1
}, {
  id: 99452,
  image: './images/2.jpg',
  heading: "Провід LGY 16мм кв",
  category: "wires",
  zap: 0025996,
  description: "Колір - чорний.",
  count: 1
}, {
  id: 46578,
  image: './images/3.jpg',
  heading: "Моситик до реле Relpol RM85",
  category: "electric-bridge",
  zap: 005897,
  description: "Реле Relpol RM85",
  count: 1
}];


const categories = [{
  category: "cable-lug-connection",
  nameCategory: "Тулейки кабельні"
}, {
  category: "wires",
  nameCategory: "Проводи"
}, {
  category: "electric-bridge",
  nameCategory: "Мостики"
}];



const state = {
  category: "all",
  from: 0,
  to: 1e10
};

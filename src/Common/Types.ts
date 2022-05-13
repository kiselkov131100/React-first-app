import { type } from "os";
import React from "react";

// type User = {
//   id: number;
//   email: string;
//   first_name: string;
//   last_name: string;
//   avatar: string;
//   age: number;
// };
// type Users = Array<User>;

// type Product = {
//   id: number;
//   name: string;
//   price: number;
//   currency: string;
//   ingredients: Array<string>;
//   type: string;
//   available: boolean;
// };
// type Products = Array<Product>;

// const users: Users = [
//   {
//     id: 7,
//     email: "michael.lawson@reqres.in",
//     first_name: "Michael",
//     last_name: "Lawson",
//     avatar: "https://reqres.in/img/faces/7-image.jpg",
//     age: 23,
//   },
//   {
//     id: 8,
//     email: "lindsay.ferguson@reqres.in",
//     first_name: "Lindsay",
//     last_name: "Ferguson",
//     avatar: "https://reqres.in/img/faces/8-image.jpg",
//     age: 20,
//   },
// ];

// const products: Products = [
//   {
//     id: 1,
//     name: "Burger Premium",
//     price: 6,
//     currency: "euro",
//     ingredients: ["flour", "beef", "salad", "cheese", "sauce"],
//     type: "burger",
//     available: true,
//   },
//   {
//     id: 2,
//     name: "Burger Lite",
//     price: 2.3,
//     currency: "euro",
//     ingredients: ["flour", "beef", "cheese", "sauce", "cucumber"],
//     type: "burger",
//     available: true,
//   },
// ];

// type GetUserType = (id: number, users: Users) => User | undefined;

// const getUser: GetUserType = (id, users) =>
//   users.find((user) => user.id === id);

/* С ниже приведенным массивом решить следующие задачи. 
Все функции и данные должны быть протипизированы: */

type Country = {
  country: string;
  abbreviation: string;
  city: string;
  currency_name: string;
  population: number;
};

const countries: Array<Country> = [
  {
    country: "United Arab Emirates",
    abbreviation: "AE",
    city: "Abu Dhabi",
    currency_name: "Arab Emirates Dirham",
    population: 9630959,
  },
  {
    country: "Poland",
    abbreviation: "PL",
    city: "Warszawa",
    currency_name: "Polish Zloty",
    population: 37974750,
  },
  {
    country: "Russian Federation",
    abbreviation: "RU",
    city: "Moscow",
    currency_name: "Russian Ruble",
    population: 144478050,
  },
];

// 1. Создать строку из названий стран через запятую.
type GetCountries = (countries: Array<Country>) => string;

const getCountries: GetCountries = (countries) => {
  let countryNames = "";
  countries.forEach((item) => {
    countryNames += `${item.country}, `;
  });
  console.log(countryNames);
  return countryNames;
};

// 2. Посчитать общее количество людей в данном массиве стран.
type GetPeopleAmount = (countries: Array<Country>) => number;

const getPeopleAmount: GetPeopleAmount = (countries) => {
  let peopleAmount = 0;
  countries.forEach((item) => {
    peopleAmount += item.population;
  });
  console.log(peopleAmount);
  return peopleAmount;
};

// 3. Создать функцию, которая бы принимала массив стран и сортировала бы их по названию.
type GetSortedCountries = (countries: Array<Country>) => Array<Country>;

const getSortedCountries: GetSortedCountries = (countries) => {
  let result = countries.sort((a, b) => (a.country > b.country ? 1 : -1));
  console.log(result);
  return result;
};

// С ниже приведенным массивом решить следующие задачи. Все функции и данные должны быть протипизированы:

// 1. Создать строку из имен пользователей через запятую
// 2. Посчитать общее количнство машин у пользователей
// 3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
// 4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
// 5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую

type User = {
  name: string;
  phone: string;
  email: string;
  animals?: Array<string>;
  cars?: Array<string>;
  hasChildren: boolean;
  hasEducation: boolean;
};

type Users = Array<User>;

const users: Users = [
  {
    name: "Harry Felton",
    phone: "(09) 897 33 33",
    email: "felton@gmail.com",
    animals: ["cat"],
    cars: ["bmw"],
    hasChildren: false,
    hasEducation: true,
  },
  {
    name: "May Sender",
    phone: "(09) 117 33 33",
    email: "sender22@gmail.com",
    hasChildren: true,
    hasEducation: true,
  },
  {
    name: "Henry Ford",
    phone: "(09) 999 93 23",
    email: "ford0@gmail.com",
    cars: ["bmw", "audi"],
    hasChildren: true,
    hasEducation: false,
  },
];

// 1. Создать строку из имен пользователей через запятую

type GetUserName = (item: Array<User>) => string;

const getUserName: GetUserName = (users) => {
  let userNames = "";

  users.forEach((i) => {
    userNames += `${i.name}, `;
  });
  return userNames;
};
// export default getUserName

// 2. Посчитать общее количнство машин у пользователей

type GetCountCar = (item: Array<User>) => number;

const getCountCar: GetCountCar = (users) => {
  let userCars: string[] = [];

  users.forEach((i) => {
    if (i.cars) {
      i.cars.forEach((car) => {
        userCars.push(car);
      });
    }
  });
  return userCars.length;
};
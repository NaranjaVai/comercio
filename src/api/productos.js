import latitud from './Images/latitud.jpg';
import JWalker from './Images/whisky.png';
import pilsen from './Images/pilsen.jpg';
import chivas from './Images/chivas.jpg';
import campari from './Images/campari.jpg';
import fernet from './Images/fernet.jpg';
import heineken from './Images/heineken.jpg';
import trapiche from './Images/trapiche.jpg';
import { computeHeadingLevel } from '@testing-library/react';


const products = [
    {
      nombre: "Latitud 33",
      tag: "Buena Calidad",
      precio: 2500,
      imagen: latitud,
      id: 0,
      stock: 5,
      categoria: "vinos",
    },
    {
        nombre: "Johnnie Walker",
        tag: "Black Label",
        precio: 6800,
        imagen: JWalker,
        id: 1,
        stock: 8,
        categoria: "whiskys",
    },
    {
        nombre: "Cerveza Pilsen",
        tag: "Buen Gusto",
        precio: 1200,
        imagen: pilsen,
        id: 2,
        stock: 20,
        categoria: "cervezas",
    },
    {
        nombre: "Chivas Regal",
        tag: "Espectacular",
        precio: 5400,
        imagen: chivas,
        id: 3,
        stock: 15,
        categoria: "whiskys",
    },
  
    {
        nombre: "Campari",
        tag: "Gran Aperitivo",
        precio: 1000,
        imagen: campari,
        id: 4,
        stock: 9,
        categoria: "aperitivos",
    },
    {
        nombre: "Fernet Branca",
        tag: "Desde 1882",
        precio: 1980,
        imagen: fernet,
        id: 5,
        stock: 9,
        categoria: "aperitivos",
    },
    {
        nombre: "Trapiche",
        tag: "Malbec",
        precio: 580,
        imagen: trapiche,
        id: 6,
        stock: 3,
        categoria: "vinos",
    },
    {
        nombre: "Cerveza Heineken",
        tag: "Auspicia la Champions",
        precio: 920,
        imagen: heineken,
        id: 7,
        stock: 25,
        categoria: "cervezas",
    },
  ];
  
  export const getProductos = (categoria) =>
    new Promise((res, rej) => {
      const response = categoria
        ? products.filter((p) => p.categoria === categoria)
        : products;
      setTimeout(() => {
        res(response);
      }, 2000);
    });
  
  export const getProductId = (productId) =>
    new Promise((res, rej) => {
      const response = products.find((p) => p.id === +productId)
      console.log(productId)
      console.log({response})
      setTimeout(() => {
        res(response);
      }, 2000);
    });
  
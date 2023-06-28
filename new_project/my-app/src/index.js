 import React from 'react';
 import {createRoot } from 'react-dom/client';
 import './index.css';

 const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut:false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut:false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut:false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut:false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut:true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut:true,
    },
  ];
  

 function App(){
    return(
        <div className='container'>
       <Header />
       <Menu />
       <Footer />
       </div>
    );
 }

 //we write component as function and need to write the function name first
 //letter capital
 

 function Header(){
 return(
    <header className='header'>
    <h1>My Pizza company</h1>
    </header>
 );
 }

 function Menu(){
    return(
        <main className='menu'>
        <h2>Menu</h2>

        <ul className='pizzas'>
             
      {pizzaData.map(pizza=><Pizza  pizzaObj={pizza} key = {pizza.name}/>)}
        </ul>

       </main>
    );

 
 }

 function Pizza({pizzaObj}){

    return(
        <li className={`pizza ${pizzaObj.soldOut ? "sold-out": ""}`}>
            <img src = {pizzaObj.photoName} alt = {pizzaObj.name}></img>
            <div>
            <h3>{pizzaObj.name}</h3>
            <p>{pizzaObj.ingredients}</p>
            {pizzaObj.soldOut ? (<span > SOLD OUT </span>): (<span>{pizzaObj.price}</span>)}
            </div>
        </li>
    );

 }
 

 function Footer(){
    return(
        <footer className='footer'>We are currently open</footer>
    );
 }


 const root = createRoot(document.getElementById
    ("root"));

    //  strictMode during development render our component twice inorder to find a
    // box
    root.render(<React.StrictMode><App />
    </React.StrictMode>
    );


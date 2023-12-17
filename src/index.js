import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import pizzaData from "./data.js";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Pizza Pizzaz</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Menu</h2>

      <p>
        Welcome to Pizza Pizzaz! We are an Italian restaurant located in the
        heart of downtown. We pride ourselves on our authentic Italian flavors
        and our unique spin on classic dishes. We are open from 11:00am until
        11:00pm every day.
      </p>

      {/* render the list of pizzas here, by mapping over the pizzaData Object,
      and for each instance, create a Pizza component with a "prop" of pizzaObj
      and then pass in the pizza object instance. */}
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
        ))}
      </ul>
    </main>
  );
}

// pass in the props object as a parameter to the Pizza component, and then use dot notation to access the properties of the object, and render them in the JSX.

function Pizza(props) {
  return (
    <li className={`pizza ${props.pizzaObj.soldOut ? "sold-out" : " "}`}>
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>
          {props.pizzaObj.soldOut ? `SOLD OUT` : `£${props.pizzaObj.price}`}
        </span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const open = 11;
  const closed = 23;
  const isOpen = hour >= open && hour < closed;
  console.log(isOpen);

  if (!isOpen) {
    return <p>Sorry, we're closed</p>;
  }

  return (
    <footer className="footer">
      <Order closedHours={closed} />
    </footer>
  );
}

function Order(props) {
  <div className="order">
    <p>We're open until {props.closedHours}:00</p>
    <button className="btn">Order</button>
  </div>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

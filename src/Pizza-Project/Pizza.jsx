import "./pizza.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function Header() {
  return <h1 className="header footer">Welcome to Throne Pizza's</h1>;
}

function Menu() {
  return (
    <>
      <h2>Our Menu</h2>

      <div>
        <img
          src="./pizzas/focaccia.jpg"
          alt="spinaaci"
          width={50}
          height={50}
        />
        <h2>Pizza Foccaia</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </>
  );
}

function Footer() {
  //    const hour = new Date().getHours();
  //    const openHour = 12;
  //    const closeHour = 22;

  //    if (hour >= openHour && hour <= closeHour) alert("we're currently open");
  //    else alert("Sorry we're closed")

  return (
    <p>
      {/* {new Date().toLocaleTimeString()}. */}
      We are Currently open
    </p>
  );
}

function Pizza() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default Pizza;

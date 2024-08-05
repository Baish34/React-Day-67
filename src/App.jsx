import { useState } from "react";
import "./App.css";

function CountPositiveNegative() {
  const [count, setCount] = useState(0);
  const [isPositive, setIsPositive] = useState(true);

  const incrementCount = () => {
    setCount(count + 1);
    setIsPositive(true);
  };

  const decrementCount = () => {
    setCount(count - 1);
    setIsPositive(false);
  };

  return (
    <div>
      <h2>Positive and Negative</h2>
      <p>Count: {count}</p>
      <p>The count is {count >= 0 ? "positive" : "negative"}.</p>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
    </div>
  );
}

function UserLogin() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();

    if (userName && password) {
      setIsLoggedIn(true);
    }
  };

  return (
    <div>
      <h2>User Login</h2>
      {isLoggedIn ? (
        <h2>Welcome, {userName}!</h2>
      ) : (
        <form onSubmit={submitHandler}>
          <label>Username: </label>
          <input
            type="text"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
          />
          <br />
          <br />
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <br />
          <br />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
}

function TemperatureConverter() {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahreheit] = useState(32);

  const handleCelsiusChange = (event) => {
    const value = event.target.value;
    setCelsius(value);
    setFahreheit((value * 9) / 5 + 32);
  };

  const handleFahrenheitChange = (event) => {
    const value = event.target.value;
    setFahreheit(value);
    setCelsius(((value - 32) * 5) / 9);
  };

  return (
    <div>
      <h2>Temperature Converter</h2>
      <label>Celsius: </label>
      <input type="number" value={celsius} onChange={handleCelsiusChange} />
      <br />
      <br />
      <label>Fahrenheit: </label>
      <input
        type="number"
        value={fahrenheit}
        onChange={handleFahrenheitChange}
      />
    </div>
  );
}

function ShoppingCart() {
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addItemToCart = (itemName, itemPrice) => {
    const updatedItems = [...items, { name: itemName, price: itemPrice }];
    setItems(updatedItems);
    setTotalPrice(totalPrice + itemPrice);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <p>Total Price: ${totalPrice}</p>
      <button onClick={() => addItemToCart("Product A", 10)}>
        Add Product A
      </button>
      <button onClick={() => addItemToCart("Product B", 20)}>
        Add Product B
      </button>
    </div>
  );
}

function QuizzApp() {
  const questions = [
    "What is the national bird of India?",
    "How many colors are there in the Indian flag?",
    "What is the color of the sky?",
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(
    Array(questions.length).fill(""),
  );
  const [showCompletionMessage, setShowCompletionMessage] = useState(false);

  const handleAnswerChange = (event) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestion] = event.target.value;
    setSelectedAnswers(updatedAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestion === questions.length - 1) {
      setShowCompletionMessage(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div>
      <h2>Quiz App</h2>
      {showCompletionMessage ? (
        <p>You answered all questions!</p>
      ) : (
        <>
          <p>{questions[currentQuestion]}</p>
          <input
            value={selectedAnswers[currentQuestion]}
            onChange={handleAnswerChange}
          />
          <button onClick={handleNextQuestion}>Next</button>
        </>
      )}
    </div>
  );
}

export default function App() {
  return (
    <main>
      <CountPositiveNegative />
      <UserLogin />
      <TemperatureConverter />
      <ShoppingCart />
      <QuizzApp />
    </main>
  );
}

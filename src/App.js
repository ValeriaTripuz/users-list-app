import React from "react";
// import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { useQuery } from "react-query";
import axios from "axios";
import "./App.css";

export async function fetchCoins() {
  const { data } = await axios.get(`http://jservice.io/api/random?`);
  return data;
}

function App() {
  const data1 = useQuery("tennis", fetchCoins);

  console.log(data1);
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;

import React from "react";
import axios from "axios";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import { useSelector } from "react-redux";
import Modal from "./components/Modal/Modal";
import Address from "./components/address/address";
import Footer from "./components/Footer/Footer";

function App() {
  const NAV_MENU = [
    { id: "0", name: "Популярные" },
    { id: "1", name: "Шашлык" },
    { id: "2", name: "Шаурма" },
    { id: "3", name: "Люля-кебаб" },
    { id: "4", name: "Рыба" },
    { id: "5", name: "Гарниры" },
    { id: "6", name: "Салаты" },
    { id: "7", name: "Выпечка" },
    { id: "8", name: "Соусы" },
    { id: "9", name: "Напитки" },
  ];
  const categoryId = useSelector((state) => state.filter.categoryId);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [cartIsVisible, setCartIsVisible] = React.useState(false);
  const body = document.body;

  React.useEffect(() => {
    if (cartIsVisible === true) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  }, [cartIsVisible]);

  React.useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        "https://64cc1b8e2eafdcdc8519a858.mockapi.io/dimShaslik?category=" +
          categoryId
      )
      .then((arr) => {
        setItems(arr.data);
        setIsLoading(false);
      });
  }, [categoryId]);

  return (
    <>
      <Header open={() => setCartIsVisible(true)} />
      <Address />
      <Content navigation={NAV_MENU} item={items} isLoading={isLoading} />
      {cartIsVisible && <Modal close={() => setCartIsVisible(false)} />}
      <Footer />
    </>
  );
}

export default App;

import React from "react";
import axios from "axios";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import { useSelector } from "react-redux";
import Modal from "./components/Modal/Modal";
import Address from "./components/address/address";
import Footer from "./components/Footer/Footer";
import DeliveryModal from "./components/Modal/DeliveryModal/DeliveryModal";

// import Preview from "./components/Preview/Preview";

function App() {
  const NAV_MENU = [
    { id: "0", name: "Популярные" },
    { id: "1", name: "Сеты" },
    { id: "2", name: "Шашлык" },
    { id: "3", name: "Шаурма" },
    { id: "4", name: "Люля-кебаб" },
    { id: "5", name: "Рыба" },
    { id: "6", name: "Гарниры" },
    { id: "7", name: "Салаты" },
    { id: "8", name: "Мучное" },
    { id: "9", name: "Соусы" },
    { id: "a", name: "Напитки" },
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
      {/* <Preview /> */}
      <Header open={() => setCartIsVisible(true)} />
      <Address />
      <DeliveryModal />
      <Content navigation={NAV_MENU} item={items} isLoading={isLoading} />
      {cartIsVisible && <Modal close={() => setCartIsVisible(false)} />}
      <Footer />
    </>
  );
}

export default App;

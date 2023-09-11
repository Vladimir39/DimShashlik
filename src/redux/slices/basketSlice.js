import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  totalAmount: 0,
  items: [],
  delivery: {},
  time: "",
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItems(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.amount++;
      } else {
        state.items.push({ ...action.payload, amount: 1 });
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.amount + sum;
      }, 0);
      state.totalAmount = state.items.reduce((sum, obj) => {
        return obj.amount + sum;
      }, 0);
    },

    addDelivery(state, action) {
      state.delivery = action.payload;
    },

    addDeliveryTime(state, action) {
      state.time = action.payload;
    },

    setBasketItemPlus(state, action) {
      const findItemPlus = state.items.find((obj) => obj.id === action.payload);
      if (findItemPlus) {
        state.totalAmount++;
        findItemPlus.amount++;
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.amount + sum;
      }, 0);
    },
    setBasketItemMinus(state, action) {
      const findItemMinus = state.items.find(
        (obj) => obj.id === action.payload
      );
      if (findItemMinus) {
        state.totalAmount--;
        findItemMinus.amount--;
      }

      state.totalPrice = state.items.reduce((sum, obj) => {
        if (obj.id === action.payload) {
          return sum - obj.price;
        } else {
          return sum;
        }
      }, state.totalPrice);
    },
    removeItems(state, action) {
      state.totalAmount = state.items.reduce((sum, obj) => {
        if (obj.id === action.payload) {
          return sum - obj.amount;
        } else {
          return sum;
        }
      }, state.totalAmount);
      state.totalPrice = state.items.reduce((sum, obj) => {
        if (obj.id === action.payload) {
          return sum - obj.price * obj.amount;
        } else {
          return sum;
        }
      }, state.totalPrice);
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
    remove(state) {
      state.totalPrice = 0;
      state.totalAmount = 0;
      state.items = [];
      state.delivery = {};
      state.time = "";
    },
  },
});

export const {
  setBasketItemPlus,
  setBasketItemMinus,
  addItems,
  removeItems,
  addDelivery,
  addDeliveryTime,
  remove,
} = basketSlice.actions;

export default basketSlice.reducer;

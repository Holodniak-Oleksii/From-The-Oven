import { useSelector } from "react-redux";
import adminSlice from "../adminSlice";
import basketSlice from "../basketSlice";

export const useBasket = () => useSelector((state) => state[basketSlice.name]);
export const useAdmin = () => useSelector((state) => state[adminSlice.name]);

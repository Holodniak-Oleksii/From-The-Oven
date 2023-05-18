import { useSelector } from "react-redux";
import basketSlice from "../basketSlice";

export const useBasket = () => useSelector((state) => state[basketSlice.name]);

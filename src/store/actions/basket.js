import { wrapDispatchAction } from ".";
import basketSlice from "../basketSlice";
const { addProducts, minusProduct, plusProduct } = basketSlice.actions;

export const addProductsAction = wrapDispatchAction(addProducts);
export const minusProductAction = wrapDispatchAction(minusProduct);
export const plusProductAction = wrapDispatchAction(plusProduct);

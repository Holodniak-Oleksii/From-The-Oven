import { wrapDispatchAction } from ".";
import adminSlice from "../adminSlice";
const { login } = adminSlice.actions;

export const adminLogInAction = wrapDispatchAction(login);

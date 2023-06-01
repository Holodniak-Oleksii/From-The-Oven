import { wrapDispatchAction } from ".";
import adminSlice from "../adminSlice";
const { login, auth } = adminSlice.actions;

export const adminLogInAction = wrapDispatchAction(login);
export const adminAuthAction = wrapDispatchAction(auth);

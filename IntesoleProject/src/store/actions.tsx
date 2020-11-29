import { USERDETAIL } from "./actionTypes";

export const userdetail = (userdetails:any) => ({
  type: USERDETAIL,
  payload: userdetails,
});

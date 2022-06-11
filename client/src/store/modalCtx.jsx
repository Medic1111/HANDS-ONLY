import { createContext } from "react";

const modalCtx = createContext({
  isModal: false,
  setIsModal: () => {},
});

export default modalCtx;

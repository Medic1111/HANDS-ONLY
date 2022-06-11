import { createContext } from "react";

const overCtx = createContext({
  isModal: false,
  setIsModal: () => {},
});

export default overCtx;

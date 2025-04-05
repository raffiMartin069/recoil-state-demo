import { atom } from "recoil";

const checkBoxState = atom<boolean>({
    key: "visibilityState",
    default: true,
  })

export default checkBoxState;
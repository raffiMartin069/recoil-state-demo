import { selector } from "recoil";
import checkBoxState from "./state";

const filteredVisibilityState = selector({
    key: "filteredVisibilityState",
    get: ({get}) => {
        const visibility = get(checkBoxState);
        return visibility ? "Enter a secret!!" : "Your secret has been exposed!!";
    }
})

export default filteredVisibilityState;

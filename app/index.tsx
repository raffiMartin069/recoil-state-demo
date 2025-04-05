import { RecoilRoot } from "recoil";
import App from "./app";

export default function Index() {
  return (
    <>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </>
  );
}

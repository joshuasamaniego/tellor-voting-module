import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import WrongNetwork from "./components/WrongNetwork";
import Loader from "./components/Loader";
import PleaseConnect from "./components/PleaseConnect";
import detectEthereumProvider from "@metamask/detect-provider";
import { ethers } from "ethers";

//Listening for changes in ChainId (Mainnet/Rinkeby/Others)
window.ethereum.on("chainChanged", () => {
  window.location.reload();
});

export const AppContext = React.createContext();

if (typeof window.ethereum !== "undefined") {
  detectEthereumProvider()
    .then((res) => {
      let appContext = {
        chainId: "",
        currentAddress: "",
      };

      if (res.chainId === "0x1") {
        appContext.chainId = "0x1";
        appContext.currentAddress = ethers.utils.getAddress(
          res.selectedAddress
        );

        ReactDOM.render(
          <AppContext.Provider value={appContext}>
            <App />
          </AppContext.Provider>,
          document.getElementById("root")
        );
      } else if (res.chainId === "0x4") {
        appContext.chainId = "0x4";
        appContext.currentAddress = ethers.utils.getAddress(
          res.selectedAddress
        );

        ReactDOM.render(
          <AppContext.Provider value={appContext}>
            <App />
          </AppContext.Provider>,
          document.getElementById("root")
        );
      } else if (res.chainId === null) {
        ReactDOM.render(<Loader />, document.getElementById("root"));
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        ReactDOM.render(<WrongNetwork />, document.getElementById("root"));
      }
    })
    .catch(() =>
      ReactDOM.render(<PleaseConnect />, document.getElementById("root"))
    );
} else {
  window.alert("Please install MetaMask");
  window.location.assign("https://metamask.io/");
}

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import WrongNetwork from "./components/WrongNetwork";
import Loader from "./components/Loader";
import detectEthereumProvider from "@metamask/detect-provider";
// LOOK INTO WHY WEBPACK AND WEB3 DON'T PLAY NICE ANYMORE!
// import Web3 from "web3";

//Listening for changes in Metamask Accounts
window.ethereum.on("accountsChanged", (accounts) => {
  console.log(accounts[0]);
});

//Listening for changes in ChainId (Mainnet/Rinkeby/Others)
window.ethereum.on("chainChanged", () => {
  window.location.reload();
});

export const AppContext = React.createContext();
// const web3 = new Web3();

if (typeof window.ethereum !== "undefined") {
  detectEthereumProvider().then((res) => {
    console.log("CHAIN ID FROM INDEX::: ", res.selectedAddress);

    let appContext = {
      chainId: res.chainId,
      currentAddress: res.selectedAddress,
    };

    if (res.chainId === "0x1") {
      ReactDOM.render(
        <AppContext.Provider value={appContext}>
          <App />
        </AppContext.Provider>,
        document.getElementById("root")
      );
    } else if (res.chainId === "0x4") {
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
  });
} else {
  window.alert("Please install MetaMask");
  window.location.assign("https://metamask.io/");
}

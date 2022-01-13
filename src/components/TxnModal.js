import React, { useState, useEffect } from "react";
import "../styles/TxnModal.css";
import { ReactComponent as Close } from "../assets/CloseX.svg";
import { truncateAddr } from "../utils/helpers";

function TxnModal({ chainId, address, justVoted, txnHash }) {
  //Component State
  const [voted, setVoted] = useState(false);
  const dummy =
    "0xc2d37b616b5f1cd07df6234f692b147bc07749793c091da6813119f13ab15409";

  useEffect(() => {
    setVoted(justVoted);
    return () => {
      setVoted(false);
    };
  }, [justVoted]);

  const closeModal = () => {
    setVoted(false);
  };
  return (
    <div className="TxnModal" style={{ display: voted ? "flex" : "flex" }}>
      <div className="TxnModal__Content">
        <div className="TxnModal__Exit">
          <Close className="TxnModal__ExitIcon" onClick={closeModal} />
        </div>
        <div className="TxnModal__Message">
          <h1>
            {address
              ? `Thank you for voting, ${truncateAddr(address)}!`
              : "Thank you for voting!"}
          </h1>
          <p>To view your transaction on etherscan, click below:</p>
          {dummy ? (
            chainId === "0x1" ? (
              <a
                href={`https://etherscan.io/tx/${dummy}`}
                target="_blank"
                rel="noopener noreferrer"
              >{`https://etherscan.io/tx/${dummy}`}</a>
            ) : (
              <a
                href={`https://rinkeby.etherscan.io/tx/${dummy}`}
                target="_blank"
                rel="noopener noreferrer"
              >{`https://rinkeby.etherscan.io/tx/${dummy}`}</a>
            )
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default TxnModal;

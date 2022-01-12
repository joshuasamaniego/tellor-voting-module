import React, { useState } from "react";
import "../styles/Hero.css";

function Hero({ currAddr }) {
  console.log("currAddr from Hero", currAddr);
  //Component State
  const [justVoted, setJustVoted] = useState(false);
  //No voteId currently on Mainnet
  const voteIdMainnet = 78;
  const voteIdRinkeby = 26;
  //Handlers
  // const handleVote = async (bool) => {
  //   if (currentUser) {
  //     const didAlreadyVote = await currentUser.contracts.instance.methods
  //       .didVote(voteIdRinkeby, currentUser.address)
  //       .call();

  //     if (!didAlreadyVote) {
  //       if (currentUser.address && currentUser.network === 1) {
  //         await currentUser.contracts.instance.methods
  //           .vote(voteIdMainnet, bool)
  //           .send({ from: currentUser.address });
  //         setJustVoted(true);
  //       } else if (currentUser.address && currentUser.network === 4) {
  //         // alert('Please sign in on Mainnet to vote!');
  //         await currentUser.contracts.instance.methods
  //           .vote(voteIdRinkeby, bool)
  //           .send({ from: currentUser.address });
  //         setJustVoted(true);
  //       }
  //     } else if (currentUser && didAlreadyVote) {
  //       alert("You already voted at this address. Thank you for voting!");
  //     }
  //   } else {
  //     alert(
  //       "Please sign in with the green connect button and MetaMask to cast your vote!"
  //     );
  //   }
  // };
  return (
    <div className="Hero">
      <div className="Hero__View">
        <h1>Tellor Treasuries!</h1>
        <h2>
          Tellor is now voting for a treasuries upgrade. Cast your vote below!
        </h2>
        <h3 className="Hero__LinkToWhitePaper">
          <a href="https://www.tellor.io/static/media/tellorX-whitepaper.f6527d55.pdf">
            Link to the Tellor Whitepaper
          </a>
        </h3>
        <div className="Hero__CTAContainer">
          <div className="Hero__CTAColumn">
            <h2>Click here to vote in favor of this proposal</h2>
            <button className="Hero__VoteInFavor">Vote in Favor</button>
          </div>
          <div className="Hero__CTAColumn">
            <h2>Click here to vote in opposition of this proposal</h2>
            <button className="Hero__VoteInOpposition">
              Vote in Opposition
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

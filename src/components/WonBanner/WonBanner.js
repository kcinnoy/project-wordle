import React from "react";
import Banner from "../Banner";

function WonBanner({ numOfGuesses }) {
  return (
    <Banner status={"happy"}>
      <p>
        <strong> Congratulations!</strong> Got ot in {""}
        <strong>
          {" "}
          {numOfGuesses === 1 ? "1 guess" : `${numOfGuesses} guesses`}
        </strong>
      </p>
    </Banner>
  );
}

export default WonBanner;

import React from "react";

function GuessInput({ handleSubmitGuess, gameStatus }) {
  const [inputGuess, setInputGuess] = React.useState("");

  function handleChange(event) {
    setInputGuess(event.target.value.toUpperCase());
  }

  function handleSubmit(event) {
    event.preventDefault();
    const inputPattern = /^[A-Z]{5}$/;

    if (!inputPattern.test(inputGuess)) {
      console.log("Input must be exactly 5 uppercase characters.");
      return;
    }

    handleSubmitGuess(inputGuess);
    setInputGuess("");
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='guess-input-wrapper'>
        <label htmlFor='guess-input'>Enter Guess:</label>
        <input
          disabled={gameStatus !== "running"}
          type='text'
          id='game-input'
          value={inputGuess}
          onChange={handleChange}
          pattern='[A-Z]{5}'
          title='5 letter word'
        />
      </form>
    </>
  );
}

export default GuessInput;

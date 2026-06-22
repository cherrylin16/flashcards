import { useState } from "react";
import answersJson from "../answers.json";

const GuessForm = ({ correctKeywords, onCorrect }) => {
    // the guess that the user typed in
    const [guess, setGuess] = useState('');
    
    // set checked answer to 'correct' or 'wrong' or ''
    const[checkAnswer, setCheckedAnswer] = useState('');

    // functions
    
    // when the guess input field is filled
    const onInputChange = (e) => {
        setGuess(e.target.value); // e.garget is the HTML element the user interacted with, e.target.value is the actual text the user typed
    };


    const onCheckAnswer = () => {
        const normalizedGuess = guess.trim().toLowerCase();

        const match = correctKeywords.filter((keyword) =>
            normalizedGuess.includes(keyword.toLowerCase())
        ).length;

        // how many matched words are needed to be considered correct or wrong
        const threshold = Math.ceil(correctKeywords.length / 2);

        // if (normalize(guess) === normalize(correctAnswer)){
        //     setCheckedAnswer("correct");
        // }
        // else {
        //     setCheckedAnswer("wrong");

        if (match >= threshold){
            setCheckedAnswer("correct");
        }
        else {
            setCheckedAnswer("wrong");
    }
    };

    return (
      <div className="title-container">
        <input 
            type="text" 
            className="guessbox" 
            id="guess field" 
            name="guess field" 
            placeholder="Enter your guess with keywords for this flashcard topic."
            value={guess}
            onChange={onInputChange}
        />
        <button className="button" onClick={onCheckAnswer}>Submit</button>

        {checkAnswer === "correct" && <p className="correct-msg">✅ Correct!</p>}
        {checkAnswer === "wrong" && <p className="wrong-msg">❌ Not quite, try again.</p>}

     </div>
       
    )
}

export default GuessForm;
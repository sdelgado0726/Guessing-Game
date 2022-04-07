import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function GuessingGame() {
  const [random, setRandom] = useState(null);
  const [userGuess, setGuess] = useState("");
  const [message, setMessage] = useState("Start Guessing");
  const [guesses, setGuesses] = useState(null);

    useEffect(() => {
        setRandom(JSON.parse(localStorage.getItem("randomNum")) || luckyNumber());

        if (guesses === null) {
            setGuesses(JSON.parse(localStorage.getItem("guesses")) || 0);
        }
    }, [guesses])

    function luckyNumber() {
        const randomNum = Math.floor(Math.random() * 100);
        localStorage.setItem("randomNum", JSON.stringify(randomNum));
    }
  

    function handleChange(event) {
        setGuess(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        setGuesses(guesses + 1);
        localStorage.setItem("guesses", JSON.stringify(guesses + 1));
        const parsedNum = parseInt(userGuess);
        
        if (parsedNum === random) {
            setMessage("You guessed the Lucky Number!");
        } else if (parsedNum < random) {
            setMessage("Your guess is too low!");
        } else if (parsedNum > random) {
            setMessage("Your guess is too high!");
        } else if (parsedNum === "") return null
    
    }

    function handleReset() {
        userGuess.reset()
        message.reset()
    }

    const reset = () => {
        localStorage.clear(guesses);  
    }

  return (
    <Form className="text-center">
        <Form.Group className="mb-3">
            <Form.Label>
                I am thinking of a number between 1 and 100. Guess the Lucky Number!
            </Form.Label> 
            <p>You have made {guesses} guesses</p>
            <Form.Control type="text" value={userGuess} onChange={handleChange} name="number" />
        </Form.Group>
        <Button type="submit" onClick={handleSubmit}>Guess</Button>
        <br></br>
        <br></br>
        <Button type="submit" onClick={handleReset && reset} >Reset</Button>
        <p>{message}</p>
    </Form>
  );
}

export default GuessingGame;

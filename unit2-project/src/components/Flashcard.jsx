import React, {useState} from "react";
import '../App.css'

const FlashCard = (props) => {
    const [flip, setFlip] = useState(false)

    const handleClick = () => {
        setFlip(!flip)
    }

    return (
        <div className={`card${flip ? "-flip" : ""}`} onClick={handleClick}>
            {flip === false ? 
                <>
                    <div className="card-front">
                    <img src={props.question} alt="Image" style={{ width: "80%", height: "auto" }} />
                    </div>
                </> 
                : 
                <>
                    <div className="card-back" style={{ transform: "rotateY(180deg)"}}>
                        <h1>{props.answer}</h1>
                    </div>
                </>
            }
        </div>
        
    )
}

export default FlashCard
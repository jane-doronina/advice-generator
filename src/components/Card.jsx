import { useState } from "react";

import dividerMobile from "../assets/images/pattern-divider-mobile.svg";
import dividerDesktop from "../assets/images/pattern-divider-desktop.svg";
import Button from "./Button";

const Card = () => {
  const [advice, setAdvice] = useState({id: 117, advice: "It is easy to sit up and take notice, what's difficult is getting up and taking action."})

  const handleClick = () => {
    fetch("https://api.adviceslip.com/advice")
      .then(response => response.json())
      .then(data => setAdvice(data.slip))
  }

  return(
    <div className="card">
      <p>ADVICE #{advice.id}</p>
      <h1>"{advice.advice}"</h1>
      <picture>
        <source media="(min-width: 1200px)" srcset={dividerDesktop} />
        <img src={dividerMobile} alt="divider" />
      </picture>
      <Button handleClick={handleClick} />
    </div>
  )
}

export default Card;

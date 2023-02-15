import dice from "../assets/images/icon-dice.svg";

const Button = (props) => {
  return(
    <button onClick={props.handleClick}><img src={dice} alt="dice-icon"/></button>
  )
}

export default Button;

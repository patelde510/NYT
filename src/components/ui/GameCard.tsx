import Button from "./Button";
import "./css/GameCard.css"

interface CardProps {
    text: string;
    navigateButton: () => void;
    buttonText: string;
    gameImage: string;
    imageStyle?: string;
    cardStyle?: string;
    textStyle?: string;
  }

function GameCard ( { text, navigateButton, buttonText, gameImage, imageStyle, cardStyle, textStyle }: CardProps) {
  return (
    <div className={cardStyle}>
      <img
        className={imageStyle}
        src={gameImage}
      />
      <h2 className={textStyle}>{text}</h2>
      <Button
        text={buttonText}
        onClick={navigateButton}
        className="button"
      />
    </div>
  )
}

export default GameCard
  
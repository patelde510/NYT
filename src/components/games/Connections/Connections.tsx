import Tile from "./Tile";
import { useState, useEffect } from "react";
import "./css/connections.css";
import Button from "../../ui/Button";
import CompleteTile from "./CompleteTile";

function shuffleArray(array: string[]) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function Connections() {
  const yellowWords = ["Python", "Java", "C", "TypeScript"];
  const greenWords = ["BMW", "Honda", "Toyota", "Tesla"];
  const blueWords = ["TV", "Phone", "Watch", "Monitor"];
  const purpleWords = ["Earings", "Necklace", "Rings", "Anklet"];

  const allWords = [
    ...yellowWords,
    ...greenWords,
    ...blueWords,
    ...purpleWords,
  ];

  const [shuffledWords, setShuffledWords] = useState<string[]>([]);
  const [selectedWords, setSelectedWords] = useState<boolean[]>(
    new Array(allWords.length).fill(false)
  );
  const [foundGroups, setFoundGroups] = useState<string[][]>([]); // Tracks found groups

  useEffect(() => {
    setShuffledWords(shuffleArray(allWords));
  }, []);

  const checkCorrect = (selected: boolean[]) => {
    const selectedGroup = shuffledWords.filter((_, index) => selected[index]);

    if (
      JSON.stringify(selectedGroup.sort()) ===
      JSON.stringify(yellowWords.sort())
    ) {
      console.log("Correct! You found the Yellow group!");
      setFoundGroups((prev) => [...prev, yellowWords]);
      setShuffledWords((prev) =>
        prev.filter((word) => !yellowWords.includes(word))
      );
    } else if (
      JSON.stringify(selectedGroup.sort()) === JSON.stringify(greenWords.sort())
    ) {
      console.log("Correct! You found the Green group!");
      setFoundGroups((prev) => [...prev, greenWords]);
      setShuffledWords((prev) =>
        prev.filter((word) => !greenWords.includes(word))
      );
    } else if (
      JSON.stringify(selectedGroup.sort()) === JSON.stringify(blueWords.sort())
    ) {
      console.log("Correct! You found the Blue group!");
      setFoundGroups((prev) => [...prev, blueWords]);
      setShuffledWords((prev) =>
        prev.filter((word) => !blueWords.includes(word))
      );
    } else if (
      JSON.stringify(selectedGroup.sort()) ===
      JSON.stringify(purpleWords.sort())
    ) {
      console.log("Correct! You found the Purple group!");
      setFoundGroups((prev) => [...prev, purpleWords]);
      setShuffledWords((prev) =>
        prev.filter((word) => !purpleWords.includes(word))
      );
    } else {
      console.log("Incorrect group. Try again!");
    }

    setSelectedWords(new Array(allWords.length).fill(false));
  };

  const handleTileClick = (index: number) => {
    const updatedSelection = [...selectedWords];
    const isCurrentlySelected = updatedSelection[index];

    const numSelected = updatedSelection.filter(
      (isSelected) => isSelected
    ).length;

    if (!isCurrentlySelected && numSelected >= 4) {
      return;
    }

    updatedSelection[index] = !isCurrentlySelected;
    setSelectedWords(updatedSelection);
  };

  const numSelected = selectedWords.filter((isSelected) => isSelected).length;

  return (
    <div>
      {/* Render the board */}
        {foundGroups.length > 0 && (
          <div className="found-groups">
            {foundGroups.map((group, index) => (
              <CompleteTile word={group.join(",")} />
            ))}
          </div>
        )} 
      <div className="board">

        {shuffledWords.map((word, index) => (
          <Tile
            key={index}
            word={word}
            isSelected={selectedWords[index]}
            onClick={() => handleTileClick(index)}
          />
        ))}

        <Button
          text="Shuffle"
          className="check-button"
          onClick={() => {
            //   setSelectedWords([]);
            setShuffledWords(shuffleArray(shuffledWords));
          }}
        />
        <Button
          text="Deselect All"
          className="check-button"
          onClick={() => {
            setSelectedWords([]);
          }}
          style={{
            opacity: numSelected === 0 ? 0.5 : 1,
            pointerEvents: numSelected === 0 ? "none" : "auto",
          }}
        />
        <Button
          text="Submit"
          className="check-button"
          onClick={() => {
            checkCorrect(selectedWords);
          }}
          style={{
            opacity: numSelected === 4 ? 1 : 0.5,
            pointerEvents: numSelected === 4 ? "auto" : "none",
          }}
        />
      </div>
    </div>
  );
}

export default Connections;

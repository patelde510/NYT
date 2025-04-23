import Tile from "./Tile";
import { useState, useEffect } from "react";
import "./css/connections.css";
import Button from "../../ui/Button";
import CompleteTile from "./CompleteTile";


// Shuffle the array given
function shuffleArray(array: string[]) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function Connections() {

    // Store correct answers
  const yellowWords = ["Python", "Java", "C", "TypeScript"];
  const greenWords = ["BMW", "Honda", "Toyota", "Tesla"];
  const blueWords = ["TV", "Phone", "Watch", "Monitor"];
  const purpleWords = ["Earings", "Necklace", "Rings", "Anklet"];

  // Combine all answers into one array
  const allWords = [
    ...yellowWords,
    ...greenWords,
    ...blueWords,
    ...purpleWords,
  ];

  // Map to keep track of word -> difficulty (Color)
  let wordMap = new Map<string, number>();

  // Add all words to the wordMap with corresponding number
  yellowWords.map((word) => {
    wordMap.set(word, 0);
  });
  greenWords.map((word) => {
    wordMap.set(word, 1);
  });
  blueWords.map((word) => {
    wordMap.set(word, 2);
  });
  purpleWords.map((word) => {
    wordMap.set(word, 3);
  });

  // Difficulty number maps to color code for complete tile
  let colorMap = new Map<number, string>();
  colorMap.set(0, "#f9df6d");
  colorMap.set(1, "#a0c35a");
  colorMap.set(2, "#b0c4ef");
  colorMap.set(3, "#ba81c5");


  // Initialize states to set shuffled, selected and found words
  const [shuffledWords, setShuffledWords] = useState<string[]>([]);
  const [selectedWords, setSelectedWords] = useState<boolean[]>(
    new Array(allWords.length).fill(false)
  );
  const [foundGroups, setFoundGroups] = useState<string[][]>([]);

  // When page is loaded, call initial shuffle on array
  useEffect(() => {
    setShuffledWords(shuffleArray(allWords));
  }, []);

  // Check if selected array matches with any answer arrays
  const checkCorrect = (selected: boolean[]) => {
    const selectedGroup = shuffledWords.filter((_, index) => selected[index]);
    console.log(JSON.stringify(selectedGroup.sort()));

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

  // Update the selectedWord variable
  const handleTileClick = (index: number) => {
    const updatedSelection = [...selectedWords];
    const isCurrentlySelected = updatedSelection[index];

    const numSelected = updatedSelection.filter(
      (isSelected) => isSelected
    ).length;

    // Avoids more than 4 words being selected
    if (!isCurrentlySelected && numSelected >= 4) {
      return;
    }

    updatedSelection[index] = !isCurrentlySelected;
    setSelectedWords(updatedSelection);
  };

  const numSelected = selectedWords.filter((isSelected) => isSelected).length;

  return (
    <div>

      <div className="found-groups">
        {foundGroups.length > 0 &&
          foundGroups.map((group, index) => (
            <CompleteTile
              key={index}
              word={group.join(", ")}
              tileColor={colorMap.get(wordMap.get(group[0])!)}
            />
          ))}
      </div>


      <div className="board">
        {shuffledWords.map((word, index) => (
          <Tile
            key={index}
            word={word}
            isSelected={selectedWords[index]}
            onClick={() => handleTileClick(index)}
          />
        ))}
      </div>

      <div className="button-container">
        <Button
          text="Shuffle"
          className="check-button"
          onClick={() => {
            setSelectedWords([]);
            setShuffledWords(shuffleArray(shuffledWords));
          }}
        />

        <Button
          text="Deselect All"
          className="check-button deselect-button"
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

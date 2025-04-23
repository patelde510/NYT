export const shuffleArray = <T>(array: T[]): T[] => {
    let currentIndex = array.length, randomIndex: number;
  
    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]
      ];
    }
    return array;
  };
  
  interface Category {
    name: string;
    words: string[];
  }
  
  export const checkCategory = (
    selectedTiles: string[],
    correctCategories: Category[]
  ): Category | null => {
    return correctCategories.find(category =>
      category.words.every(word => selectedTiles.includes(word))
    ) || null;
  };
  
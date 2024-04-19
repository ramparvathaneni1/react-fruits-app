import {useState} from 'react';
import './App.css';
import FruitFilter from "./FruitFilter";
import FruitList from "./FruitList";


function App() {
  const fruitList = [
    "Acai",
    "Aceola",
    "Apple",
    "Apricots",
    "Avocado",
    "Banana",
    "Blackberry",
    "Blueberries",
    "Camu Camu berry",
    "Cherries",
    "Coconut",
    "Cranberry",
    "Cucumber",
    "Currents",
    "Dates",
    "Durian",
    "Fig",
    "Goji berries",
    "Gooseberry",
    "Grapefruit",
    "Grapes",
    "Jackfruit",
    "Kiwi",
    "Kumquat",
    "Lemon",
    "Lime",
    "Lucuma",
    "Lychee",
    "Mango",
    "Mangosteen",
    "Melon",
    "Mulberry",
    "Nectarine",
    "Orange",
    "Papaya",
    "Passion Fruit",
    "Peach",
    "Pear",
    "Pineapple",
    "Plum",
    "Pomegranate",
    "Pomelo",
    "Prickly Pear",
    "Prunes",
    "Raspberries",
    "Strawberries",
    "Tangerine/Clementine",
    "Watermelon",
  ];

  const matchedHeadingStr = "Matching Fruits:";
  const unmatchedHeadingStr = "Non Matching Fruits:";
  
  const [fruitsToDisplay, setFruitsToDisplay] = useState(fruitList);
  const [unmatchedFruits, setUnmatchedFruits] = useState([]);

  const handleFilterChange = (event) => {
    event.preventDefault();
    let filterValue = event.target.value;
  
    /* const filteredFruitList = fruitList.filter((fruit) =>
      fruit.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase())
    );

    const nonMatchingFruitList = fruitList.filter((fruit) => 
      !fruit.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase())
    ); */

    const filteredFruits = [];
    const unFilteredFruits = [];
    fruitList.forEach((fruit) => 
      fruit.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase()) ?
      filteredFruits.push(fruit) :
      unFilteredFruits.push(fruit)
    );

    /* setFruitsToDisplay(filteredFruitList);
    setUnmatchedFruits(nonMatchingFruitList); */

    setFruitsToDisplay(filteredFruits);
    setUnmatchedFruits(unFilteredFruits);

  };
  

  return (
    <div className="App">
      <FruitFilter handleChange={handleFilterChange} />
      <FruitList heading={matchedHeadingStr} fruits={fruitsToDisplay} />
      <hr/>
      <FruitList heading={unmatchedHeadingStr} fruits={unmatchedFruits} />
    </div>
  );
}

export default App;

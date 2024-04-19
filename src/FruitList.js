function FruitList({ fruits, heading }) {
  const allFruits = fruits.map((fruit, index) => 
    <li key={index}>{fruit}</li>
    );
  return (
    <>
      <h4>{heading}</h4>
      <ul>{allFruits}</ul>
    </>
  );
}

export default FruitList;

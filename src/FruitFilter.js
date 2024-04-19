function FruitFilter({ handleChange }) {
  return (
    <>
      <label>Filter these Fruits: </label>
      <input 
        type="text"
        onChange={handleChange}
        name="fruit-filter" />
    </>
  );
}

export default FruitFilter;

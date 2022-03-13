function Ingredient(props) {
  return (
    <div className='ingredient' onClick={() => {props.addToBurger(props.ingredient)}}>
      <p>{props.ingredient.name}</p>
    </div>
  )
}
   
export default Ingredient;

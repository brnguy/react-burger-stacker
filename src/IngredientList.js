import Ingredient from './Ingredient';


function IngredientList(props) {
    const ingredients = props.ingredients.map(ingredient => {
        return (
        <Ingredient 
            ingredient={ingredient} 
            addToBurger={props.addToBurger}
        />)
    })
    return (
        <div className='ingredient-list'>
            <h1 className='section-title'>Ingredient List </h1>
            {ingredients}
        </div>
    );
}
 
export default IngredientList;
import React, { useState } from 'react';
import './index.css';
import BurgerPane from './BurgerPane';
import IngredientList from './IngredientList';

function App(props) {
  const [burgerIngredients, setBurger] = useState([])

  const addToBurger = (ingredient) => {
    setBurger([...burgerIngredients, ingredient])
  }

  const clearBurger = () => {
    setBurger([])
  }

  return (
    <div className='app'>
      <IngredientList ingredients={props.ingredientsList} addToBurger={addToBurger}/>
      <BurgerPane burgerIngredients={burgerIngredients} clearBurger={clearBurger}/>
    </div>
  );
}
 
export default App;
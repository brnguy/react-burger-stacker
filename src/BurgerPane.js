import Ingredient from './Ingredient'
import Clear from './Clear'

function BurgerPane(props) {
    const burger = props.burgerIngredients.map(layer => {
        return <Ingredient ingredient={layer} />
    })

    return (  
        <div className="burger-pane">
            <h1 className='section-title'>Burger Pane</h1>
            {burger}
            <Clear clearBurger={props.clearBurger}/>
        </div>
    );
}

export default BurgerPane;

// import React, { Component } from 'react';
// import Ingredient from './Ingredient';
// import Clear from './Clear';

// class BurgerPane extends Component {
//     render() { 
//         const burger = this.props.burgerIngredients.map(layer => {
//             return <Ingredient ingredient={layer} />
//         })
//         return (
//             <div className="burger-pane">
//                 <h1 className='section-title'>Burger Pane</h1>
//                 {burger}
//                 <Clear clearBurger={this.props.clearBurger}/>
//             </div>
//         );
//     }
// }
 
// export default BurgerPane;
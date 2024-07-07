
import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.module.css';
import {withRouter} from 'react-router-dom';



const burger = (props) => {

    console.log(props);

    const ingredients=props.ingredients || props.location.state;
    
    let newIngredients = Object.keys(ingredients).map(item => {
        return [...Array(ingredients[item])].map((_, i) => {
            return <BurgerIngredient key={item + i} type={item} />;
        });
    }).reduce((arr, el) => {
        return arr.concat(el)
    }, []);

    console.log(newIngredients);
    
    if (newIngredients.length === 0) {
        newIngredients = <p>Please start adding ingredients</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {newIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

/**
 * If you ever need direct access to match history and location and you dont want to manually pass
 * from the top level component you can use withRouter.
 * 
 * export default withRouter(burger);
 */

export default withRouter(burger) ;

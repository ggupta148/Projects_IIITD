import React from 'react';
import Aux from '../../../hoc/Auxilary';
import Button from '../../UI/Button/Button';


const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(
        igkey => {
            return (
                <li key={igkey}>
                    <span style={{ textTransform: 'capitalize' }}>{igkey}</span>:{props.ingredients[igkey]}
                </li>);
        });


    return (
        <Aux>
            <h2>Your Order is</h2>
            <p>Burger with following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price:{props.price}</strong></p>
            <p>Continue to checkout ?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled} >Cancel</Button>
            <Button btnType="Success" clicked={props.purchaseContinue} >Continue</Button>
        </Aux>
    )

}

export default orderSummary;
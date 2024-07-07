import React from 'react'
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'AlooTikki', type: 'alootikki' },
    { label: 'Paneer', type: 'paneer' },
    { label: 'Cheese', type: 'cheese' },
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price :<strong>{props.price}</strong></p>
        {controls.map(ctrl => (
            <BuildControl key={ctrl.label}
                label={ctrl.type}
                added={() => props.ingredientsAdded(ctrl.type)}
                minus={() => props.ingredientsMinus(ctrl.type)}
                disabled={props.disabled[ctrl.type]} />
        ))}
        <button className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}> {props.isAuth ? 'Order Now' : 'Sign Up to Order'} </button>
    </div>
);

export default buildControls;
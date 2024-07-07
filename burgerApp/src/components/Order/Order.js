import React from 'react';
import classes from './Order.module.css';


const order = (props) => {


    console.log(props);
    const ingredients = [];
    for (let ingredientName in props.ingredients) {
        ingredients.push({
            name: ingredientName,
            amount: props.ingredients[ingredientName]
        })
    }

    console.log(ingredients);
    const ingredientOutput=ingredients.map(ig=>{
        return(
            <span 
            style={{
                textTransform:'capitalize',
                display:'inline-block',
                margin:'0 8px',
                border:'1px solid #ccc',
                padding:'5px'
                    }}
            key={ig.name}>{ig.name}({ig.amount})</span>
        )
    });

  
    const customerData=props.orderData;
    console.log(customerData.name);

    // let custName=Object.entries(customerData).map((key,i)=>{
    //     return(
    //         <div key={i}>
    //             <span> {key[1]}</span>
    //         </div>
            
    //     )
    // })

    // console.log(custName);
   
    return (
        <div className={classes.Order}>

            <p style={{textAlign:'center',padding:'10px'}}>Customer Name: <strong>{customerData.name}</strong></p>
            <p>Ingredients {ingredientOutput}</p>
            <p>Price: <strong>Rs. {props.price} </strong> </p>            
            
        </div>
    );

}

export default order;
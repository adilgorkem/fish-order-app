import React from "react";

import mealsImage from '../../assets/meals.jpeg' //This is how we can import an image dynamically. 

import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Fish Pot</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="Just delicious!" />
      </div>
    </React.Fragment>
  )

}

export default Header;

//classes['main-image] writing is used because the classname is dashed so we can't use dot notation.

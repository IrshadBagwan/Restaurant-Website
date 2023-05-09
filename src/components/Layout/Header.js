import React,{ Fragment } from 'react';
import MealImage from '../../components/assets/MealImage.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = props =>{
   
     return <Fragment>
         <header className={classes.header}>
             <h1>BagwanMeals</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
         </header>
         <div className={classes['main-image']}>
             <img src={MealImage} alt='A table full of delecious food' />
        </div>
     </Fragment>
};

export default Header;
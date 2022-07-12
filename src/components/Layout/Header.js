import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from '../Layout/HeaderCartButton';

const Header = (props) => { 
    return (
        <>
            <header className={classes.header}>
                <h1>React App Meals</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="meals image"/>
            </div>
        </>
    )
}

export default Header;
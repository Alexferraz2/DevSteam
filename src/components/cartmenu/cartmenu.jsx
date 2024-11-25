import CartOption from '../cartoption/cartoption';
import styles from './cartmenu.module.css'

const CartMenu = () => {
    return (
        <div className={styles.menu}>

            <div className={styles.options}>
                <CartOption/>
                <CartOption/>
                <CartOption/>
            </div>
            <div className={styles.priceline}>
                <h2>Total</h2>
                <h2 className={styles.price}>R$ 99,99</h2>
            </div>
            
        </div>
    )
}


export default CartMenu;
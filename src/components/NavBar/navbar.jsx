import Logo from '@/components/logo/logo'
import styles from './navbar.module.css'
import { BsCart4} from 'react-icons/bs'
import Input from '../forms/imput/input'
import CartButton from '../forms/cartButton/cartButton'




const NavBar = () => {
    return (
        <div className={styles.navbar}>
            <Logo/>
            <div className={styles.search}>
                <Input  className placeholder='Buscar' fullwidth/>
            </div>
            
            <CartButton/>
            
        </div>
    )
}


export default NavBar;
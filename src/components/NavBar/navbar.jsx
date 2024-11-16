import Logo from '@/components/logo/logo'
import styles from './navbar.module.css'
import { BsCart4} from 'react-icons/bs'
import Input from '../forms/imput/input'



const NavBar = () => {
    return (
        <div className={styles.navbar}>
            <Logo/>
            <div className={styles.search}>
                <Input  className placeholder='Buscar' fullwidth/>
            </div>
            
            <BsCart4 size={40}/>
            
        </div>
    )
}


export default NavBar;
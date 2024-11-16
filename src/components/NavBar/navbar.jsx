import Logo from '@/components/logo/logo'
import styles from './navbar.module.css'
import { BsCart4} from 'react-icons/bs'



const NavBar = () => {
    return (
        <div className={styles.navbar}>
            <Logo/>
            <input type="text" />
            <BsCart4 size={40}/>
            
        </div>
    )
}


export default NavBar;
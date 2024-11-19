import CartMenu from '@/components/cartmenu/cartmenu'
import styles from './cartButton.module.css'
import { BsCart4} from 'react-icons/bs'
import { useState } from 'react'

const CartButton = () => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <BsCart4 
                size={40} 
                className={styles.icon}
                onClick={() => {setOpen(!open)}}
            />
            {open && <CartMenu/>}
            
        </div>
    )
}

export default CartButton;
import CabecalhoLink from 'components/cabecalhoLink'
import { Link } from 'react-router-dom'
import styles from './cabecalho.module.css'
import logo from './Logo-cinetag-branco 1.png'

export default function Cabecalho() {
    return(
        <header className={styles.cabecalho}>
            <Link to="./">
                <img src={logo}  alt="Logo do cinetag"></img>
            </Link>
            <nav>
                <CabecalhoLink url="./">
                    Home
                </CabecalhoLink>
                <CabecalhoLink url ="./Favoritos">
                    Favoritos
                </CabecalhoLink>
            </nav>
        </header>
    )
}
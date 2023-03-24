import Banner from 'components/Banner'
import Cards from 'components/Cards'
import Titulo from 'components/Titulo'
import styles from './Favoritos.module.css'
import { useFavoritoContext } from 'contextos/Favoritos';


export default function Favoritos() {
    const {favorito}=useFavoritoContext();
    return(
        <>
        <Banner imagem="favoritos"/>
        <Titulo>
            <h1>Meus Favoritos</h1>
        </Titulo>
        <section className={styles.container}> 
            {favorito.map((fav)=>{
                return <Cards {...fav} key={fav.id}/>
            })}
        </section>
    </>
    )
}
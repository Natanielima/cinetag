import styles from './Card.module.css'
import iconeFavoritar from './desfavoritar.png'
import { useFavoritoContext } from 'contextos/Favoritos'
import iconeDesfavoritar from './favoritar.png'
import { Link } from 'react-router-dom';

export default function Cards({id, titulo, capa}) {
    const {favorito, adicionarFavorito}= useFavoritoContext();
    const ehFavorito = favorito.some((fav)=> fav.id===id);
    const icone= ehFavorito?iconeDesfavoritar:iconeFavoritar;
    return(
            <div className={styles.container}>
                <Link className={styles.link} to={`/${id}`}>
                    <img src={capa} alt={titulo} className={styles.capa}/>
                    <h2>{titulo}</h2>
                </Link>
                
                <img src={icone} alt="Favoritar filmes" className={styles.favoritar} onClick={()=>{adicionarFavorito({id, titulo, capa})}}/>
            </div>
    )
}
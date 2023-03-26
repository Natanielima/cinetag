import Cabecalho from 'components/cabecalho'
import Container from 'components/Container'
import Rodape from 'components/Rodape'
import FavoritosProvider from 'contextos/Favoritos'
import { Outlet } from 'react-router-dom'

export default function PaginaBase() {
    return(
        <main>
            <Cabecalho/>
            <FavoritosProvider>
                <Container>
                    <Outlet/>
                </Container>
            </FavoritosProvider>
            <Rodape/>
        </main>
    )
}
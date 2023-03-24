import Inicio from "pages/inicio";
import Favoritos from "pages/Favoritos";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cabecalho from "components/cabecalho";
import Rodape from "components/Rodape";
import Container from "components/Container";
import FavoritosProvider from "contextos/Favoritos";
import Player from "pages/Player/Player";

export default function AppRoutes() {
    return(
        <BrowserRouter>
            <Cabecalho/> 
                <Container>
                    <FavoritosProvider>
                    <Routes>
                            <Route path="/" element={<Inicio/>}></Route>
                            <Route path="/Favoritos" element={<Favoritos/>}></Route>
                            <Route path="/:id" element={<Player/>}></Route>
                        </Routes>
                    </FavoritosProvider>                     
                </Container>
            <Rodape/>
        </BrowserRouter>
    )
}
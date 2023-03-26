import Inicio from "pages/inicio";
import Favoritos from "pages/Favoritos";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Player from "pages/Player/Player";
import NaoEncontrado from "pages/NãoEncontrado";
import PaginaBase from "pages/PaginaBase";

export default function AppRoutes() {
    return(
        <BrowserRouter>
            
                    <Routes>
                            <Route path="/" element={<PaginaBase/>}>
                                <Route index element={<Inicio/>}></Route>
                                <Route path="Favoritos" element={<Favoritos/>}></Route>
                                <Route path=":id" element={<Player/>}></Route>
                                <Route path="*" element={<NaoEncontrado/>}></Route>
                            </Route>
                        </Routes>
                    
        </BrowserRouter>
    )
}
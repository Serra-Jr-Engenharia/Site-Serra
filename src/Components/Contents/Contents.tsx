import { Routes, Route } from 'react-router-dom'

import Home from '../Pages/Home/Home'
import QuemSomos from '../Pages/QuemSomos/QuemSomos'
import Computacao from '../Pages/Computacao/Computacao'
import Mecanica from '../Pages/Mecanica/Mecanica'
import Contatos from '../Pages/Contatos/Contatos'

export default function Contents(){
    return (
        <div className="Contents">
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/quemSomos" element={<QuemSomos />}></Route>
                <Route path="/computacao" element={<Computacao />}></Route>
                <Route path="/mecanica" element={<Mecanica />}></Route>
                <Route path="/contatos" element={<Contatos />}></Route>
            </Routes>
        </div>
    )
}
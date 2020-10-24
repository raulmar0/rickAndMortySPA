import Header from '../templates/Header'
import Home from '../pages/Home'
import Character from '../pages/Character'
import Error404 from '../pages/Error404'
// no es necesario poner la extensión porque se sobre entiende
// js lo interpreta con babel y lo compila con webpack

const routes = {
    '/': Home,
    '/:id': Character,
    '/contact': 'Contact',
}

const router = async () => {
    const header = null || document.getElementById('header')
    const content = null || document.getElementById('content')
    
    header.innerHTML = await Header();
}

export default router
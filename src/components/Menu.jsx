import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import styled from 'styled-components'
import Home from './Home'
import RegisterBook from './RegisterBook'
import EditBook from './EditBook'
import ListBooks from './ListBooks'

const HeaderContainer = styled.header`
    color: #fff;
    display: flex;
    justify-content: space-between;
    padding: 1.2rem 2rem;
    border-bottom: 1px solid #214a3c;
`

const TitileHeader = styled.h2`
    font-weight: bold;
`

const ItemNav = styled.li`
    display: inline-block;
    margin: 0 1rem;
    font-size: 1.3rem;
    color: #fff;
    font-weight: bold;
`


// componente que va manejar las rutas de la aplicacion
export default function Menu() {
    return (
        //Contenedor principal para el control de las rutas de toda la aplicacion
        <BrowserRouter>
        
            <HeaderContainer>
                <TitileHeader>CRUD Book</TitileHeader>
                <nav>
                    <ul>
                        <ItemNav>
                            {/** El Link se utiliza para navegar entre las rutas */}
                            <Link to="/" style={{color: "#fff", textDecoration: "none"}}>Home</Link>
                        </ItemNav>
                        <ItemNav>
                            <Link to="/libro/lista" style={{color: "#fff", textDecoration: "none"}}>Mis libros</Link>
                        </ItemNav>
                        <ItemNav>
                            <Link to="/libro/registro" style={{color: "#fff", textDecoration: "none"}}>Registro de libro</Link>
                        </ItemNav>
                    </ul>
                </nav>
            </HeaderContainer>

            {/** contenedor que nos servira para almacenar las rutas que vamos a crear */}
            <Routes>
                {/**
                 * el path es la URl que va aparecer en el navegador
                 * el element es el componente/pagina que voy a renderizar
                 */}
                <Route path='/' element={<Home />} />
                <Route path='/libro/lista' element={<ListBooks /> } />
                <Route path='/libro/registro' element={<RegisterBook />} />
                <Route path='/libro/editar' element={<EditBook />} />
                
            </Routes>
        </BrowserRouter>

    )
}

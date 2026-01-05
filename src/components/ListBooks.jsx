import React from 'react'
import styled from 'styled-components'

const ItemBook = styled.div`
    color: #fff;
    margin: 1.5rem 0;
    padding-bottom: .5rem;
    border-bottom: 1px solid #214a3c;
`

export default function ListBooks() {
    return (
        <section style={{display: 'flex', justifyContent: 'center'}}>
            <section>
                <h1 style={{color: "#fff", textAlign: 'center', margin: "2rem 0"}}>Lista de Libros</h1>
            </section>
        </section>
    )
}

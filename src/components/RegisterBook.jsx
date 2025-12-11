import React from 'react'
import styled from 'styled-components'

const ContainerForm = styled.section`
    margin: 1rem 3rem;
    color: #fff;
    padding: 1rem 0;
`

const Title = styled.h1`
    color: #fff;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    margin: 1.5rem 0;
`

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1.5rem 0;
`;

const FormField  = styled.input`
    width: 50%;
    padding: .8rem;
    margin: .5rem 0;
    border-radius: 10px;
    border: 1px solid #214a3c;
    background-color: #17352b;
    color: #669b88;
`

const Button = styled.input`
    width: 20%;
    color: #fff;
    background-color: #019863;
    padding: .5rem;
    border: none;
`

export default function RegisterBook() {
    return (
        <>
            <Title>Registro de Libros</Title>
            <ContainerForm>
                <form>
                    <FormGroup>
                        <label>Titulo</label>
                        <FormField type="text" className='form-control' placeholder='Ingresa el titulo del libro' />
                    </FormGroup>

                    <FormGroup>
                        <label>Autor</label>
                        <FormField type="text" className='form-control' placeholder='Ingresa el autor del libro' />
                    </FormGroup>

                    <FormGroup>
                        <label>Genero</label>
                        <FormField as="select" >
                            <option value="">Seleccionar un genero...</option>
                            <option value="Romance">Romance</option>
                            <option value="Terror">Terror</option>
                            <option value="Accion">Accion</option>
                            <option value="Ciencia Ficcion">Ciencia Ficcion</option>
                        </FormField>
                    </FormGroup>

                    <FormGroup>
                        <label>Fecha de Publicacion</label>
                        <FormField type="date" className='form-control' />
                    </FormGroup>

                    <FormGroup>
                        <label>Descripcion</label>
                        <FormField type="text" className='form-control' />
                    </FormGroup>

                    <FormGroup>
                        <Button type="submit" className='btn btn-primary' value='Guardar Libro' />
                    </FormGroup>
                </form>
            </ContainerForm>
        </>
    )
}

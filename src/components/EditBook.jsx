import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components'
import { useForm } from 'react-hook-form';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { dbStore } from '../configFirebase';
import Swal from 'sweetalert2';

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
    width: 10%;
    color: #fff;
    background-color: #019863;
    padding: .5rem;
    border: none;
`

export default function EditBook() {
    const {
        register,
        handleSubmit,
        setValue
    } = useForm()
    //obteniendo el parametro de la ruta
    const { id_book } = useParams()
    //utilizamos el hook para redigirirnos a otros componentes
    const navigate = useNavigate()

    //hacemos un efecto secundario para que aparezca la informacion del libro seleccionado
    useEffect(() => {
        const getBookById = async () => {
            const book = await getDoc(doc(dbStore, "books", id_book))
            
            if(book.exists()){
                const objectBook = book.data()

                //devolvemos la informacion del libro al formulario
                setValue("title", objectBook.title)
                setValue("author", objectBook.author)
                setValue("description", objectBook.description)
            }
        }

        getBookById()
    }, [])

    //metodo para actualizar los datos del libro
    const updateBook = async (data) => {
        try{
            await updateDoc(doc(dbStore, "books", id_book), data)
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Actualizado correctamente",
                showConfirmButton: false,
                timer: 1500
            });

            //cuando el libro se guarde nos redigirimos a la lista de libros
            navigate("/libro/lista")
        }catch(error){
            console.log("Error al actualizar el libro", error)
        }
        
    }

    return (
        <>
            <Title>Editar Libro</Title>
            <ContainerForm>
                <form onSubmit={handleSubmit(updateBook)}>
                    <FormGroup>
                        <label>Titulo</label>
                        <FormField type="text" className='form-control' {...register("title")} />
                    </FormGroup>

                    <FormGroup>
                        <label>Autor</label>
                        <FormField type="text" className='form-control' {...register("author")} />
                    </FormGroup>

                    <FormGroup>
                        <label>Descripcion</label>
                        <FormField type="text" className='form-control' {...register("description")} />
                    </FormGroup>

                    <FormGroup>
                        <Button type="submit" className='btn btn-primary' value='Actualizar Libro' />
                    </FormGroup>
                </form>
            </ContainerForm>
        </>
    )
}

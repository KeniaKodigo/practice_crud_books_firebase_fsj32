import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import { dbStore } from '../configFirebase'
import Swal from 'sweetalert2'

const ItemBook = styled.div`
    color: #fff;
    margin: 1.5rem 0;
    padding-bottom: .5rem;
    border-bottom: 1px solid #214a3c;
`

export default function ListBooks() {
    const [listBooks, setListBooks] = useState([])

    //utilizamos un efecto secundario para que cuando se renderize el componente me muestre la lista de los libros pero solo UNA VEZ
    useEffect(() => {
        //funcion para obtener los datos de los libros de la base de datos
        const getBooks = async () => {
            const resultBooks = await getDocs(collection(dbStore, "books"))
            //mapeamos el resultado de la lista
            const arrayBooks = resultBooks.docs.map((book) => ({
                /**
                 * spread operator (...)
                 * copiamos la data del libro + el id
                 */
                ...book.data(), id: book.id
            }))
            //actualizamos el estado con el arreglo de los libros
            setListBooks(arrayBooks)
        }

        getBooks()
    }, [])

    //metodo para eliminar un libro de forma permanente
    const deleteBook = (id_book) => {
        try{
            Swal.fire({
                title: "Estas seguro de eliminar el libro?",
                text: "El libro se eliminara de manera permanente!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
            if (result.isConfirmed) {
                //si el usuario confirma que quiere eliminar.. eliminamos el libro
                deleteDoc(doc(dbStore, "books", id_book))

                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                    });
                }
            });
        }catch(error){
            console.log("Error al eliminar el libro", error)
        }
    }

    return (
        <section style={{display: 'flex', justifyContent: 'center'}}>
            <section>
                <h1 style={{color: "#fff", textAlign: 'center', margin: "2rem 0"}}>Lista de Libros</h1>
                <section>
                    {
                        listBooks.map((book) => {
                            return (
                                <ItemBook key={book.id}>
                                    <h3 style={{marginBottom: "1rem"}}>{book.title}</h3>
                                    <p><strong>Autor:</strong> {book.author}</p>
                                    <p><strong>Genero:</strong> {book.gender}</p>
                                    <p><strong>Descripcion:</strong> {book.description}</p>

                                    <Link to={`/libro/editar/${book.id}`} style={{backgroundColor: "#019863", color: "#fff", padding: ".3rem", border: "none", marginTop: ".5rem", marginRight: ".5rem"}}><FaEdit /></Link>

                                    <button style={{backgroundColor: "red", color: "#fff", padding: ".3rem", border: "none", marginTop: ".5rem", marginRight: ".5rem"}} onClick={() => deleteBook(book.id)}><MdDelete /></button>
                                </ItemBook>
                            )
                        })
                    }
                </section>
            </section>
        </section>
    )
}

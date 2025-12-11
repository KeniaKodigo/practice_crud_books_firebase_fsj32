import React from 'react'
import styled from 'styled-components'

const Container = styled.main`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    color: #fff;
    margin: 2.5rem;
    gap: 1rem;
`

const Title = styled.h2`
    font-weight: bold;
    font-size: 3rem;
    color: #fff;
`

const ImgBook = styled.img`
    width: 100%;
`

export default function Home() {
    return (
        <Container>
            <section>
                <ImgBook src='https://lh3.googleusercontent.com/aida-public/AB6AXuDFl-MQEvM9JyH9FkIp_iMpuioHyRCJVss-saq7qyN7sXl9DNtNE9dC_BWnaO1GtZ9O-MVqwzulMgXU9zwL5HtNkU6EwcABaYFpJ7h4z3hAU0_miBGJlapjEXSd6PFe94LOBP87tTjmOxYrMpUxYlo6kc1Qg2wxs9_GCbU5OEU8xl4ltPxeSzjboC_H_L3i5picVeqSaGA5bmPtk8n9emmLOgAxROtHuHddjauulUMcPaAHFSFQOMsxD1p-nD9TlV6HOa--kYDwoHg' alt='books fsj28' />
            </section>
            <section>
                <Title>Discovery Your Next Great Read</Title>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, necessitatibus?</p>

                <button>Ir a los Libros</button>
            </section>
        </Container>
    )
}

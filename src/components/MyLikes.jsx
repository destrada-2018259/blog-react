import Container from 'react-bootstrap/Container'
import './myLikes.css'

export const MyLikes = () => {
    return (
        <>
            <Container fluid className='myLikes-hero' >
                <h1 className='myLikes-hero-title'>Mis gustos!</h1>
                <Container>
                <p className='myLikes-hero-p' >Dentro de las cosas que me gustan están la programación, los videojuegos así como también las series y cultura de Japón. También me gusta aprender cosas nuevas todos los días, lo que hasta día de hoy me ha llevado a querer seguir aprendiendo de todo lo que me gusta y de todo lo que conozco. <br /><br /> A continuación. te presento de manera gráfica, algunos de mis gustos.</p>
                </Container>
            </Container>
        </>
    )
}

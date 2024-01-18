import Container from 'react-bootstrap/Container'
import './myLikes.css'

export const MyLikes = () => {
    return (
        <>
            <Container fluid className='myLikes-hero' >
                <h1 className='myLikes-hero-title'>Conóceme un poco más!</h1>
                <Container>
                <p className='myLikes-hero-p' >¡Hola y bienvenido/a a mi rincón personal! Soy Daniel, un apasionado del mundo de la tecnología, el deporte y la cultura japonesa. En mi día a día, encuentro la inspiración en la elegancia del código, la fuerza del gimnasio, la emoción del baloncesto y la creatividad infinita del manga japonés. ¿Quieres saber más sobre cómo estos intereses moldean mi enfoque en el trabajo y en la vida? ¡Sigue leyendo y acompáñame en este viaje donde la pasión y el profesionalismo se encuentran! <br /><br /> A continuación, te presento de manera gráfica algunos de mis gustos.</p>
                </Container>
            </Container>
        </>
    )
}

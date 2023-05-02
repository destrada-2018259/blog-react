import Container from 'react-bootstrap/Container'
import './myProjects.css'

export const MyProjectsHero = () => {
  return (
    <>
    <Container fluid className='myProjects-hero' >
        <h1 className='myProjects-hero-title'>Mis proyectos</h1>
        <Container>
        <p className='myProjects-hero-p' >Al ser un desarrollador joven aún no tengo tantos proyectos realizados. pero me gustaría compartir los que para mí son los más destacados. He trabajado y conozco las tecnologías de Java SE, Java EE, HTML, CSS, JS, ReactJS, MySQL, MongoDB y NodeJS. <br /> A día de hoy quiero seguir indagando en el desarrollo web, para poder ser un desarrollador FullStack. Héchate un vistazo a mis proyectos en GitHub! </p>
        </Container>
    </Container>
    </>
  )
}

import Container from 'react-bootstrap/Container'
import './myProjects.css'

export const MyProjectsHero = () => {
  return (
    <>
      <Container fluid className='myProjects-hero' >
        <h1 className='myProjects-hero-title'>Mis proyectos</h1>
        <Container>
          <p className='myProjects-hero-p' >
            A lo largo de mi carrera he aprendido con la práctica, desarrollando múltiples proyectos en distintas tecnologías de los cuales he aprendido mucho. En mi GitHub podrás ver más a detalle cada uno de los repositorios públicos que tengo hasta el momento. Espero poder seguir actualizando con frecuencia mi perfil y aumentando el nivel de mis proyectos.
            <br />
            A día de hoy quiero seguir indagando en el desarrollo web, para poder ser un desarrollador FullStack. Héchate un vistazo a mis proyectos en GitHub!
          </p>
        </Container>
      </Container>
    </>
  )
}

import Container from 'react-bootstrap/Container'
import './myProjects.css'

export const MyKnowledgeHero = () => {
  return (
    <>
      <Container fluid className='myProjects-hero' >
          <h1 className='myProjects-hero-title'>Conocimientos y tecnologías</h1>
          <Container>
            <p className='myProjects-hero-p' >Durante estos años de estudio tanto dentro de mi centro educativo como por cuenta propia he generado conocimientos de distintas áreas del desarrollo de software, tanto Backend, Frontend, bases de datos, así como a trabajar con distintos paradigmas de la programación como la programación orientada a objetos y la programación funcional. He trabajado con desarrollo de API's y arquitectura de microservicios.<br /> 
            <br/>
            He utilizado distintos lenguajes de programación y frameworks, y día con día sigo aprendiendo cosas nuevas, a continuación te muestro algunas de estas tecnologías. </p>
          </Container>
      </Container>
    </>
  )
}

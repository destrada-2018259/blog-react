import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container'
import './myProjects.css'
export const MyProjectsTable = () => {
    return (
        <Container fluid className='myProjects-background' >
            <Container>

            <Table bordered  className='myProjects-table'>
                <thead >
                    <tr className='myProjects-table-th'>
                        <th>#</th>
                        <th>Proyecto</th>
                        <th>Descripción</th>
                        <th>Tecnologías</th>
                        <th>Código</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='myProjects-table-td'>
                        <td>1</td>
                        <td>Venta Online</td>
                        <td>Proyecto trabajado a nivel de Back-End que simula una tienda online con productos, usuarios, facturas entre otros.</td>
                        <td>NodeJS, MongoDB</td>
                        <td><a href="https://github.com/destrada-2018259/Venta-Online-">Clic Acá</a></td>
                    </tr>
                    <tr className='myProjects-table-td'>
                        <td>2</td>
                        <td>Almacenadora</td>
                        <td>Proyecto trabajado a nivel de FrontEnd con React, funciona como un ToDoList.</td>
                        <td>React, HTML, CSS, JS</td>
                        <td><a href="https://github.com/destrada-2018259/almacenadora">Clic Acá</a></td>
                    </tr>
                    <tr className='myProjects-table-td'>
                        <td>3</td>
                        <td>Gif App</td>
                        <td>Proyecto trabajado a nivel de FrontEnd con React, podemos buscar Gifs a nuestro gusto.</td>
                        <td>React, HTML, CSS, JS</td>
                        <td><a href="https://github.com/destrada-2018259/gif-app-react">Clic Acá</a></td>
                    </tr>
                    <tr className='myProjects-table-td'>
                        <td>4</td>
                        <td>Control de Empresas</td>
                        <td>Proyecto trabajado a nivel de BackEnd con NodeJs. Sistema de empresas y sucursales con asignaciones entre sí.</td>
                        <td>NodeJS, MongoDB</td>
                        <td><a href="https://github.com/destrada-2018259/control-empresas">Clic Acá</a></td>
                    </tr>
                    <tr className='myProjects-table-td'>
                        <td>5</td>
                        <td>Control de Alumnos</td>
                        <td>Proyecto trabajado a nivel de BackEnd con NodeJs. Sistema de alumnos y cursos, donde podemos asignarnos a los cursos.</td>
                        <td>NodeJs, MongoDB</td>
                        <td><a href="https://github.com/destrada-2018259/control-alumnos-practica-supervisada">Clic Acá</a></td>
                    </tr>
                    <tr className='myProjects-table-td'>
                        <td>6</td>
                        <td>Agenda Web</td>
                        <td>Proyecto trabajado a nivel de FrontEnd con tecnologías web básicas. Agenda web con vista previa <a href="https://destrada-2018259.github.io/agenda-web/">acá.</a></td>
                        <td>HTML, CSS, JS</td>
                        <td><a href="https://github.com/destrada-2018259/agenda-web">Clic Acá</a></td>
                    </tr>
                    <tr className='myProjects-table-td'>
                        <td>7</td>
                        <td>Blog antiguo</td>
                        <td>Blog sencillo hecho en tecnologías web básicas. puedes verlo <a href="https://destrada-2018259.github.io/Laboratorio-1-Taller/">acá.</a></td>
                        <td>HTML, CSS, JS</td>
                        <td><a href="https://github.com/destrada-2018259/Laboratorio-1-Taller">Clic Acá</a></td>
                    </tr>

                </tbody>
            </Table>
            </Container>
        </Container>
    )
}

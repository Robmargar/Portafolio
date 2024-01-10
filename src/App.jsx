import { useState } from 'react'
import Foto_perfil from "./assets/Foto_Perfil.jpeg"
import nb from "./assets/rm_nb.png"
import bn from "./assets/rm_bn.png"



function App() {
  const [info, setInfo] = useState("1");

  const handleOnClick=(nombre="1")=>{
    console.log(`Hola ${nombre}`);
    setInfo(nombre);
    console.log(info)
  };
      // <div className='m-4'>
    // <h1 className=' bg-blue-200 text-3xl'>TAILWIND & REACT</h1>
    //  <section className='bg-blue-100'>
    //   <h2 className='mt-4 text-center'> Creado con estados de React</h2>
    //   <nav className='bg-gray-200 mt-4'> 
    //     <a className='mx-2' onClick={()=>handleOnClick("1")}>Pestaña 1</a>
    //     <a className='mx-2' onClick={()=>handleOnClick("2")}>Pestaña 2</a>
    //     <a className='mx-2'onClick={()=>handleOnClick("3")}>Pestaña 3</a>
    //   </nav>
    //   <article>
    //     <Card info={info}/>
    //   </article>
    //  </section>

    //  <section className='bg-gray-400 my-8 pb-2'>
    //  <h2 className='bg-blue-100'> Creado con Children</h2>
    //      <CardChildren >
    //         <h1  className="text-2xl ">Tag 1</h1>
    //         <span> Quae ad quas praesentium maiores rerum dolor, est explicabo quibusdam beatae.</span>
    //     </CardChildren>
    //     <CardChildren >
    //         <h1  className="text-2xl my-2 ">Tag 2</h1>
    //         <span> Quae ad quas praesentium maiores rerum dolor, est explicabo quibusdam beatae.</span>
    //     </CardChildren>
    //     <CardChildren >
    //         <h1  className="text-2xl my-2 ">Tag 3</h1>
    //         <span> Quae ad quas praesentium maiores rerum dolor, est explicabo quibusdam beatae.</span>
    //     </CardChildren>
      
    //  </section>
     
    //  <Grid/>

    // </div>

  return (

    <>
    <nav class="Navbar">
      <img src={nb} class="logo" alt="Foto_perfil" />
      <a href="#experiencia">Experiencia</a>
      <a href="#Proyectos">Proyectos</a>
      <a href="https://www.linkedin.com/in/roberto-mart%C3%ADnez-52ba10215/" target="_blank" rel='noreferrer'>LinkedIn</a>
      <a href="https://github.com/Robmargar" target="_blank" rel='noreferrer'>GitHub</a>
      
    </nav>


    <section class="head">
      <article>
       <h1>Roberto Martínez  </h1>
       <h2>Full Stack Developer.</h2>
      </article>
         
      <img src={Foto_perfil} class="perfil" alt="Foto_perfil" />
    </section>

    <section>
      <span>Desarrollemos sitios web asombrosos y espectaculares.</span>
      <article class="me"> 
        <h3>Sobre mí</h3>
        <p>
        Proactive developer, excellent teammate, organized and responsible. Learning new technologies and best practices is my goal, I enjoy working in a team, proposing and developing solutions to problems. I am passionate about the challenges that arise when working on the front-end and the back-end.
        </p>
      </article>
    </section>

    <section class="proyectos">
      <h3>Proyectos</h3>
      <span> Buenos proyectos con grandes enseñanzas </span>
      <h4>MiPCIdeal</h4>
      <h4>MiCole</h4>
      <h4>Videojuegos</h4>
      <h4>Tik Tak Toe</h4>
    </section>

    <section class="habilidades">
      <h3>Habilidades</h3>
      <div className='habcontainer'>
        <div>HTML</div>
        <div>CSS</div>
        <div>JavaScipt</div>
        <div>React</div>
        <div>Redux</div>
      </div>
    </section>

    <section class="contacto">
      <h3>Contactame</h3> 
      <span> Aqui va una imagen</span>
      <ul>
        <li>LinkedIn</li>
        <li>Github</li>
        <li>Mail</li>
      </ul>

    </section>

    
  
    </>
  )
}

 
export default App
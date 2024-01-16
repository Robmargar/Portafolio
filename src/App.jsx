import {Intro} from './components/Intro.jsx'
import {Nav} from './components/Nav.jsx'
import { Me } from './components/Me.jsx'
import { Hab_Proy } from './components/Hab_Proy.jsx'
import { Footer } from './components/Footer.jsx'
import { Contact } from './components/Contact.jsx'




function App() {
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

    <div class='w-4/5 '>
      <Intro/>
      <Nav/>
      <Me/>
      <Hab_Proy/>
      <Contact/>
      <Footer/>
    </div>
  )
}

 
export default App

export const Nav = () => {
  return (
    <nav className=''>
        <div class='grid justify-items-center border-b  mt-2'>  
            <ul class='grid grid-cols-4 justify-items-center  divide-x mb-3' >
                <li >
                    <a class='text text-xl text-beige mx-8' href="#Me">Acerca de mi</a>
                </li>
                <li >
                    <a class='text text-xl text-beige mx-8' href="#experiencia">Experiencia</a>
                </li>
                <li >
                    <a class='text text-xl text-beige mx-8' href="#Proyectos">Proyectos</a>
                </li>
                <li >
                    <a class='text text-xl text-beige mx-8' href="#Proyectos">Contactame</a>
                </li>

            </ul> 
        </div>
    </nav>
  )
}
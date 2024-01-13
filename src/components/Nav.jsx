
export const Nav = () => {
  return (
    <nav className='p-5'>
        <div className='grid grid-cols-3 bg-cafe'>
            <ul className='flex space-x-5 ' >
            <li className='bg-beige'>
                <a href="#experiencia">Experiencia</a>
            </li>
            <li className='bg-amarillo'>
                <a href="#Proyectos">Proyectos</a>
            </li>
            <li className='bg-amarillo'>
                <a href="#Proyectos">Contactame</a>
            </li>
            </ul> 
        </div>
    </nav>
  )
}
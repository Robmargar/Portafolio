import Foto_perfil from "../assets/Foto_Perfil.jpeg"

export const Intro = () => {
  return (
    <section class='grid grid-cols-2 items-center p-10'>
    <article>
    <h2 class='text-xl text-naranja'>Desarrollador Full Stack.</h2>
    <h1 class='text-6xl text-beige'>Roberto Martínez García </h1>
    <span class=" text-cafe m-2">+2 años desarrollando sitios únicos.</span>
    <ul className='flex space-x-5 items-center m-2'>
      <li>
        <a href="https://github.com/Robmargar" target="_blank" rel='noreferrer'>
          <img class='w-10' src="../public/github-am.svg" alt="GitHub" />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/roberto-mart%C3%ADnez-52ba10215/" target="_blank" rel='noreferrer'>
          <img class='w-10' src="../public/linkedin-am.svg" alt="LinkedIn" />
        </a>
      </li>
      <li>
        <a href="https://github.com/Robmargar" target="_blank" rel='noreferrer'>
          <img class='w-10' src="../public/pdf-am-1.svg" alt="Curriculum" />
        </a>
      </li>
    </ul>
    </article>
    <img class="rounded-full scale-75" src={Foto_perfil}  alt="Foto_perfil" />
  </section>
  )
}

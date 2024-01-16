import React from 'react'

export const Footer = () => {
  return (
    <section>
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
          <img class='w-10' src="../public/mail-am.svg" alt="Curriculum" />
        </a>
      </li>
    </ul>
        <span> Creado y Diseñado por Roberto Martínez García</span>
    </section>
  )
}

import React from 'react'

export const Me = () => {
  return (
    <section class='' >
    <article class='flex flex-col items-center m-3'> 
      <h3 class='text-3xl text-amarillo mt-4'>Sobre mí</h3>
      <p class='text text-xl text-center text-beige mt-4'>
      Proactive developer, excellent teammate, organized and responsible. Learning new technologies and best practices is my goal, I enjoy working in a team, proposing and developing solutions to problems. I am passionate about the challenges that arise when working on the front-end and the back-end.
      </p>
    
      <h3 class='text-3xl text-amarillo mt-4'>Tecnologias</h3>
      <div class="flex justify-center m-4">
        <ul class="flex flex-row">
          <li class="w-10 mx-4">
              <img src="../public/SVG_NATURAL/css3-icon-nat.svg" alt="" />
          </li>
          <li class="w-10 mx-4">
              <img src="../public/SVG_NATURAL/html5-icon-nat.svg" alt="" />
          </li>
          <li class="w-10 mx-4">
              <img src="../public/SVG_NATURAL/js-icon-nat.svg" alt="" />
          </li>
          <li class="w-10 mx-4">
              <img src="../public/SVG_NATURAL/nodejs-icon-nat.svg" alt="" />
          </li>
          <li class="w-10 mx-4">
              <img src="../public/SVG_NATURAL/postgresql-icon-nat.svg" alt="" />
          </li>
          <li class="w-10 mx-4">
              <img src="../public/SVG_NATURAL/react-icon-nat.svg" alt="" />
          </li>
          <li class="w-10 mx-4">
              <img src="../public/SVG_NATURAL/redux-icon-nat.svg" alt="" />
          </li>
          <li class="w-10 mx-4">
              <img src="../public/SVG_NATURAL/tailwind-icon-nat.svg" alt="" />
          </li>
        </ul>
      </div>
    </article>
  </section>
  )
}

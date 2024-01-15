import { Card } from "./Card"

export const Hab_Proy = () => {
   var info={
      nombre:"Hola",
      descripcion:"Estamos haciendo una prueba de descripcion",
      tecnologias:[1,2,3]
   };
  return (
    <section class='flex flex-col items-center m-3'>
    <h3 class='text-3xl text-amarillo'>Habilidades</h3>
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
    <h3 class='text-3xl text-amarillo'>Proyectos</h3>
    <span class="text-xl text-cafe"> Buenos proyectos con grandes enseñanzas </span>
    <Card info={info}/>
  </section>
  )
}

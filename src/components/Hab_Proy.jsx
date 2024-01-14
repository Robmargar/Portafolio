import { Card } from "./Card"
import { CardChildren } from "./CardChildren";

export const Hab_Proy = () => {
   var info={
      nombre:"Hola",
      descripcion:"Estamos haciendo una prueba de descripcion",
      tecnologias:"react,JS, Tailwind"};
  return (
    <section className='m-3'>
    <h3 className='text-3xl'>Habilidades</h3>
    <ul class="flex flex-row">
        <li class="w-12">
           <img src="../public/SVG_NATURAL/css3-icon-nat.svg" alt="" />
        </li>
        <li class="w-12">
           <img src="../public/SVG_NATURAL/html5-icon-nat.svg" alt="" />
        </li>
        <li class="w-12">
           <img src="../public/SVG_NATURAL/js-icon-nat.svg" alt="" />
        </li>
        <li class="w-12">
           <img src="../public/SVG_NATURAL/nodejs-icon-nat.svg" alt="" />
        </li>
        <li class="w-12">
           <img src="../public/SVG_NATURAL/postgresql-icon-nat.svg" alt="" />
        </li>
        <li class="w-12">
           <img src="../public/SVG_NATURAL/react-icon-nat.svg" alt="" />
        </li>
        <li class="w-12">
           <img src="../public/SVG_NATURAL/redux-icon-nat.svg" alt="" />
        </li>
        <li class="w-12">
           <img src="../public/SVG_NATURAL/tailwind-icon-nat.svg" alt="" />
        </li>
    </ul>
    <h3 className='text-3xl'>Proyectos</h3>
    <span> Buenos proyectos con grandes enseñanzas </span>
    <Card info={info}/>
  </section>
  )
}

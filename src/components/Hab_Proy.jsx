import { Card } from "./Card"

export const Hab_Proy = () => {
   var info=[
   {
      nombre:"Hola",
      descripcion:"Estamos haciendo una prueba de descripcion",
      tecnologias:[1,2,3]
   },
   {
      nombre:"Hola 2",
      descripcion:"Estamos haciendo una prueba de descripcion 2",
      tecnologias:[2,3,1]
   },
   {
      nombre:"Hola 3",
      descripcion:"Estamos haciendo una prueba de descripcion 3",
      tecnologias:[3,1,2]
   },

];
return (
    <section class='flex flex-col items-center m-3 '>
    
    <h3 class='text-3xl text-amarillo mt-6'>Proyectos</h3>
    <span class="text-xl text-beige"> Buenos proyectos con grandes enseñanzas </span>
    <div>
    { info.map((e)=>(
         <Card 
         nombre={e.nombre}
         descripcion={e.descripcion}
         tecnologias={e.tecnologias}/>
        
    ))}
    </div>
  </section>
  )
}

import prueba from "../assets/prueba.jpg"
export const Card = ({info}) => {
  console.log(info);
  
  return (
    <section class="flex justify-center m-4">
      <article class="grid grid-cols-2 rounded-3xl p-2 bg-beige w-3/4">
        <div class="flex flex-col justify-center">
          <h1 class="text-2xl m-2">Tab {info.nombre} </h1>
          <p class="text m-2">{info.descripcion}</p>
          <p class="flex flex-row m-2">{info.tecnologias}</p>
        </div>
        <img class="scale-75 rounded-xl" src={prueba} alt="imagen de prueba" />
      </article>
    </section>
  )
}

import prueba from "../assets/prueba.jpg"
export const Card = ({info}) => {
  console.log(info);
  
  return (
    <article class="grid grid-cols-2 border p-2 bg-gray-100">
      <div>
        <h1 class="text-2xl my-4 ">Tab {info.nombre} </h1>
        <p>{info.descripcion}</p>
        <p>{info.tecnologias}</p>
      </div>
      <img class="scale-50" src={prueba} alt="imagen de prueba" />
    </article>
  )
}

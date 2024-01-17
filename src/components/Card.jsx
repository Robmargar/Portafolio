import prueba from "../assets/prueba.jpg"

export const Card = ({nombre, descripcion, tecnologias}) => {
  console.log(descripcion);
  var log;
  const logos=[
    {
       key:1,
       imagen:"../public/SVG_BLACK/css3-icon-black.svg"
    },
    {
       key:2,
       imagen:"../public/SVG_BLACK/html5-icon-black.svg"
    },
    {
       key:3,
       imagen:"../public/SVG_BLACK/js-icon-black.svg"
    }
 ];
  return (
    <section class="flex justify-center my-4">
      <article class="grid grid-cols-2 rounded-3xl p-2 bg-beige w-5/6">
        <div class="flex flex-col justify-center">
          <h2 class="text-2xl ml-2">Tab {nombre} </h2>
          <p class="text text-sm ml-2">{descripcion}</p>
          <h3 class="text text-sm ml-2">Tecnologias:</h3>
          <div class="grid grid-cols-2  mt-1">
            <div class="flex flex-row ml-2">
              {
              tecnologias.map((t)=> (
                log=logos.find(l=>(l.key===t)),
                <img class="w-5 mx-1"src={log.imagen} alt="" />        
              ))}  
            </div>
            <a class="grid justify-end" href="https://github.com/Robmargar/Portafolio">
              <img class="w-5 "src="../public/github-black.svg" alt="" />
            </a>
          </div>
        </div>
        <a href="https://www.svgrepo.com/svg/353196/mail-with-circle">
          <img class="p-4 rounded-xl " src={prueba} alt="imagen de prueba" />
        </a>
      </article>
    </section>
  )
}

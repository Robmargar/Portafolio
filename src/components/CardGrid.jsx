// rafc


export const CardGrid = ({nombre,descripcion}) => {

  return (
    <div className="border p-2 bg-red-100 bg- blue-400 m-2">
      <h1 className="text-xl">{nombre}</h1>
      <p>{descripcion}</p>
    </div>
  )
}

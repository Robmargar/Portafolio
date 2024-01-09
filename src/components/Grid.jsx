import { CardGrid } from "./CardGrid";

export const Grid = () => {
    const users=[
        {
          id: 1,
          nombre: "Roberto",
          descripcion: "Roberto Lorem impsun shalalalal shalalala shalalala"
        },
        {
          id: 2,
          nombre: "Juan",
          descripcion: "Juan Lorem impsun shalalalal shalalala shalalala"
        },
        {
          id: 3,
          nombre: "Pedro",
          descripcion: "Pedro Lorem impsun shalalalal shalalala shalalala"
        },
        {
          id: 4,
          nombre: "Raul",
          descripcion: "Raul Lorem impsun shalalalal shalalala shalalala"
        },
        {
          id: 5,
          nombre: "Pancho",
          descripcion: "Pancho Lorem impsun shalalalal shalalala shalalala"
        },
        {
          id: 6,
          nombre: "Chencha",
          descripcion: "Chencha Lorem impsun shalalalal shalalala shalalala"
        },
        {
          id: 7,
          nombre: "Tita",
          descripcion: "Tita Lorem impsun shalalalal shalalala shalalala"
        },
        {
          id: 8,
          nombre: "Petra",
          descripcion: "Petra Lorem impsun shalalalal shalalala shalalala"
        },
        {
          id: 9,
          nombre: "Max",
          descripcion: "Max Lorem impsun shalalalal shalalala shalalala"
        },
        {
          id: 10,
          nombre: "Rob",
          descripcion: "Rob Lorem impsun shalalalal shalalala shalalala"
        },
        {
          id: 11,
          nombre: "Manco",
          descripcion: "Manco Lorem impsun shalalalal shalalala shalalala"
        },
        {
          id: 12,
          nombre: "Fulanito",
          descripcion: "Fulanito Lorem impsun shalalalal shalalala shalalala"
        },
      ];
  return (
    <div className='grid grid-cols-1  sm:grid-cols-4 bg- red-500 mt-4 '>
        {
            users.map(user=>{
            const{id, nombre, descripcion}=user;
            return(
                <CardGrid key={id} nombre={nombre} descripcion={descripcion}/>
            )
            })
        }
    </div>
  )
}

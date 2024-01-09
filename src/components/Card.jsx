// rafc


export const Card = ({info}) => {
  console.log(info);
  
  return (
    <div className="border p-2 bg-gray-100">
      <h1 className="text-2xl my-4 ">Tab {info} </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laborum nostrum fugit mollitia suscipit, labore repudiandae facere vel debitis? Quae ad quas praesentium maiores rerum dolor, est explicabo quibusdam beatae.</p>
    </div>
  )
}

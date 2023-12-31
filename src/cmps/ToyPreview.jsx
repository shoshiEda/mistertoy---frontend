


export function ToyPreview({ toy }) {

   //console.log(toy.url)

    return (
        <article className="toy-preview">
            <h2>{toy.name}</h2>
            <h4>created At:{new Date(toy.createdAt).getDate() + ' / ' + new Date(toy.createdAt).getMonth()} </h4>
            <h4>Price: {toy.price} NIS</h4>
           
            <img src={ toy.url? `../src/${toy.url}` : '../src/assets/img/default.jpeg'} alt="" />
            
        </article>
    )
}
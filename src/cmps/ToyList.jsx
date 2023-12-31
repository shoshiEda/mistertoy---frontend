import { ToyPreview } from "./ToyPreview.jsx";




export function ToyList({toys, onSelectToyId ,removeToy,editPrice}){

    //console.log(toys)
    return(
        <ul className="toy-list">
            {toys.map(toy => <li key={toy._id}>
               
                <ToyPreview toy={toy}/>
                <section>
                <button onClick={() => {removeToy(toy._id)}}>X</button>
                <button onClick={() => {editPrice(toy)}}>Edit price</button>
                
                        <button onClick={() => onSelectToyId(toy._id)}>Details</button>
                    </section>
            </li>)        
}
</ul>
    )}


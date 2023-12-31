import { toyService } from "../services/toy.service.js"
import { useState, useEffect } from "react"

export function ToyDetails({ toyId, onBack }) {
  const [toy, setToy] = useState(null)

  useEffect(() => {
    console.log(toyId)
    toyService
      .get(toyId)
      .then((toy) => setToy(toy))
      .catch((err) => console.log("err:", err))
  }, [])

  if (!toy) return <div>Loading...</div>
  return (
    <section className="toy-details">
      <h1>Toy name: {toy.name}</h1>
      <h4>
        Created at:
        {new Date(toy.createdAt).getDate() +
          " / " +
          new Date(toy.createdAt).getMonth()}{" "}
      </h4>
      <h4>Price: {toy.price} NIS</h4>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis quae
        fuga eveniet, quisquam ducimus modi optio in alias accusantium corrupti
        veritatis commodi tenetur voluptate deserunt nihil quibusdam. Expedita,
        architecto omnis?
      </p>
      <img src={toy.url? `../src/${toy.url}` : '../src/assets/img/default.jpeg'} alt=""/>
      <div></div>
      <button onClick={onBack}>Back</button>
    </section>
  )
}

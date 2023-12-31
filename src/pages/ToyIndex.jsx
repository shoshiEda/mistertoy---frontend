import { ToyList } from "../cmps/ToyList.jsx"
import { ToyDetails } from "./ToyDetails.jsx"
import { toyService } from "../services/toy.service.js"
import { ToyFilter } from "../cmps/ToyFilter.jsx"
import { useState, useEffect,useRef } from "react"
import { useSelector,useDispatch } from "react-redux"

import { loadToys, removeToy, saveToy} from '../store/actions/toy.action.js'
import { utilService } from "../services/util.service.js"

// import { useSelector } from "react-redux"

export default function ToyIndex() {
  const dispatch = useDispatch()

  const toys = useSelector((storeState) => storeState.toyModule.toys)
  const [selectedToyId, setSelectedToyId] = useState(null)
  const [filterBy, setFilterBy] = useState(toyService.getDefaultFilter()) // => [{},()]
  const debounceOnSetFilter = useRef(utilService.debounce(onSetFilter,500))

  useEffect(() => {
    async function fetchToys(){
    try{
     await loadToys(filterBy)
    }
    catch(err)
    {
      alert('There was a problem. please try again')
    }
  }
  fetchToys()
    }, [filterBy])

  function onSelectToyId(toyId) {
    setSelectedToyId(toyId)
  }

  function onSetFilter(filterBy) {
    setFilterBy(filterBy)
  }

  async function onAddToy(){
    const newToy={}
    newToy.name= prompt('Please enter the name of the toy:')
    newToy.price= +prompt('Please enter the price of the toy:')
   
    newToy.createdAt = Date.now()
    try{
      await saveToy(newToy)
      }
      catch(err)
      {
        alert('There was a problem. please try again')
      }
  }

  async function editPrice(toy){
      let newPrice=+prompt('Please enter the price of the toy:')
      toy.price=newPrice
      try{
      await saveToy(toy)
      }
      catch(err)
      {
        alert('There was a problem. please try again')
      }
  }

  if (!toys) return <div>loading...</div>
  return (
    <section className="toy-index">
      {!selectedToyId && (
        <>
          <h1>Welcome to the toy index</h1>
          <ToyFilter filterBy={filterBy} onSetFilter={debounceOnSetFilter.current} />
          <button className="add-toy" onClick={onAddToy}>Add new toy</button>
          <ToyList toys={toys} onSelectToyId={onSelectToyId} removeToy={removeToy} editPrice={editPrice} />
        </>
      )}
      {selectedToyId && (
        <ToyDetails
          onBack={() => setSelectedToyId(null)}
          toyId={selectedToyId}
        />
      )}
    </section>
  )
}

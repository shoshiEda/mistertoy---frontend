import { useState, useEffect } from "react"

//props.filterBy props.onset 
export function ToyFilter({ filterBy, onSetFilter }) {
  const [filterByToEdit, setFilterByToEdit] = useState(filterBy)
  //const [isChacked,setIsChacked]=useState('false')
  const labels = [
    "All",
    "Barbie",
    "On wheels",
    "Box game",
    "Art",
    "Baby",
    "Doll",
    "Puzzle",
    "Outdoor",
    "Battery Powered",
  ]

  useEffect(() => {
    onSetFilter(filterByToEdit)
  }, [filterByToEdit])

  function onFilterToys(ev) {
    ev.preventDefault()
    onSetFilter(filterByToEdit)
  }

  function handleChange({ target }) {
    let value = target.value
    const field = target.name
    const type = target.type


    if (type === "number") value = +value

    //if( type ==="chackbox") setIsChacked("true")

    setFilterByToEdit((prevFilterBy) => ({ ...prevFilterBy, [field]: value }))
  }

  const { txt, price, catagory, inStock } = filterByToEdit
  return (
    <section className="toy-filter">
      <h2>Filter Our Toys</h2>

      <form onSubmit={onFilterToys}>
        <select onChange={handleChange} name="sort" className="sort">
          <option value="">Select Sorting</option>
          <option value={""}>All</option>
          <option value={"name"}>By Name</option>
          <option value={"price"}>By price</option>
          <option value={"date"}>By date</option>
        </select>
        <label htmlFor="catagory">Filter by type:</label>
        <select name="catagory" onChange={handleChange} id="catagory">
          {labels.map((label) => (
            <option key={label} value={label}>
              {label}
            </option>
          ))}
        </select>
        <label htmlFor="txt">Toy name: </label>
        <input
          value={txt}
          onChange={handleChange}
          type="text"
          id="txt"
          name="txt"
        />

        <label htmlFor="price">max price: </label>
        <input
          value={price || ""}
          onChange={handleChange}
          type="number"
          id="price"
          name="price"
        />
        <div className="check-box">
          <input
            type="checkbox"
            /*chacked={isChacked}
            onChange={handleChange}
            id="inStock"
            name="inStock"*/
          />
          <label htmlFor="inStock">In stock only: </label>
          </div>
        <br />
        <button>Submit</button>
      </form>
    </section>
  )
}

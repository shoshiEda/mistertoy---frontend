import { toyService } from "../../services/toy.service.js"
import { store } from "../store.js"
import { SET_TOYS, REMOVE_TOY, ADD_TOY, UPDATE_TOY } from "../reducers/toy.reducer.js"


export async function loadToys(filterBy) {
    try{
        let toys = await toyService.query(filterBy)
        return store.dispatch({ type: SET_TOYS, toys })
    }
    catch(err)  {
            console.log('cannot load toys, heres why:', err)
            throw err
        }
}

export async function removeToy(toyId) {
    try{
     let toy = toyService.remove(toyId)
     return store.dispatch({ type: REMOVE_TOY, toyId })
    }
    catch(err) {
            console.log('cannot remove toy, heres why:', err)
            throw err
        }
}

export async function saveToy(toy) {
    
    const type = (!toy._id) ? ADD_TOY : UPDATE_TOY
    try{
   let savedToy = toyService.save(toy)
            return store.dispatch({ type, toy: savedToy })
    }
    catch(err)  {
            console.log('cannot save toy, heres why:', err)
            throw err
        }
}

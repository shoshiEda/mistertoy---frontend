import Axios from 'axios'

import { utilService } from './util.service.js'
//import { storageService } from './async-storage.service.js'
import { httpService } from './http.service.js'


const TOY_KEY = 'toyDB'
let gToys=[]
var gFilterBy = { txt: '', price: 0 }
const BASE_URL = 'toy/'

const axios = Axios.create({
  withCredentials: true
})



export const toyService = {
    query,
    get,
    remove,
    save,
    getFilterBy,
    setFilterBy,
    findToyIdx,
    getDefaultFilter,
}

async function query(filterBy) {
  try{
  return await httpService.get(BASE_URL,filterBy)
  }
  catch(err){
    console.log(err)
  }
   
}

async function get(toyId) {
  try{
  return await httpService.get(BASE_URL+ toyId)
  }
  catch(err){
    console.log(err)
  }
}

async function remove(toyId) {
  try{
  return await httpService.delete(BASE_URL+ toyId)
    //return storageService.remove(TOY_KEY, toyId)
}
catch(err){
  console.log(err)
}
}

async function save(toy) {
  try{
    if (toy._id) {
       // return storageService.put(TOY_KEY, toy)
       return await httpService.put(BASE_URL, toy)

    } else {
      //  return storageService.post(TOY_KEY, toy)
      return await httpService.post(BASE_URL, toy)

    }
}
catch(err){
  console.log(err)
}
}


function getFilterBy() {
    return { ...gFilterBy }
}

function setFilterBy(filterBy = {}) {
    if (filterBy.txt !== undefined) gFilterBy.txt = filterBy.txt
    if (filterBy.minSpeed !== undefined) gFilterBy.minSpeed = filterBy.minSpeed
    return gFilterBy
}





function _createToy(title, price) {
    const book = getEmptyToy(name, price,url,timestemp)
    toy._id = utilService.makeId()
    return toy
}

function findToyIdx(toyId)
{
  return axios.get(BASE_URL+ toyId).then(res=>res.data)

  /*return storageService.query(TOY_KEY)
        .then(toys => {
  let idx=toys.findIndex(toy => toy._id === toyId) + 1

  return idx
        })*/
}

function getDefaultFilter(){
  return {txt: '', price:'',inStock:"false" ,catagory:'All'}
}


function _saveToysToStorage() {
  storageService.save(TOY_KEY, gToys)
}


gToys= [
  {
    "_id": 't101',
    "name": 'Bruklyn barbie',
    "price": 44,
    "labels": ['Doll', 'Barbie'],
    "createdAt": 1631031801011,
    "inStock": true,
    "url":'./assets/img/1.jpeg',
   
  },
  {
    "_id": 't102',
    "name": 'Fancy barbie',
    "price": 45,
    "labels": ['Doll', 'Barbie'],
    "createdAt": 1631031801011,
    "inStock": true,
    "url":'./assets/img/2.jpeg'
  },
  {
    "_id": 't103',
    "name": 'Vacation barbie',
    "price": 50,
    "labels": ['Doll', 'Barbie'],
    "createdAt": 1631031801011,
    "inStock": false,
    "url":'../assets/img/3.jpeg'

  },
  {
    "_id": 't104',
    "name": 'Ken barbie',
    "price": 35,
    "labels": ['Doll', 'Barbie'],
    "createdAt": 1631031801011,
    "inStock": false,
    "url":'./assets/img/4.jpeg'

  },
  {
    "_id": 't105',
    "name": 'Talking Doll',
    "price": 123,
    "labels": ['Doll', 'Battery Powered', 'Baby'],
    "createdAt": 1631031801011,
    "inStock": true,
    "url":'./assets/img/5.jpeg'

  },
  {
    "_id": 't106',
    "name": 'Car',
    "price": 280,
    "labels": ['On wheels', 'Battery Powered', 'Outdoor'],
    "createdAt": 1631031801011,
    "inStock": true,
    "url":'./assets/img/6.jpeg'

  },
  {
    "_id": 't107',
    "name": 'Monopoly',
    "price": 70,
    "labels": ['Box game'],
    "createdAt": 1631031801011,
    "inStock": true,
    "url":'./assets/img/7.jpeg'

  },
  {
    "_id": 't108',
    "name": 'Puzzle 12000 pieces',
    "price": 120,
    "labels": ['Puzzle'],
    "createdAt": 1631031801011,
    "inStock": true,
    "url":'./assets/img/8.jpeg'

  },
  {
    "_id": 't109',
    "name": 'Baby table',
    "price": 105,
    "labels": ['Baby'],
    "createdAt": 1631031801011,
    "inStock": true,
    "url":'./assets/img/9.jpeg'

  },
  {
    "_id": 't110',
    "name": 'Baby university',
    "price": 199,
    "labels":  ['Baby'],
    "createdAt": 1631031801011,
    "inStock": true,
    "url":"./assets/img/10.jpeg"

  },
  {
    "_id": 't111',
    "name": 'Baby toy',
    "price": 23,
    "labels":['Baby'],
    "createdAt": 1631031801011,
    "inStock": false,
    "url":'./assets/img/11.jpeg'

  }
]    
 
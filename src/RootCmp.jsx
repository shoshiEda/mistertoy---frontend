import {Route, Routes,BrowserRouter as Router} from 'react-router-dom'
import { Provider } from 'react-redux'
import './assets/style/main.css'



import { About } from "./pages/About.jsx"
import { Home } from "./pages/Home.jsx"
import ToyIndex from "./pages/ToyIndex.jsx"
import { useState } from "react"
import { store } from './store/store'
import { ToyDetails } from './pages/ToyDetails.jsx'
import { AppHeader } from './cmps/AppHeader.jsx'




  export function App() {

    return (
        <Provider store={store}>
            <Router>
                <section className="main-layout app">
                    <AppHeader />
                    <main>
                        <Routes>
                            <Route element={<Home />} path="/" />
                            <Route element={<About />} path="/about" />
                            <Route element={<ToyDetails />} path="/toy/:toyId" />
                            <Route element={<ToyIndex />} path="/toy" />
                        </Routes>
                    </main>
                </section>
            </Router>
        </Provider>
    )
}

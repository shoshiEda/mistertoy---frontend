import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'

/*import { UserMsg } from './UserMsg.jsx'
import { LoginSignup } from './LoginSignup.jsx'
import { userService } from '../services/user.service.js'
import { showErrorMsg } from '../services/event-bus.service.js'
import { SET_USER } from '../store/reducers/user.reducer.js'
import { SET_CART_IS_SHOWN } from '../store/reducers/car.reducer.js'

// const { useSelector, useDispatch } = ReactRedux
// const { Link, NavLink } = ReactRouterDOM
// const { useNavigate } = ReactRouter*/

export function AppHeader() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // TODO: move to storeState
    // const [user, setUser] = useState(userService.getLoggedinUser())
    //const user = useSelector(storeState => storeState.userModule.loggedinUser)
    //const isCartShown = useSelector(storeState => storeState.carModule.isCartShown)

    
    return (
        <header className="app-header full main-layout">
            <section className="header-container">
                <h1>Mister Toy</h1>
                <nav className="app-nav">
                    <NavLink to="/" >Home</NavLink>
                    <NavLink to="/about" >About</NavLink>
                    <NavLink to="/toy" >Toys</NavLink>
                </nav>
            </section>
        </header>
    )
}

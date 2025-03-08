import React from 'react'
import './Style.css'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import Home from '../RoutesFile/Home'
import Bollywood from '../RoutesFile/Bollywood'
import Technology from '../RoutesFile/Technology'
import Hollywood from '../RoutesFile/Hollywood'
import Fitness from '../RoutesFile/Fitness'
import Food from '../RoutesFile/Food'
import NotFound from '../RoutesFile/NotFound'
// import ReactJS from '../TechnologyFile/ReactJS'
// import NodeJS from '../TechnologyFile/NodeJS'
// import MongoDB from '../TechnologyFile/MongoDB'
import CreateStore from '../Store/CreateStore'
import DynamicCompo from './DynamicCompo'

function RouteCompo() {
    return (
        <div>
            <BrowserRouter>
                <h1>The <span>Siren</span> </h1>
                <div className='links'>
                    <NavLink className="link" to='/home'
                        style={({ isActive }) => {
                            return isActive ? { color: "aqua" } : { color: "white" };
                        }}
                    >Home</NavLink>
                    <NavLink className="link" to='/bollywood'
                        style={({ isActive }) => {
                            return isActive ? { color: "aqua" } : { color: "white" };
                        }}
                    >Bollywood</NavLink>
                    <NavLink className="link" to='/technology'
                        style={({ isActive }) => {
                            return isActive ? { color: "aqua" } : { color: "white" };
                        }}
                    >Technology</NavLink>
                    <NavLink className="link" to='/hollywood'
                        style={({ isActive }) => {
                            return isActive ? { color: "aqua" } : { color: "white" };
                        }}
                    >Hollywood</NavLink>
                    <NavLink className="link" to='/fitness'
                        style={({ isActive }) => {
                            return isActive ? { color: "aqua" } : { color: "white" };
                        }}
                    >Fitness</NavLink>
                    <NavLink className="link" to='/food'
                        style={({ isActive }) => {
                            return isActive ? { color: "aqua" } : { color: "white" };
                        }}
                    >Food</NavLink>
                </div>
                <CreateStore>
                    <Routes>
                        <Route path='home' element={<Home />} />
                        <Route path='bollywood' element={<Bollywood />} />
                        <Route path='technology' element={<Technology />}>
                            {/* <Route path='react' element={<ReactJS />} /> */}
                            {/* <Route path='node' element={<NodeJS />} /> */}
                            {/* <Route path='mongo' element={<MongoDB />} /> */}
                        </Route>
                        <Route path='hollywood' element={<Hollywood />} />
                        <Route path='fitness' element={<Fitness />} />
                        <Route path='food' element={<Food />} />
                        <Route path='*' element={<NotFound />} />
                        <Route path='/details/:id' element={<DynamicCompo />} />
                    </Routes>
                </CreateStore>
            </BrowserRouter>
        </div>
    )
}

export default RouteCompo

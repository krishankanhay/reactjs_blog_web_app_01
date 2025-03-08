import React, { useContext } from 'react'
import Footer from './Footer'
import { Bucket } from '../Store/CreateStore'
import { Link } from 'react-router-dom'
import './MyStyle.css'

// import { NavLink, Outlet } from 'react-router-dom';

function Technology() {
  const [bucket_data] = useContext(Bucket)

  return (
    <>
      <h1>This is Technology Page</h1>
      <div className='item_box'>
        {bucket_data
          .filter((data) => data.source === "technology")
          .map((item, index) => {
            return (
              <div key={index}>
                <Link to={`/details/${item.id} `}>
                  <img className='image_box' style={{ width: "240px", height: "150px" }} src={item.urlToImage} alt='not found' />
                </Link>
                <p>{item.title.slice(0, 30)}...</p>
                {/* <p>{item.description.slice(0, 70)}...</p> */}
              </div>
            )
          })}
      </div>
      <div>
        {/* <div className='links'>
        <NavLink className="link" to='/technology/react'
          style={({ isActive }) => {
            return isActive ? { color: "aqua" } : { color: "white" };
          }}
        >ReactJS</NavLink>
        <NavLink className="link" to='/technology/node'
          style={({ isActive }) => {
            return isActive ? { color: "aqua" } : { color: "white" };
          }}
        >NodeJS</NavLink>
        <NavLink className="link" to='/technology/mongo'
          style={({ isActive }) => {
            return isActive ? { color: "aqua" } : { color: "white" };
          }}
        >MongoDB</NavLink>
      </div>
      <Outlet className="" /> */}
      </div>
      <Footer />
    </>
  )
}

export default Technology

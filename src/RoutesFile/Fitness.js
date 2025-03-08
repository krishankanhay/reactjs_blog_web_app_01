import React, { useContext } from 'react'
import Footer from './Footer'
import { Bucket } from '../Store/CreateStore'
import { Link } from 'react-router-dom'

function Fitness() {
  const [bucket_data] = useContext(Bucket)
  return (
    <>
      <h1>This is Fitness Page</h1>
      <div className='item_box'>
        {bucket_data
          .filter((data) => data.source === "fitness")
          .map((item, index) => {
            return (
              <div key={index}>
                <Link to={`/details/${item.id} `}>
                  <img className='image_box' style={{ width: "240px", height: "150px" }} src={item.urlToImage} alt='not found' />
                </Link>
                <p>{item.title.slice(0, 30)}...</p>
              </div>
            )
          })}
      </div>
      <Footer />
    </>
  )
}

export default Fitness

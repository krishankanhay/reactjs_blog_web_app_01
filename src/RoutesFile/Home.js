import React, { useContext } from 'react'
import Footer from './Footer'
import { Bucket } from '../Store/CreateStore'
import { Link } from 'react-router-dom'

function Home() {
  const [bucket_data] = useContext(Bucket)

  return (
    <>
      <h1>This is Home Page</h1>
      <div className='item_box'>
        {bucket_data
          .map((item, index) => {
            return (
              <div key={index}>
                <Link to={`/details/${item.id}`}>
                  <img className='image_box' style={{ width: "200px", height: "120px" }} src={item.urlToImage} alt='not found' />
                </Link>
                <p>{item.title.slice(0, 25)}...</p>
              </div>
            )
          })}
      </div>
      <Footer />
    </>
  )
}

export default Home

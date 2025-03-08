import React, { useContext } from 'react'
import Footer from './Footer'
import { Bucket } from '../Store/CreateStore'
import { Link } from 'react-router-dom';
import './MyStyle.css'


function Bollywood() {
  const [bucket_data] = useContext(Bucket)
  // console.log(bucket_data);

  return (
    <>
      <h1>This is Bollywood Page</h1>
      <div className='item_box'>
        {bucket_data
          .filter((data) => data.source === "bollywood")
          .map((item, index) => {
            // console.log(item.id);
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
      <Footer />
    </>
  )
}

export default Bollywood

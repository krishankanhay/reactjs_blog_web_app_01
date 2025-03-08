import React, { useContext } from 'react'
import { Bucket } from '../Store/CreateStore'
import { useNavigate, useParams } from 'react-router-dom';

function DynamicCompo() {

    const userid = useParams().id;
    const [contextData] = useContext(Bucket);
    // console.log(typeof id);
    const Nav = useNavigate();


    return (
        <div className='item_box_dynamic'>
            {contextData
                .filter((data) => data.id === parseInt(userid))
                .map((item, index) => {
                    // console.log(typeof item.id);
                    return (
                        <div key={index}>
                            <h2>{item.title}</h2>
                            <div className='para_item'>
                                <p>Author : {item.author}</p>
                                <p>PublishedAt : {item.publishedAt}</p>
                                <a href={item.url} target="_blank" rel="noreferrer">click on : goto url page</a>
                            </div>
                            <h4>{item.description}</h4>
                            <img className='image_box' style={{ width: "50vw", height: "60vh" }} src={item.urlToImage} alt='not found' />

                            <p>{item.content}</p>
                            <button className='back_button' onClick={() => Nav(-1)}>Back</button>
                        </div>
                    )
                })}
        </div>
    )
}

export default DynamicCompo



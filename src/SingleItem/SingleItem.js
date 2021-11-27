import React,{useState,useEffect} from 'react';
import './SingleItem.css';

export default function SingleItem({id}) {

    let fetchLink = 'https://fakestoreapi.com/products';
    let updatedLink = fetchLink + '/' + id;

    const [singleData,setSingleData] = useState('');


    useEffect(()=>{
        fetch(updatedLink)
                 .then(res=> {
                   if(res.ok){
                     return res.json()
                   }
                 }).then(singleData => setSingleData(previos => previos = singleData),console.log(singleData))
       },[id])

    return (
        
        <div className='singleItem-container'>
            <img src={singleData.image}></img>
            <h5>{singleData.title}</h5>
            <p>{singleData.price}$</p>
            <span className='desc'>{singleData.description}</span>
                {
                    singleData !== '' ? 
                <div className='rate'><span>{singleData.rating.rate} <img src="https://img.icons8.com/nolan/64/star.png"/></span>
                <span>{singleData.rating.count} <img src="https://img.icons8.com/external-kmg-design-outline-color-kmg-design/32/000000/external-like-feedback-kmg-design-outline-color-kmg-design.png"/></span></div>
                : null }

        </div>
    )
}

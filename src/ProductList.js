import React,{useState, useEffect} from 'react';
import Header from './Header/Header';
import './ProductList.css';
import SingleItem from './SingleItem/SingleItem';

function ProductList() {

  const [data, setData] = useState([]);
  const [itemId, setItemId] = useState(null);
  const [itemPicked, setItemPicked] = useState(false);
  const [cartNumber, setCartNumber] = useState(0);

  useEffect(()=>{
   fetch('https://fakestoreapi.com/products')
            .then(res=> {
              if(res.ok){
                return res.json()
              }
            }).then(data => setData(data))
  },[])
  
  const getId = (id)=>{
    setItemId(previous => previous = id);
  }

  const pickItem = () => {
    setItemPicked(true);
  }

  const unPickItem = () => {
    setItemPicked(false);
  }

  const addToCart = () => {
    setCartNumber(previous => previous + 1)
  }
  
  return (
    <>
    <Header number={cartNumber} pick={unPickItem}></Header>
    {
      itemPicked === false ? 
      <div className='list-container'>
      {        
        data.length > 0 ? 
        data.map(element=>{
          return <div className='list-item' key={element.id}>
                 <img onClick={()=>{getId(element.id);pickItem()}} src={element.image}></img>
                 <h5 onClick={()=>{getId(element.id);pickItem()}}>{element.title}</h5>
                 <p>{element.price}$</p>
                 <button onClick={addToCart}>Add to<img src="https://img.icons8.com/external-icongeek26-outline-gradient-icongeek26/64/000000/external-cart-essentials-icongeek26-outline-gradient-icongeek26.png"/></button>
          </div>
        }) : null
      }
    </div> : <SingleItem option={pickItem} id={itemId}></SingleItem>
    }
    
    
    </>
  )
}

export default ProductList;

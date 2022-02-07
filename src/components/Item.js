import React from 'react';


const Item = ({ ...item }) => ( 
    <div className="card col-md-2">
        { item.lastName }
        <img src={item.picture} alt='' />
   </div>   

);

export default Item;
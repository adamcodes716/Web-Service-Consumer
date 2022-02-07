import React from 'react';
import Item from './Item.js'

const ItemList = (props) => {
    const renderlist = () => {
       // console.log ("props", props);
        const datalist = props.data
        if (datalist) {
            //console.log ("we got data");
            //The sp docs say that they return max of 200 items
            return datalist.map((item) => {
                return (
                      <Item key={item.id} {...item} /> 
                    )
            })
        }

        }
        return (
            <div className="App">
                <div className="body">
                 {renderlist()}
                </div> 
            </div>    
        )
}



export default ItemList
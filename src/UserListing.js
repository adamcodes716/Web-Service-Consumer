import React from 'react';
//import axios from 'axios';

const UserListing = (props) => {
    // eslint-disable-next-line no-unused-vars
    const renderlist = ({ datalist }) => {
        console.log ("renderlist", renderlist);
        console.log ("about to checkdata");
        if (datalist) {
            console.log ("we got data");
            return datalist.map((item) => {
                return (
                    <div className="card col-md-2">
                     {item.lastName}
                     <img src={item.picture} alt='' />
                    </div>
                    )
            })
        }
        }
        return (
          <div>
            {renderlist(props)}
          </div>    
        )
   }

export default UserListing
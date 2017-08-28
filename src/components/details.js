import React from 'react';

const Details = (props) => {

  const list = props.history.location.state

    return (
      <div>
        <h2 className="datail_title">Vehicle Details</h2>
         <div className="d-image">
            <img src={list.primary_photo_url}  alt="" />
         </div>
         <div className="car-card" >
           <div className="each-car">
              <h3>{list.year} {list.make} {list.model}</h3>
                <h4>{list.price}</h4>
                <h4>{list.mileage}</h4>
                <h4>{list.vin}</h4>
            </div>
          </div>
      </div>
    );
}

export default Details;

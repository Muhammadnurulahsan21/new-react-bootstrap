import React from 'react';

const Card = (props) => {
    const {name, img, Description} = props.item;
    return (
        <div className="col Card">
          <div className="card h-100">
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">
                {Description}
              </p>
            </div>
          </div>
        </div>
    );
};

export default Card;
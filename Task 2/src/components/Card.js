import React from 'react';

const Card = ({ name, email, id, lname}) => {
  //Displays all the information in a card format
    return (
      <div className='tc grow br2 pa5 ma3 dib bw2  cardClass'>
        <img alt='robots' src={`https://reqres.in/img/faces/${id}-image.jpg`} className="cardImage" />
        <div>
		  <br />
          <h2>{name} {lname}</h2>
		  <br />
          <h3>{email}</h3>
        </div>
      </div>
    );
  }

export default Card;

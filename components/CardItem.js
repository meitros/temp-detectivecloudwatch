import React from 'react';
import Link from 'next/link';

const CardItem = (props) => {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" href={props.path}>
          <div>
            <figure className="cards__item__pic-wrap" data-category={props.label}>
              <img className="cards__item__img" alt="meme or logs" src={props.src} />
            </figure>
            <div className="cards__item__info">
              <h5 className="cards__item__text">{props.text}</h5>
            </div>
          </div>
        </Link>
      </li>
    </>
  );
};

export default CardItem;

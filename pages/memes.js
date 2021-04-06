import { useState } from 'react';
import redditImageFetcher from 'reddit-image-fetcher';
// import { Button } from '../Button';

const Memes = () => {
  const [imgLink, setImgLink] = useState('');

  const onClick = () => {
    redditImageFetcher.fetch().then((result) => {
      setImgLink(result[0].image);
    });
  };

  return (
    <div className="meme_container">
      <div className="sznWrapper">
        {imgLink ? <img className="sznImg" src={imgLink} alt="new" /> : <div className="sznImg" />}
      </div>

      <div id="wrapper">
        <button className="button" onClick={onClick}>
          Show me the memes
        </button>
      </div>
    </div>
  );
};

export default Memes;

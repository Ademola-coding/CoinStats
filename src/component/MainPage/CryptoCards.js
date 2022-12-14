/* eslint-disable */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './home.css';

function CryptoCoins() {
  const { crypto, status } = useSelector((state) => state.crypto);
  const [searchcoin, setSearchcoin] = useState('');
  const onSearch = (e) => { setSearchcoin(e.target.value); };

  const filteredSearch = crypto.filter((filteredCoin) => filteredCoin
    .name
    .toLowerCase().includes(searchcoin.toLowerCase())
                     || filteredCoin
                       .symbol
                       .toLowerCase()
                       .includes(searchcoin.toLowerCase()));

  return (
    <div>
      <div className="hero">

        <div className="heroDetails">
          <p>Market cap</p>

          {crypto.map((btc) => {
            if (btc.id === 'bitcoin') {
              return (
                <div key={btc.id}>
                  <h2>{btc.marketCap}</h2>
                  <div>
                    <p>BTC Price</p>
                    <h2>
                      {' '}
                      $
                      {btc.price}
                    </h2>
                  </div>
                </div>
              );
            } return null;
          })}
        </div>

        <div className="searchInput">
          <input
            className="inputSearchBox"
            placeholder="Search coin"
            type="text"
            value={searchcoin}
            onChange={onSearch}
          />
        </div>
      </div>

      <div className="cardsContain">
        {status === 'pending'
          ? (
            <div className="ring">
              Loading
              <span />
            </div>
          )
          : (filteredSearch.map((coin) => (
            <div key={coin.id} className="conisCard">

              <div className="coinIcon">
                <img
                  className="coinIconImg"
                  src={coin.icon}
                  alt="CoinIcon"
                />
              </div>

              <div className="coinDetails">
                <p className="coinRank">
                  #{coin.rank}
                </p>
                <h3>{coin.name}</h3>
                <h2 className="coinSymbol">{coin.symbol}</h2>
                <p className="price">
                  ${coin.price.toFixed(3)}
                </p>
              </div>

              <Link className="enterIcon" to={`${coin.id}`}>
                <div className="arrowForward"><p>info</p></div>
              </Link>
            </div>
          )))}
      </div>
    </div>
  );
}

export default CryptoCoins;

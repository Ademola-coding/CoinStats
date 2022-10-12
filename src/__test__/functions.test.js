import Reducer, { fetchCryptos } from '../Redux/CryptoSlice';

const payload = [
  {
    id: 'bitcoin',
    icon: 'https://static.coinstats.app/coins/1650455588819.png',
    name: 'Bitcoin',
    symbol: 'BTC',
    rank: 1,
    price: 20207.67827071588,
    priceBtc: 1,
    volume: 40976055215.96079,
    marketCap: 387386870807.2175,
    availableSupply: 19170281,
    totalSupply: 21000000,
    priceChange1h: -0.03,
    priceChange1d: 1.13,
    priceChange1w: 3.6,
    websiteUrl: 'http://www.bitcoin.org',
    twitterUrl: 'https://twitter.com/bitcoin',
  },
];

describe('Testing AsyncThunk functions', () => {
  const initialState = {
    crypto: [],
    status: 'idle',
  };

  const pendingState = {
    type: fetchCryptos.pending,
  };

  const fulfilledState = { type: fetchCryptos.fulfilled, payload };

  it('Test for pending state', () => {
    expect(Reducer(initialState, pendingState)).toEqual({
      crypto: [],
      status: 'pending',
    });
  });

  it('Testing the fulfil state of Async call', () => {
    expect(Reducer(initialState, { fulfilledState })).toEqual({
      crypto: [],
      status: 'idle',
    });
  });
});

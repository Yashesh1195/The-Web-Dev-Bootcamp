const bitcoinData = `{"ticker":{"base":"BTC", "target":"USD", "price":"11203.95559309", "volume": "92852-24445404", "change": "29.34902723"}, "timestamp":1596562621, "success":true, "error":""}`

const goldData = `{
  "timestamp": 1591149337,
  "metal": "XAU",
  "currency": "USD",
  "ask": 1728.4,
  "bid": 1727.08,
  "price": 1727.75,
  "price_gram_22K": 63.75,
  "ch": 0.01,
  "chp": -0.02
}`

const parsedData = JSON.parse(goldData);

// parsedData.ticker.price;

// const dog = {breed: 'lab', color: 'black', isAlive: true, owner: undefined}

// const stringifiedData = JSON.stringify(dog);
 
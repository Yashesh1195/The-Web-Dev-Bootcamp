const data = `{"ticker":{"base":"BTC", "target":"USD", "price":"11203.95559309", "volume": "92852-24445404", "change": "29.34902723"}, "timestamp":1596562621, "success":true, "error":""}`

const parsedData = JSON.parse(data);

// parsedData.ticker.price;

const dog = {breed: 'lab', color: 'black', isAlive: true, owner: undefined}

const stringifiedData = JSON.stringify(dog);

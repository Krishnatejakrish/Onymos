function createStockTradingEngine() {
    let orders = []; // Order book stored in an array

    function addOrder(type, ticker, quantity, price) {
        const order = { type, ticker, quantity, price };
        orders.push(order);
        console.log(`Order Added: ${type} ${quantity} ${ticker} @ ${price}`);
        matchOrders();
    }

    function matchOrders() {
        let buyOrders = orders.filter(order => order.type === 'Buy');
        let sellOrders = orders.filter(order => order.type === 'Sell');

        buyOrders.sort((a, b) => b.price - a.price); // Highest buy price first
        sellOrders.sort((a, b) => a.price - b.price); // Lowest sell price first

        let i = 0, j = 0;
        while (i < buyOrders.length && j < sellOrders.length) {
            let buy = buyOrders[i];
            let sell = sellOrders[j];

            if (buy.ticker !== sell.ticker) {
                j++; // Skip unmatched tickers
                continue;
            }

            if (buy.price >= sell.price) { // Match found
                let matchedQuantity = Math.min(buy.quantity, sell.quantity);
                console.log(`Matched: ${matchedQuantity} ${buy.ticker} @ ${sell.price}`);

                buy.quantity -= matchedQuantity;
                sell.quantity -= matchedQuantity;

                if (buy.quantity === 0) i++;
                if (sell.quantity === 0) j++;
            } else {
                i++;
            }
        }

        orders = [...buyOrders.filter(order => order.quantity > 0), 
                  ...sellOrders.filter(order => order.quantity > 0)];
    }

    return { addOrder };
}

// Simulating random stock transactions
const engine = createStockTradingEngine();
const tickers = ["AAPL", "GOOGL", "MSFT", "TSLA", "AMZN"];

setInterval(() => {
    let type = Math.random() > 0.5 ? 'Buy' : 'Sell';
    let ticker = tickers[Math.floor(Math.random() * tickers.length)];
    let quantity = Math.floor(Math.random() * 100) + 1;
    let price = (Math.random() * 1000).toFixed(2);
    
    engine.addOrder(type, ticker, quantity, parseFloat(price));
}, 1000);

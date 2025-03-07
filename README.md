# Stock Trading Engine

This project implements a simple stock trading engine that matches buy and sell orders for various stock tickers. The engine maintains an order book and processes orders to find matches based on price and quantity.

## How It Works

### Core Functions

1. **createStockTradingEngine()**: This function initializes the trading engine and returns an object with the `addOrder` method.

2. **addOrder(type, ticker, quantity, price)**: This method adds a new order to the order book. It takes the following parameters:
   - `type`: The type of order, either 'Buy' or 'Sell'.
   - `ticker`: The stock ticker symbol (e.g., 'AAPL', 'GOOGL').
   - `quantity`: The number of shares to buy or sell.
   - `price`: The price per share.

   After adding the order, it calls the `matchOrders` function to attempt to match buy and sell orders.

3. **matchOrders()**: This function processes the order book to find matching buy and sell orders. It sorts buy orders by highest price first and sell orders by lowest price first. It then iterates through the orders to find matches based on ticker and price.

### Simulation

The code includes a simulation that generates random buy and sell orders for a set of stock tickers at random intervals. This is done using the `setInterval` function, which adds a new order every second.

### Example

Here's an example of how the engine might process orders:

1. A buy order is added for 50 shares of AAPL at $150.00.
2. A sell order is added for 30 shares of AAPL at $149.00.
3. The engine matches the orders and executes a trade for 30 shares of AAPL at $149.00.
4. The remaining 20 shares of the buy order are kept in the order book.

## Running the Code

To run the code, simply execute it in a JavaScript environment. The simulation will start automatically, generating random orders and matching them as appropriate.


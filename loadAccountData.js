import "dotenv/config";
import { Spot } from "@binance/connector";

const apiKey = process.env.API_KEY;
const apiSecret = process.env.API_SECRET;
const binanceClient = new Spot(apiKey, apiSecret);

const main = async () => {
  // Convert Trade History
  console.log(
    (await binanceClient.convertTradeHistory(1661796367413, 1665742170000)).data
  );

  // Account Balance
  console.log((await binanceClient.account()).data);

  // Trades History
  console.log((await binanceClient.myTrades("BATBUSD")).data);

  // Dust
  console.log((await binanceClient.dustLog()).data.userAssetDribblets[0]);

  // Withdraw History
  console.log((await binanceClient.withdrawHistory({ coin: "BUSD" })).data);
};

main();

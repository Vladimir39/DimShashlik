const https = require("https");
const fs = require("fs");
const express = require("express");
const cors = require("cors");
const TelegramApi = require("node-telegram-bot-api");

const corsOptions = {
  origin: "https://dimshashlik.ru",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};

const app = express();
app.use(express.json());
app.use(cors(corsOptions));
app.options("/", (req, res) => {
  res.header("Access-Control-Allow-Origin", "https://dimshashlik.ru");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.status(200).send();
});

let numberOrder = 0;

app.post("/", (req, res) => {
  console.log(req.body);
  numberOrder++;
  let order = req.body.basketItem
    .map(
      (obj) =>
        `${obj.categoryName} - ${obj.name}
Всего ${obj.amount} ед. - стоимость ${obj.price}р. за ед.
*********************************`
    )
    .join("\n");

  const addressPoint =
    req.body.delivery.addressPoint == null
      ? ""
      : `Самовывоз - ${req.body.delivery.addressPoint}`;

  const address =
    req.body.delivery.address == ""
      ? ""
      : `Адрес - ${req.body.delivery.address}`;

  const token = "6461092074:AAEES5-rxqomN-wthF-1mRZh3-tgO-oqRpQ";
  const bot = new TelegramApi(token, { polling: false });
  const chatIds = [
    "1144477936",
    "5114637480",
    "5205922440",
    "5656520171",
    //"5864038346",
  ];
  chatIds.forEach((chatId) => {
    bot.sendMessage(
      chatId,
      `Номер заказа - ${numberOrder}
Данные по заказу:
${addressPoint}
${address}
  
Номер телефона - ${req.body.delivery.phone}
Доп. информация - ${req.body.delivery.addition}
Время доставки - ${req.body.delivery.time}
  
Блюда:
${order}
Сумма по заказу : ${req.body.price}.00р.`
    );
  });

  res.send(`${numberOrder}`);
});

const httpsOptions = {
  key: fs.readFileSync("/etc/ssl/private/ssl-cert-snakeoil.key"),
  cert: fs.readFileSync("/etc/ssl/certs/ssl-cert-snakeoil.pem"),
};

const server = https.createServer(httpsOptions, app);

server.listen(5555, "0.0.0.0", (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("server ok");
});

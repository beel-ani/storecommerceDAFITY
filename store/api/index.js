const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require('./routes/user.js')
const authRoute = require('./routes/auth.js')
const productRoute = require('./routes/product.js')
const orderRoute = require('./routes/order.js')
const cartRoute = require('./routes/cart.js')
const paymentRoute = require('./routes/payment.js')



const cors = require('cors')


dotenv.config();

const app = express();

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DB Connection Successfull!"))
    .catch((err) => console.log(err));


app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);
app.use("/api/carts", cartRoute);
app.use("/api/payment", paymentRoute);



app.listen(process.env.PORT || 5000, () => {
    console.log('Backend server is running!')
});



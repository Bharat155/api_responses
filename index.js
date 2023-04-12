const express = require("express");
const mongoose = require("mongoose");
const apiRouter = require('./routes/api')

const PORT = 4000;

const app = express();
app.use(express.json());
app.use(apiRouter);


const DB = "mongodb+srv://ahujabharat15:apiresponses@api.rnwf5zu.mongodb.net/?retryWrites=true&w=majority";

mongoose.set('strictQuery', true);

//Connections
mongoose.connect(DB).then(() => {
    console.log("MongoDB connected");
}).catch((e) => {
    console.log(e);
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`connected at port ${PORT}`);
})
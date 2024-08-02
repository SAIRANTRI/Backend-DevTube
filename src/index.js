import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./env"
})



// import express from "express"
// const app = express();

// ( async () => {
//     try {
//         mongoose.connect(`${process.MONGODB_URI}/${DB_NAME}`);
//         app.on("error", (error) => {
//             console.log("ERR: ", error);
//             throw error;
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port ${process.env.PORT}`)
//         })

//     } catch (error) {
//         console.log("Error: ", error)
//         throw error;
//     }
// })() //iifie way to create db(proffesional way)


connectDB();
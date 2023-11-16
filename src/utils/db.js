// import express from "express";
// // import likesRouter from "./routes/likes.js";
// // import commentsRouter from "./routes/comments.js";
// // import postsRouter from "./routes/posts.js";
// // import relationshipsRouter from "./routes/relationships.js";
// // import bodyParser from "body-parser";
// import dotenv from "dotenv";
// dotenv.config();

// const app = express();
// // Middleware

// // app.use((req, res, next) => {
// //   res.header("Access-Control-Allow-Credentials", true);
// //   next();
// // });

// app.use(express.json());
// // app.use(
// //   cors({
// //     origin: process.env.ORIGIN,
// //   })
// // );
// // app.use(cookieParser());



// // app.use("/api/auth", authRouter);



// app.listen(process.env.PORT, () => {
//   console.log("APP IS WORING");
// });


// import mongoose from 'mongoose'
// import Error from 'next/error';

// const connect = async () => {
// try {
//     await mongoose.connect(process.env.MONGO);

// } catch (error) {
//     throw new Error("Connection failed")
// }
// }

// export default connect;
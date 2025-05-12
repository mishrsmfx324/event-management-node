import { mongoose } from 'mongoose';
console.log("db code is getting executed");
const databaseUrl = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.ujcffir.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;
mongoose.connect("mongodb+srv://mishrasurp:2021%40UpSc@cluster0.ujcffir.mongodb.net/node_apis?retryWrites=true&w=majority&appName=Cluster0").then((connection) => {
    console.log(connection);
    console.log("connection is established with the database successfully");
}, error => {
    console.log(error);
}).catch((error) => {
    console.log(error);
});


process.on('unhandledRejection', (reason) => {
    console.error('❌ Unhandled Rejection:', reason);
});

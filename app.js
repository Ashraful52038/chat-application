
//External error
const express=require('express');
const dotenv=require('dotenv');
const mongoose=require('mongoose');
const path=require('path');
const cookieParser = require('cookie-parser');
const loginRouter=require('./router/loginRouter');

//Internal Error
const {notFoundHandlers,errorHandler}=require('./middleware/common/errorhandler');

const app=express();
dotenv.config();

//database connection
mongoose.connect(process.env.MONGO_CONNECTION_STRING,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>console.log("Database connection successful"))
.catch(err=>console.log(err));

//request parser
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//set view engine
app.set("view engine","ejs");

//set static folders
app.use(express.static(path.join(__dirname,"public")));

//parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET));

//routing setup
app.use('/',loginRouter);
app.use('/users',UserRouter);
app.use('/inbox',inboxRouter);

//404 not found
app.use(notFoundHandlers);

//common Error Handler
app.use(errorHandler);


app.listen(process.env.PORT,()=>{
    console.log(`app listening to port ${process.env.PORT}`);
});
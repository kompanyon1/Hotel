const express = require('express')
const textRouter = require('./routers/textRouter')
const path = require('path')
const cors = require('cors')
const multer = require('multer')
require('dotenv').config();
const https = require('https');
const fs = require('fs')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/img')
  },
  filename: (req, file, cb)=> {

console.log(req.body)
    cb(null,file.originalname)
  }
})

const upload = multer({storage: storage})

const app = express();
const PORT = process.env.PORT;

app.post('/upload', upload.single('image'), (req,res)=>{
    res.redirect(`${process.env.URL}`);
  });




app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(express.static(path.join(process.cwd(), 'public')))
app.use(cors({ credentials: true }));

app.use('/', textRouter);


https.createServer(app).listen(3100, ()=>{
    console.log(`Server started at port ${PORT}`)
})
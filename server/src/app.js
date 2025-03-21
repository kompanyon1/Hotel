const express = require("express");
const textRouter = require("./routers/textRouter");
const path = require("path");
const cors = require("cors");
const multer = require("multer");
require("dotenv").config();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/img");
  },
  filename: (req, file, cb) => {
    console.log(req.body);
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

const app = express();
const PORT = process.env.PORT;

app.post("/upload", upload.single("image"), (req, res) => {
  res.redirect(`http://localhost:5173`); // не забыть переименовать перед деплоем
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(process.cwd(), "public")));
app.use(cors({ credentials: true }));

app.use("/", textRouter);

app.listen(3100, () => {
  console.log(`Server started at port ${PORT}`);
});

// ----- CODE MODIFICATION NOT REQUIRED UNTIL LINE 40 OF THIS FILE -----

// Required modules
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const database = require("./database/database.js");
const mongodb = require("mongodb");
const ArticlesRouter = require("./routes/articles.js");
const AuthRouter = require("./routes/auth.js");

const PORT = 3000;

const app = express();
app.use(bodyParser());
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
// app.set('views', path.join(__dirname, '/../views'));

// app.use(express.static(path.join(__dirname, '/../public')));
app.use('/public', express.static('public'));
app.use('/uploads', express.static('uploads'));

app.use('/', AuthRouter(database));
app.use('/', ArticlesRouter(database));

app.listen(PORT, async () => {
  await database.setup();
  console.log(`Server started on port ${PORT}`);
});


process.on("SIGTERM", () => {
  app.close(() => {
    database.client.close();
  });
});

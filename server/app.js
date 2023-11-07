const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const md5 = require("md5");
const { v4: uuidv4 } = require("uuid");

const mysql = require("mysql");

const app = express();
const port = 3111;
// app.use(express.json({ limit: "10mb" }));
// app.use(express.static("public"));

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "groceries",
});

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// app.get("/menu", (req, res) => {
//   const sql = `
//   SELECT id, name, description, price, amount
//   FROM menu
 
//   `;
//   con.query(sql, (err, result) => {
//     if (err) throw err;
//     res.json(result);
//   });
// });

app.delete("/cart/:id", (req, res) => {
  const sql = `
        DELETE FROM cart
        WHERE id = ?
    `;
  con.query(sql, [req.params.id], (err) => {
    if (err) throw err;
    res.json({});
  });
});

app.delete("/cart", (req, res) => {
  const sql = `
        DELETE FROM cart
       
    `;
  con.query(sql, (err) => {
    if (err) throw err;
    res.json({});
  });
});

app.get("/", (req, res) => {
  const sql = `
  SELECT id, title, quantity, price, totalPrice, category
  FROM cart

  `;
  con.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.get("/cart", (req, res) => {
  const sql = `
  SELECT id, title, quantity, price, category
  FROM cart

  `;
  con.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});


app.post("/order", (req, res) => {
    const sql = `
    INSERT INTO orders (title, price)
    VALUES (?, ?)
  
    `;
  
    con.query(sql, [req.body.title, req.body.price], (err) => {
      if (err) throw err;
      res.json({});
    });
  });


  app.post("/cart", (req, res) => {
    const sql = `
    INSERT INTO cart (title, price, quantity, totalPrice, category)
    VALUES (?, ?, ?, ?, ?)
  
    `;
  
    con.query(sql, [req.body.title, req.body.price, req.body.quantity, req.body.totalPrice, req.body.category], (err) => {
      if (err) throw err;
      res.json({});
    });
  });

  app.post("/register", (req, res) => {
    const sql = `
    INSERT INTO register (name,psw)
    VALUES (?, ?)
  
    `;
  
    con.query(sql, [req.body.name, req.body.psw], (err) => {
      if (err) throw err;
      res.json({});
    });
  });

  app.put("/cart/:id", (req, res) => {
    const sql = `
    UPDATE cart 
    SET quantity = ?, totalPrice = ?
    WHERE id = (?)
  
    `;
  
    con.query(sql, [req.body.quantity, req.body.totalPrice, req.params.id], (err) => {
      if (err) throw err;
      res.json({});
    });
  });

app.listen(port, () => {
    console.log(`LN is on port number: ${port}`);
  });

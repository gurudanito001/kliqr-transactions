const express = require("express");
const app = express();
const pool = require("./db");
const config = require("./config");

app.use(express.json()) // => req.body

//ROUTES//

//get all users
app.get("/transactions", async (req, res) => {
    try {
        const allTransactions = await pool.query("SELECT * from kliqr_transactions");
        res.json(allTransactions.rows);
    } catch (err) {
        console.error(err.message)
    }
});


//get a user
app.get("/transactions/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const transaction = await pool.query(
            "SELECT * FROM kliqr_transactions WHERE id = $1", 
            [id]
        );
        res.json(transaction.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});


app.listen( config.PORT, () => {
    console.log(`server is listening on port ${config.PORT}`)
});
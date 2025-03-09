const express = require('express');
const cors = require('cors');
const sqlite = require('sqlite3').verbose();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

const database = new sqlite.Database("insurance.db", (err) => {
    if (err) console.error(err.message);
    else console.log("Connected to the SQLite database!");
});

database.run(`CREATE TABLE IF NOT EXISTS policies (
    id INTEGER PRIMARY KEY,
    name TEXT,
    type TEXT,
    premium INTEGER,
    coverage INTEGER
)`);

database.run(`DELETE FROM policies WHERE 1=1;`)

database.run(`
    INSERT INTO policies (name, type, premium, coverage) VALUES
    ("Secure Future Term Life 01", "Term Life", 5000, 1000000),
    ("Health Shield Plan 01", "Health", 3000, 500000),
    ("Car Protect Plan 01", "Vehicle", 1800, 300000),
    ("Secure Future Term Life 02", "Term Life", 4800, 800000),
    ("Health Shield Plan 02", "Health", 3200, 400000),
    ("Car Protect Plan 02", "Vehicle", 2000, 200000),
    ("Secure Future Term Life 03", "Term Life", 4600, 1200000),
    ("Health Shield Plan 03", "Health", 3400, 700000),
    ("Car Protect Plan 03", "Vehicle", 2200, 100000)
`)

app.get('/', (req, res) => {
    console.log("Default Endpoint: Hello World!");
    res.status(200).json({ "message": "Hello World!" });
});

app.get('/api/policies', (req, res) => {
    let sql = 'SELECT * FROM policies WHERE 1=1 ';
    const params = [];

    if (req.query.name) {
        sql += ` AND name LIKE ?`;
        params.push(`%${req.query.name}%`);
    }
    if (req.query.minPremium) {
        sql += ` AND premium >= ?`;
        params.push(req.query.minPremium);
    }
    if (req.query.maxPremium) {
        sql += ` AND premium <= ?`;
        params.push(req.query.maxPremium);
    }
    if (req.query.type) {
        sql += ` AND type = ?`;
        params.push(req.query.type);
    }
    if (req.query.minCoverage) {
        sql += ` AND coverage >= ?`;
        params.push(req.query.minCoverage);
    }
    if (req.query.sort) {
        sql += ` ORDER BY premium ${req.query.sort.toLowerCase() == "desc" ? "DESC": "ASC"}`;
    }

    database.all(sql, params, (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        return res.json(rows);
    });
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
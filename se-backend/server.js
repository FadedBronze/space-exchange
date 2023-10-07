const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
}));

app.post('/home', (req, res) => {
    const requestData = req.body; // Access POST data from the request body
    console.log('Received POST data:', requestData);

    // Respond with a message
    setTimeout(() => {
        res.status(200).json({ "test": "test" });
    }, 2000);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

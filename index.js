const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/getBundle/:assetId', async (req, res) => {
    const { assetId } = req.params;
    const url = `https://catalog.roblox.com/v1/assets/${assetId}/bundles`;

    try {
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch bundle info", details: error.message });
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Proxy running on port ${port}`);
});

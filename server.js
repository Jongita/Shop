const express = require('express');
const app = express();
const PORT = 3000;

// In-memory data storage
let shops = [];
let shopItems = [];

app.use(express.json());

// CRUD Operations for Shops

// Create a new shop
app.post('/shops', (req, res) => {
    const shop = { id: Date.now().toString(), ...req.body };
    shops.push(shop);
    res.status(201).json(shop);
});

// Get all shops
app.get('/shops', (req, res) => {
    res.json(shops);
});

// Get a single shop by ID
app.get('/shops/:id', (req, res) => {
    const shop = shops.find(s => s.id === req.params.id);
    if (!shop) {
        return res.status(404).json({ message: 'Shop not found' });
    }
    res.json(shop);
});

// Update a shop by ID
app.put('/shops/:id', (req, res) => {
    const shopIndex = shops.findIndex(s => s.id === req.params.id);
    if (shopIndex === -1) {
        return res.status(404).json({ message: 'Shop not found' });
    }
    const updatedShop = { ...shops[shopIndex], ...req.body };
    shops[shopIndex] = updatedShop;
    res.json(updatedShop);
});

// Delete a shop by ID
app.delete('/shops/:id', (req, res) => {
    const shopIndex = shops.findIndex(s => s.id === req.params.id);
    if (shopIndex === -1) {
        return res.status(404).json({ message: 'Shop not found' });
    }
    shops.splice(shopIndex, 1);
    res.status(204).end();
});

// CRUD Operations for ShopItems

// Create a new shop item
app.post('/shopItems', (req, res) => {
    const shopItem = { id: Date.now().toString(), ...req.body };
    shopItems.push(shopItem);
    res.status(201).json(shopItem);
});

// Get all shop items
app.get('/shopItems', (req, res) => {
    res.json(shopItems);
});

// Get a single shop item by ID
app.get('/shopItems/:id', (req, res) => {
    const shopItem = shopItems.find(i => i.id === req.params.id);
    if (!shopItem) {
        return res.status(404).json({ message: 'Shop item not found' });
    }
    res.json(shopItem);
});

// Update a shop item by ID
app.put('/shopItems/:id', (req, res) => {
    const shopItemIndex = shopItems.findIndex(i => i.id === req.params.id);
    if (shopItemIndex === -1) {
        return res.status(404).json({ message: 'Shop item not found' });
    }
    const updatedShopItem = { ...shopItems[shopItemIndex], ...req.body };
    shopItems[shopItemIndex] = updatedShopItem;
    res.json(updatedShopItem);
});

// Delete a shop item by ID
app.delete('/shopItems/:id', (req, res) => {
    const shopItemIndex = shopItems.findIndex(i => i.id === req.params.id);
    if (shopItemIndex === -1) {
        return res.status(404).json({ message: 'Shop item not found' });
    }
    shopItems.splice(shopItemIndex, 1);
    res.status(204).end();
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

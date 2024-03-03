const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve static files from the 'css' directory
app.use('/css', express.static(path.join(__dirname, 'css')));

// Serve static files from the 'js' directory
app.use('/js', express.static(path.join(__dirname, 'js')));

// Serve all files from the 'html' directory
app.get('/html/*', (req, res) => {
    res.sendFile(path.join(__dirname, req.path));
});

// Serve your HTML file (example)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

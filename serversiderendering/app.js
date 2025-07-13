const express = require('express');
const app = express();
const port = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files (like CSS, JS, images)
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    const user = {
        name: 'John Doe',
        email: 'john@example.com'
    };

    res.render('index', { user });
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

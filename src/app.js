const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const articleRoutes = require('./routes/articleRoutes');
const noteRoutes = require('./routes/noteRoutes');
const { notFound, errorHandler } = require('./middleware/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('Blog API is running'));

app.use('/api/auth', authRoutes);
app.use('/articles', articleRoutes);
app.use('/api/notes', noteRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;

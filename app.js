const express = require('express');
const path = require('path');

const app = express();
const PORT = 3030;

/* rutas */
app.get('/', (req,res) => res.sendFile(path.join(__dirname,'views','home.html')))
app.get('/nosotros', (req,res) => res.sendFile(path.join(__dirname,'views','about.html')))
app.get('/musica', (req,res) => res.sendFile(path.join(__dirname,'views','music.html')))
app.get('/contacto', (req,res) => res.sendFile(path.join(__dirname,'views','contact.html')))

app.listen(PORT, () => console.log(`Server running in http://localhost:${PORT}`))
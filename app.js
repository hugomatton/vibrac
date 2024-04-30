const express = require('express');
const bodyParser = require('body-parser');

// Création de l'application Express
const app = express();
const port = process.env.PORT; // Port où le serveur écoute

// Middleware pour analyser les requêtes au format JSON
app.use(bodyParser.json());

// Contrôleur 1 pour une requête POST à l'URL /controleur1
app.post('/buy', (req, res) => {
    const data = req.body; // Obtenir les données de la requête POST
    console.log('Contrôleur buy reçu des données:', data);

    res.status(200).json({
        message: 'Contrôleur buy a reçu vos données',
        receivedData: data,
    });
});

// Contrôleur 2 pour une requête POST à l'URL /controleur2
app.post('/sell', (req, res) => {
    const data = req.body; // Obtenir les données de la requête POST
    console.log('Contrôleur sell a reçu des données:', data);

    res.status(200).json({
        message: 'Contrôleur sell a reçu vos données',
        receivedData: data,
    });
});

// Démarrage du serveur
app.listen(port, () => {
    console.log(`Serveur Express démarré sur le port ${port}`);
});

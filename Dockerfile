# Utilisation de l'image Node.js officielle
FROM node:18

# Définit le répertoire de travail à l'intérieur du conteneur
WORKDIR /app

# Copie le package.json et le package-lock.json dans le répertoire de travail
COPY package*.json ./

# Installe les dépendances nécessaires
RUN npm install

# Copie le reste du code de l'application dans le répertoire de travail
COPY . .

# Définit le port exposé par le conteneur
EXPOSE 80

# Définit la commande à exécuter lorsque le conteneur démarre
CMD ["node", "app.js"]

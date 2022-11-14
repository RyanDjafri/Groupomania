Faire un npm install dans le dossier client et le back

Démarrer le server : npm start

Démarrer le front : cd client + npm start

Back config :

Mettez vos informations de cluster dans /config/db.js
Créez le fichier .env dans /config/ dans les données suivantes
PORT= votre port localhost
CLIENT_URL= votre URL client
DB_USER_PASS= votre identifiant et mot de passe
TOKEN_SECRET=votre clé secrète aléatoire

Front config :
Créez un fichier .env dans l'URL du serveur :
REACT_APP_API_URL= l'url de votre serveur

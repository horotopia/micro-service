# Documentation rapide pour tester les microservices avec Postman

## 1. Catalogue Service
- **Base URL** : http://localhost:3001

### Endpoints :
- **GET /products**
  - Récupère la liste des produits
- **GET /products/:id**
  - Récupère un produit par son id
- **POST /products**
  - Ajoute un produit (body JSON : `{ "name": "string", "price": number }`)
- **PUT /products/:id**
  - Modifie un produit (body JSON : `{ "name": "string", "price": number }`)
- **DELETE /products/:id**
  - Supprime un produit

## 2. Commande Service
- **Base URL** : http://localhost:3002

### Endpoints :
- **GET /orders**
  - Récupère la liste des commandes
- **GET /orders/:id**
  - Récupère une commande par son id
- **POST /orders**
  - Crée une commande (body JSON : `{ "products": [{ "id": number }], "status": "string" }`)

## 3. Gateway
- **Base URL** : http://localhost:3000

### Endpoints :
- **GET /products**
  - Passe par le gateway pour récupérer les produits
- **GET /orders**
  - Passe par le gateway pour récupérer les commandes

---

**Conseils Postman :**
- Utilise les méthodes GET, POST, PUT, DELETE selon l’endpoint.
- Pour POST/PUT, sélectionne "Body" > "raw" > "JSON" dans Postman.
- Vérifie que les services sont bien démarrés avec Docker Compose.

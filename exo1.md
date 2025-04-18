Exercice : Conception de deux microservices – catalogue & commande
Objectif pédagogique :
Mettre en pratique les principes des microservices :
Déploiement avec node express


Architecture REST


Communication entre services


Isolation des responsabilités


📝 Contexte :
Vous devez développer un mini-système de e-commerce composé de deux services indépendants :

 1. Microservice catalogue
Ce service gère les produits.
Endpoints :


GET /products – retourne tous les produits


GET /products/{id} – retourne un produit par son ID


POST /products – ajoute un produit


Exemple de Product :



Product {
    Long id;
    String name;
    double price;
}

 2. Microservice commande
Ce service permet de créer des commandes pour les produits.
Endpoints :


POST /orders – crée une commande avec une liste d’IDs de produits


GET /orders/{id} – retourne une commande


Fonctionnement :


Lors de la création de commande, ce service appelle catalogue pour récupérer les infos des produits commandés.
Il stocke localement la commande avec les détails produits.


3. Communication entre services
Utilisez une bibliothèque HTTP (comme axios) pour faire des appels entre les services.
Assurez-vous que les services soient indépendants et puissent être déployés séparément.
4. Isolation des responsabilités
Chaque service doit être autonome et ne pas dépendre de l’autre pour fonctionner.

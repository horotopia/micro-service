const errorHandler = (err, req, res, next) => {
  console.error('Commande error:', err);
  res.status(500).json({ error: 'Erreur interne du serveur' });
};

export default errorHandler;

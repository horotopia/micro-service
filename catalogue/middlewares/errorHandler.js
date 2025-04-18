const errorHandler = (err, req, res, next) => {
  console.error('Catalogue error:', err);
  res.status(500).json({ error: 'Erreur interne du serveur' });
};

export default errorHandler;

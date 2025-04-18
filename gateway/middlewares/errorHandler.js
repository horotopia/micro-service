const errorHandler = (err, req, res, next) => {
    console.error('Gateway error:', err);
    if (err.response && err.response.status) {
        res.status(err.response.status).json({ error: err.response.data?.error || 'Erreur du service distant' });
    } else {
        res.status(500).json({ error: 'Erreur interne du serveur' });
    }
};

export default errorHandler;

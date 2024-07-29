const authorize = (role) => {
  return (req, res, next) => {
    if (req.user.role !== role) {
      return res.status(403).send({ error: 'Access denied.' });
    }
    next();
  };
};

module.exports = authorize;

  
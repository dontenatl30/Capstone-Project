const jwt = require('jsonwebtoken');

const authCheck = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ error: 'Authentication token missing' });
  }

  try {
    const decoded = jwt.verify(token, 'superSecretPrivateKey');
    req.user = decoded; // Attach user data to the request
    next(); // Continue to the next middleware or route
  } catch (error) {
    return res.status(401).json({ error: 'Authentication token invalid' });
  }
};

module.exports = authCheck;

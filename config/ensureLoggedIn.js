module.exports = function(req, res, next) {
  // Status code of 401 means Unathorized
  if (!req.user) return res.status(401).json('Unauthorized');
  next();
};
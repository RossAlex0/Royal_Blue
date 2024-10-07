const jwt = require("jsonwebtoken");

const createToken = async (req, res, next) => {
  try {
    const payload = req.user;
    const token = jwt.sign(payload, process.env.APP_SECRET, {
      expiresIn: "1y",
    });
    if (token) {
      req.token = token;
      next();
    } else {
      throw new Error("Échec de la création du token JWT");
    }
  } catch (error) {
    next(error);
  }
};

const verifyToken = async (req, res, next) => {
  try {
    const { RbAuth } = req.cookies;

    jwt.verify(RbAuth, process.env.APP_SECRET, (err, decoded) => {
      if (err) {
        res.status(401).json({ message: "Token non valid" });
      }
      req.decoded = decoded;
      next();
    });
  } catch (error) {
    next(error);
  }
};

const deleteCookie = async (req, res, next) => {
  try {
    res.clearCookie("RbAuth");
    res.status(200).send({ message: "Cookie détruit" });
  } catch (error) {
    next(error);
  }
};

module.exports = { createToken, verifyToken, deleteCookie };

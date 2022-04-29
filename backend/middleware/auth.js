const jwt = require("jsonwebtoken");
require("dotenv").config();

const auth = async (req, res, next) => {
      try {
            const token = req.headers.token;
            const decodedData = jwt.decode(token);
            req.userId = decodedData?.sub;
            next();
      } catch (error) {
            console.log(error);
      }
};

module.exports = { auth };
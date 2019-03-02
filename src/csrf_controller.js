const csrf = require("csurf");


const csrfRequired = csrf();
const csrfSetter = csrf({ignoreMethods: ["POST"]});

// Error handler
const csrfErrorHandler =  (err, req, res, next) => {
    if (err.code !== "EBADCSRFTOKEN") return next(err);
  
    // handle CSRF token errors here
    return res.status(403).json({
        "success": false,
        "reason": "Invalid CSRF token"
    });
};


module.exports.csrfRequired = csrfRequired;
module.exports.csrfSetter = csrfSetter;
module.exports.csrfErrorHandler = csrfErrorHandler;
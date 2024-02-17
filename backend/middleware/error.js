const Errorhandler = require("../utils/errorhandler");
module.exports = (err, req, res, next) => {
  err.statuscode = err.statuscode || 500;
  err.message = err.message || "internal server error";

// handling mongodb or casterrors
if(err.name==="CastError"){
  const msg=`Resource not found .invalid ${err.path}`
  err=new Errorhandler(msg,400)
}


  res.status(err.statuscode).json({
    success: true,
    message: err.message,
  });
};

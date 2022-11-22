const { signUpVerify } = require("../middlewares");
const controller = require("../controller/authentication.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
    next();
  });

  app.post(
    "/auth/signup",
    [
      signUpVerify.checkDuplicateUsernameOrEmail,
      signUpVerify.checkRolesExisted,
    ],
    controller.signup
  );

  app.post("/api/auth/signin", controller.signin);

  app.post("/api/auth/signout", controller.signout);
};

// app.post('/api/users/login', controller.login)
//
// login = [
//   getUser,
//   checkPass,
//   getToken,
//   sendResponse
// ]
//
//
// getUser(req, res, next) {
//   req.user = await User.findOne({ email: req.body.email });
//   if (!req.user) {
//     return res.json({
//       loginSuccess: false,
//       message: 'Auth failed, email was not find'
//     });
//   }
//   next();
// }

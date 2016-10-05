function login(req, res, next) {
  // extract email, password
  // encrypt the password
  // look up user by email + encrypted password
  // if found, return user
  // if not found, return error
}

function logout(req, res, next) {
  // clear cookie
  // return OK
}

function home(req, res) {
	//retrieve list
}

module.exports = {
  login,
  logout,
}

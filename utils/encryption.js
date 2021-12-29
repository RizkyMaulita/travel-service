const bcrypt = require('bcryptjs')

const hashPassword = (plainPass) => {
  let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync(plainPass, salt);

  return hash
}

const comparePassword = (plainPass, hashPass) => {
  return bcrypt.compareSync(plainPass, hashPass)
}

module.exports = {
  hashPassword,
  comparePassword
}
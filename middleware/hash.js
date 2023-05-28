const bcrypt = require("bcrypt");
const saltRounds = 10;

// mengubah password
HashPasswrod = (plainPassword) => {
    return bcrypt.hashSync(plainPassword, saltRounds);
};
// membaca password
DecryptPassword = (plainPassword, hashFromDB) => {
    return bcrypt.compareSync(plainPassword, hashFromDB);
};

module.exports = { HashPasswrod, DecryptPassword };
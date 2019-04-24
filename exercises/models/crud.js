const User = require("./user");

const getUserById = id => {
  return User.findById(id).exec();
};

const getAllUsers = () => {
  return User.find({}).exec();
};

const createUser = userDetails => {
  return User.create(userDetails);
};
const removeUserById = id => {
  return User.findByIdAndRemove(id).exec();
};

const updateUserById = (id, update) => {
  return User.findByIdAndUpdate(id, update, { new: true });
};

module.exports = {
  getUserById,
  getAllUsers,
  createUser,
  removeUserById,
  updateUserById
};

//some of my test is not working and i dont know
// exec() function return the actual promise and it tells mongoose that i done with the query and i dont have any query after that
//findByIdAndUpdate has the 3rd argument options here im using new:true that means its it return the newly updated object instead of old one

import User from "../models/User.js";


export const getUser = async (Nama, Email, Password) => {
  return await User.findAll({Nama, Email, Password});
};

export const postUser = async (username, email, password) => {
  return await User.create({username, email, password});
};
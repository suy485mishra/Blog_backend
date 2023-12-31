import User from "../models/User.js";
import bcrypt from "bcryptjs";
export const getAllUser = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (err) {
    return console.log(err);
  }
  //liitle validation
  if (!users) {
    return res.status(404).json({ message: "No Users Found" });
  }
  return res.status(200).json({ users });
};

export const signup = async (req, res, next) => {
  const { name, email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    return console.log(err);
  }
  if (existingUser) {
    res.status(400).json({ message: "User already exists, Login Instead!" });
  }
  const hashedPassword = bcrypt.hashSync(password);
  const user = new User({
    name,
    email,
    password: hashedPassword,
    blogs:[]
  });
  try {
    await user.save(); //saving
  } catch (error) {
    return console.log(error);
  }
  return res.status(201).json({ user }); //created
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (error) {
    return console.log(error);
  }
  if (!existingUser) {
    return res
      .status(404)
      .json({ message: "User doesn't exists, Please try doing Signup" });
  }
  //if login successful
  const chkPassword = bcrypt.compareSync(password, existingUser.password);
  if (!chkPassword) {
    return res.status(400).json({ message: "Incorrect Password" });
  }
  return res.status(200).json({ message: "Login Sccessful" });
};

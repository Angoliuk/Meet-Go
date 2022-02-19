import UserModel from "../Models/UserModel.js";

class UserService {
  async create(user) {
    const newUser = await UserModel.create(user);
    return newUser;
  }

  async getOne(id) {
    if (!id) {
      throw new Error("Enter user id");
    }
    const user = await UserModel.findById(id);
    return user;
  }

  async update(user) {
    if (!user._id) {
      throw new Error("Enter user id");
    }
    const updatedUser = await UserModel.findByIdAndUpdate(user._id, user, {
      new: true,
    });
    return updatedUser;
  }

  async delete(id) {
    if (!id) {
      throw new Error("Enter user id");
    }
    const user = await UserModel.findByIdAndDelete(id);
    return user;
  }
}

export default new UserService();

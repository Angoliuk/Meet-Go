import UserService from "../Services/UserService.js";

class UserController {
  async getOne(req, res) {
    try {
      const user = await UserService.getOne(req.params.id);
      return res.json(user);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async update(req, res) {
    try {
      const updatedUser = await UserService.update(req.body);
      return res.json(updatedUser);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async delete(req, res) {
    try {
      const user = await UserService.delete(req.params.id);
      return res.json(user);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new UserController();

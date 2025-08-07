import AuthService from "../services/auth.service.js";

class AuthController {
  async userSignUp(req, res) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res
          .status(400)
          .json({ message: "Email and password are required" });
      }
      const user = await AuthService.userSignUp(email, password);
      return res.status(200).json({ message: "Registration successful", user });
    } catch (error) {
      console.error("Registration error:", error);
      return res.status(400).json({ error: error.message });
    }
  }
  async userLogin(req, res) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res
          .status(400)
          .json({ message: "Email and password are required" });
      }
      const user = await AuthService.userLogin(email, password);

      return res.status(200).json({ message: "Log in successful", user });
    } catch (error) {
      console.error("Registration error:", error);
      return res.status(400).json({ error: error.message });
    }
  }
  async userLogout(req, res) {
    try {
      const result = await AuthService.userLogout();
      res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export default new AuthController();

import MatchService from "../services/match.service.js";

class MatchController {
    async getMatchCompatibility(req, res) {
        try {
            const { uid1, uid2 } = req.body;
            const compatibility = await MatchService.getMatchCompatibility(uid1, uid2);
            console.log("Compatibility:", compatibility);
        } catch (error) {
            console.error("Error fetching match compatibility:", error);
            return res.status(400).json({ error: error.message });
        }
    }
}

export default new MatchController();

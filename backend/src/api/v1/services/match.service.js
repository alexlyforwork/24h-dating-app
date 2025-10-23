import pool from "../config/db.config.js";
import ProfileService from "./profile.service.js";

class MatchService {
    async getMatchCompatibility(uid1, uid2) {
        console.log("Fetching match compatibility for:", uid1, uid2);
        const person1 = await ProfileService.getProfileWithPreferences(uid1);
        const person2 = await ProfileService.getProfileWithPreferences(uid2);
        
        
    }

}

export default new MatchService();
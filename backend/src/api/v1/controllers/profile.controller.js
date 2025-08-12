import ProfileService from "../services/profile.service.js";

class ProfileController {
    async setProfile(req, res){
        try {
        console.log("body: ",req.body);
        const {uid, profileData} = req.body;
        
        console.log("Setting profile for UID:", uid);
        console.log("Profile Data:", profileData);
            const profile = await ProfileService.setProfile(uid, profileData);
            return res.status(200).json({ message: "Profile updated successfully", profile });
        } catch (error) {
            console.error("Error updating profile:", error);
            return res.status(400).json({ error: error.message });
        }
    }
    async setPreferences(req, res) {
        const {uid, preferencesData} = req.body;

        try {
            const profile = await ProfileService.setPreferences(uid, preferencesData);
            return res.status(200).json({ message: "Preferences updated successfully" , profile });
        } catch (error) {
            console.error("Error updating preferences:", error);
            return res.status(400).json({ error: error.message });
        }
    }
    async getProfileWithPreferences(req, res) {
        const uid = req.user.uid;
        try {
            const profile = await ProfileService.getProfileWithPreferences(uid);
            if (!profile) {
                return res.status(404).json({ message: "Profile not found" });
            }
            return res.status(200).json(profile);
        } catch (error) {
            console.error("Error fetching profile:", error);
            return res.status(400).json({ error: error.message });
        }
    }
}

export default new ProfileController();
import pool from "../config/db.config.js";

class ProfileService {
  async getProfile(uid) {
    const profile = await pool.query(
      "SELECT * FROM user_details WHERE uid = $1",
      [uid],
    );
    return profile.rows[0];
  }

  async getPreferences(uid) {
    const preferences = await pool.query(
      "SELECT * FROM user_preferences WHERE uid = $1",
      [uid],
    );
    return preferences.rows[0];
  }

  async getProfileWithPreferences(uid) {
    const profile = await this.getProfile(uid);
    const preferences = await this.getPreferences(uid);
    return { profile: profile, preferences: preferences };
  }

  async setProfile(uid, profileData) {
    const keys = Object.keys(profileData);
    if (keys.length === 0) {
      throw new Error("No profile data provided");
    }

    const setClause = keys
      .map((key, index) => `${key} = $${index + 1}`)
      .join(", ");
    const values = keys.map((key) => profileData[key]);
    values.push(uid); // Add uid to the end of the values array

    const query = `INSERT INTO user_details (${keys.join(", ")}, uid) VALUES (${values.map((_, index) => `$${index + 1}`).join(", ")}) ON CONFLICT (uid) DO UPDATE SET ${setClause}`;

    await pool.query(query, values);

    const userProfile = await this.getProfileWithPreferences(uid);
    return userProfile;
  }

  async setPreferences(uid, preferencesData) {
    const keys = Object.keys(preferencesData);
    if (keys.length === 0) {
      throw new Error("No preferences data provided");
    }

    const setClause = keys
      .map((key, index) => `${key} = $${index + 1}`)
      .join(", ");
    const values = keys.map((key) => preferencesData[key]);
    values.push(uid); // Add uid to the end of the values array

    const query = `INSERT INTO user_preferences (${keys.join(", ")}, uid) VALUES (${values.map((_, index) => `$${index + 1}`).join(", ")}) ON CONFLICT (uid) DO UPDATE SET ${setClause}`;

    await pool.query(query, values);
    const userProfile = await this.getProfileWithPreferences(uid);
    return userProfile;
  }
}

export default new ProfileService();

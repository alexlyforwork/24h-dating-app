CREATE TABLE IF NOT EXISTS users (
  uid TEXT PRIMARY KEY,
  name TEXT,
  email TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  is_active BOOLEAN DEFAULT true,
  deleted BOOLEAN DEFAULT false
);

CREATE TABLE IF NOT EXISTS user_details (
  uid TEXT PRIMARY KEY REFERENCES users(uid),
  birthdate DATE,
  gender TEXT,
  orientation TEXT,
  bio TEXT,
  zodiac TEXT,
  photos TEXT[],
  location GEOGRAPHY(POINT, 4326),
  hobbies TEXT[]
);

CREATE TABLE IF NOT EXISTS user_preferences (
  uid TEXT PRIMARY KEY REFERENCES users(uid),
  gender_interest TEXT[],
  age_range INT[],
  distance_km INT
);

CREATE TABLE IF NOT EXISTS matches (
  match_id TEXT PRIMARY KEY,
  user_a TEXT REFERENCES users(uid),
  user_b TEXT REFERENCES users(uid),
  compatibility_score INT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  expires_at TIMESTAMPTZ,
  continued_by TEXT[],
  status TEXT CHECK (status IN ('pending', 'active', 'continued', 'ended', 'expired')),
  ended_by TEXT,
  end_reason TEXT
);

CREATE TABLE IF NOT EXISTS messages (
  message_id TEXT PRIMARY KEY,
  match_id TEXT REFERENCES matches(match_id),
  sender_id TEXT REFERENCES users(uid),
  text TEXT,
  sent_at TIMESTAMPTZ DEFAULT NOW(),
  read BOOLEAN DEFAULT false
);
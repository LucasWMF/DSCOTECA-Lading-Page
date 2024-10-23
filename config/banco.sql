CREATE TABLE feedback (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  rating INT CHECK (rating <= 5),
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


DROP TABLE IF EXISTS users;

CREATE TABLE users (
    user_id INT GENERATED ALWAYS AS IDENTITY,
    username VARCHAR(30) UNIQUE NOT NULL,
    email VARCHAR(200) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    is_admin BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (user_id)
);

INSERT INTO
    users (username, email, password, is_admin)
VALUES
    (
        'admin',
        'admin@test123.com',
        '$2b$10$wgc2myC/L8NmDGsfmonl1.2jlN2L8pWauyQG9XNoLUmjtlztr0kVy',
        true
    )
DROP TABLE IF EXISTS users;

DROP TABLE IF EXISTS recipe;

-- Users SQL
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
    );

-- Recipe SQL
CREATE TABLE recipe (
    recipe_id INT GENERATED ALWAYS AS IDENTITY,
    recipe_image VARCHAR(250) NOT NULL,
    tags VARCHAR(24) [],
    recipe_name VARCHAR(64) NOT NULL,
    date DATE NOT NULL,
    comments INT DEFAULT 0,
    likes INT DEFAULT 0,
    description VARCHAR(250) NOT NULL,
    author VARCHAR(32) NOT NULL,
    PRIMARY KEY (recipe_id)
);

INSERT INTO
    recipe (
        recipe_image,
        tags,
        recipe_name,
        date,
        comments,
        likes,
        description,
        author
    )
VALUES
    (
        'https://www.cookingforkeeps.com/wp-content/uploads/2020/01/Spinach-and-Feta-Stuffed-Chicken-7-1-500x500.jpg',
        '{"vegetarian", "dinner"}',
        'Spinach and Feta Stuffed Chicken Breast',
        '2023-04-12',
        5,
        12,
        'A delicious and healthy dinner option with chicken, spinach, and feta cheese stuffing. Perfect for a weeknight dinner!',
        'Emily Jones'
    ),
    (
        'https://preppykitchen.com/wp-content/uploads/2022/03/Chocolate-Lava-Cake-Recipe.jpg',
        '{"dessert", "chocolate"}',
        'Chocolate Lava Cake',
        '2023-04-11',
        10,
        28,
        'This decadent chocolate lava cake is perfect for a special occasion or a date night dessert. Serve with whipped cream or ice cream!',
        'John Smith'
    ),
    (
        'https://glutenfreeonashoestring.com/wp-content/uploads/2021/02/Stack-of-3-banana-pancakes-on-white-plate-with-three-fresh-banana-slices-on-top.jpg',
        '{"breakfast", "gluten-free"}',
        'Gluten-Free Banana Pancakes',
        '2023-04-10',
        3,
        8,
        'These fluffy banana pancakes are made with gluten-free flour and are perfect for a weekend breakfast. Top with your favorite toppings!',
        'Sarah Lee'
    ),
    (
        'https://simple-veganista.com/wp-content/uploads/2013/01/best-vegan-quinoa-salad-1.jpg',
        '{"vegan", "lunch"}',
        'Vegan Quinoa Salad',
        '2023-04-09',
        2,
        5,
        'This vegan quinoa salad is packed with protein and flavor, thanks to quinoa, roasted vegetables, and a tangy vinaigrette. Perfect for a healthy lunch!',
        'Alex Johnson'
    ),
    (
        'https://www.eatingonadime.com/wp-content/uploads/2020/07/Lemon-Garlic-Shrimp-Scampi-Square.jpg',
        '{"seafood", "dinner"}',
        'Lemon Garlic Shrimp Scampi',
        '2023-04-08',
        7,
        15,
        'This lemon garlic shrimp scampi is a delicious and easy-to-make seafood dinner that is ready in under 30 minutes. Serve with pasta or crusty bread!',
        'Kim Nguyen'  
    );
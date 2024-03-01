const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "Recipes"
});

db.connect((error) => {
    if (error) {
        console.error("Error connecting to MySQL:", error.message);
        return;
    }
    console.log("MySQL is connected.....");


    const createRecipeTable = `
        CREATE TABLE IF NOT EXISTS Recipe (
            RecipeID INT PRIMARY KEY AUTO_INCREMENT,
            Name VARCHAR(255)
        )
    `;

    const createCategoryTable = `
        CREATE TABLE IF NOT EXISTS Category (
            CategoryID INT PRIMARY KEY AUTO_INCREMENT,
            Name VARCHAR(255)
        )
    `;

    const createIngredientTable = `
        CREATE TABLE IF NOT EXISTS Ingredient (
            IngredientID INT PRIMARY KEY AUTO_INCREMENT,
            Name VARCHAR(255)
        )
    `;

    const createStepTable = `
        CREATE TABLE IF NOT EXISTS Step (
            StepID INT PRIMARY KEY AUTO_INCREMENT,
            Description TEXT
        )
    `;

    const createRecipeCategoryTable = `
        CREATE TABLE IF NOT EXISTS RecipeCategory (
            RecipeID INT,
            CategoryID INT,
            PRIMARY KEY (RecipeID, CategoryID),
            FOREIGN KEY (RecipeID) REFERENCES Recipe(RecipeID),
            FOREIGN KEY (CategoryID) REFERENCES Category(CategoryID)
        )
    `;

    const createRecipeIngredientTable = `
        CREATE TABLE IF NOT EXISTS RecipeIngredient (
            RecipeID INT,
            IngredientID INT,
            PRIMARY KEY (RecipeID, IngredientID),
            FOREIGN KEY (RecipeID) REFERENCES Recipe(RecipeID),
            FOREIGN KEY (IngredientID) REFERENCES Ingredient(IngredientID)
        )
    `;

    const createRecipeStepTable = `
        CREATE TABLE IF NOT EXISTS RecipeStep (
            RecipeID INT,
            StepID INT,
            PRIMARY KEY (RecipeID, StepID),
            FOREIGN KEY (RecipeID) REFERENCES Recipe(RecipeID),
            FOREIGN KEY (StepID) REFERENCES Step(StepID)
        )
    `;


    db.query(createRecipeTable, (error) => {
        if (error){
            console.error("Error creating Recipe table:", error.message);
            return;
        } 
        console.log("Recipe table is created");
    });

    db.query(createCategoryTable, (error) => {
        if (error){
            console.error("Error creating Category table:", error.message);
            return;
        } 
        console.log("Category table is created");
    });

    db.query(createIngredientTable, (error) => {
        if (error){
            console.error("Error creating Ingredient table:", error.message);
            return;
        } 
        console.log("Ingredient table is created");
    });

    db.query(createStepTable, (error) => {
        if (error){
            console.error("Error creating Step table:", error.message);
            return;
        } 
        console.log("Step table is created");
    });

    db.query(createRecipeCategoryTable, (error) => {
        if (error){
            console.error("Error creating RecipeCategory table:", error.message);
            return;
        } 
        console.log("RecipeCategory table is created");
    });

    db.query(createRecipeIngredientTable, (error) => {
        if (error){
            console.error("Error creating RecipeIngredient table:", error.message);
            return;
        } 
        console.log("RecipeIngredient table is created");
    });

    db.query(createRecipeStepTable, (error) => {
        if (error){
            console.error("Error creating RecipeStep table:", error.message);
            return;
        } 
        console.log("RecipeStep table is created");
    });

    db.end();
});



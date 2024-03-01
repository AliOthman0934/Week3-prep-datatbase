# Week3-prep-datatbase
![Diagram ](https://github.com/AliOthman0934/Week2-prep-datatbase/assets/147824401/c4b35587-dc6e-4ddf-8527-d097f134a172)

Regarding normalization:

First Normal Form (1NF):
Each table has a primary key (RecipeID, CategoryID, IngredientID, StepID).
All columns hold atomic (indivisible) values.
No repeating groups within rows.

Second Normal Form (2NF):
All non-key attributes are fully functional dependent on the primary key.
There are no partial dependencies.
All tables appear to meet 2NF.

Third Normal Form (3NF):
There are no transitive dependencies where non-key attributes depend on other non-key attributes.
All tables appear to meet 3NF.
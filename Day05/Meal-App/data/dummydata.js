const recipe = [
    {
      country: "Japan",
      color: "#FF6F61", // Soft coral for Japan
      foods: [
        {
          name: "Sushi",
          image: "https://example.com/images/sushi.jpg",
          description:
            "Traditional Japanese dish made with vinegared rice, raw fish, and vegetables.",
          ingredients: [
            "2 cups sushi rice",
            "3 cups water",
            "1/4 cup rice vinegar",
            "1/4 cup sugar",
            "1 tsp salt",
            "Nori sheets",
            "Fresh salmon or tuna",
            "Cucumber",
          ],
          instructions: [
            "Rinse sushi rice until water runs clear.",
            "Cook rice in water until tender.",
            "Mix rice vinegar, sugar, and salt, then fold into the cooked rice.",
            "Place rice on nori sheets, add toppings, and roll tightly.",
            "Slice rolls into pieces and serve with soy sauce.",
          ],
          prepTime: "30 minutes",
          servings: "4",
        },
        {
          name: "Ramen",
          image: "https://example.com/images/ramen.jpg",
          description:
            "A flavorful Japanese noodle soup with meat, vegetables, and soy-flavored broth.",
          ingredients: [
            "4 cups chicken broth",
            "2 packs ramen noodles",
            "2 boiled eggs",
            "Sliced pork belly",
            "Green onions",
            "Soy sauce",
          ],
          instructions: [
            "Boil chicken broth with soy sauce for flavor.",
            "Cook ramen noodles in boiling water.",
            "Assemble noodles, broth, pork belly, and eggs in a bowl.",
            "Top with green onions and serve hot.",
          ],
          prepTime: "20 minutes",
          servings: "2",
        },
      ],
    },
    {
      country: "Italy",
      color: "#D35400", // Deep orange for Italy
      foods: [
        {
          name: "Pizza Margherita",
          image: "https://example.com/images/pizza.jpg",
          description:
            "Classic Italian pizza with a thin crust, fresh tomatoes, mozzarella, and basil.",
          ingredients: [
            "1 pizza dough",
            "1 cup tomato sauce",
            "Fresh mozzarella cheese",
            "Fresh basil leaves",
            "Olive oil",
            "Salt",
          ],
          instructions: [
            "Roll out pizza dough on a floured surface.",
            "Spread tomato sauce over the dough.",
            "Add slices of mozzarella and fresh basil leaves.",
            "Drizzle with olive oil and sprinkle with salt.",
            "Bake in a preheated oven at 220°C for 12 minutes.",
          ],
          prepTime: "30 minutes",
          servings: "4",
        },
        {
          name: "Tiramisu",
          image: "https://example.com/images/tiramisu.jpg",
          description:
            "A creamy dessert made with coffee-soaked ladyfingers and mascarpone cheese.",
          ingredients: [
            "250g mascarpone cheese",
            "3 eggs",
            "1/2 cup sugar",
            "1 cup strong coffee",
            "1 pack ladyfingers",
            "Cocoa powder",
          ],
          instructions: [
            "Whisk egg yolks and sugar until creamy.",
            "Fold in mascarpone cheese until smooth.",
            "Dip ladyfingers in coffee and layer them in a dish.",
            "Spread mascarpone mixture over the ladyfingers.",
            "Repeat layers and dust with cocoa powder.",
            "Refrigerate for 4 hours before serving.",
          ],
          prepTime: "4 hours 20 minutes",
          servings: "6",
        },
      ],
    },
    {
      country: "India",
      color: "#A569BD", // Soft purple for India
      foods: [
        {
          name: "Chicken Biryani",
          image: "https://example.com/images/biryani.jpg",
          description:
            "Aromatic rice dish cooked with chicken, spices, and saffron.",
          ingredients: [
            "500g chicken",
            "2 cups basmati rice",
            "1 cup yogurt",
            "2 onions, fried",
            "Spices (cinnamon, cloves, bay leaf)",
            "Saffron",
            "Ghee",
          ],
          instructions: [
            "Marinate chicken with yogurt and spices for 2 hours.",
            "Cook rice with saffron and spices until 70% done.",
            "Layer chicken and rice in a pot, topping with fried onions.",
            "Cook on low heat until chicken is tender and rice is fully cooked.",
          ],
          prepTime: "2 hours 45 minutes",
          servings: "4",
        },
        {
          name: "Paneer Butter Masala",
          image: "https://example.com/images/paneer.jpg",
          description: "Creamy tomato-based curry with paneer cubes.",
          ingredients: [
            "250g paneer, cubed",
            "2 tomatoes, pureed",
            "1 onion, chopped",
            "1/2 cup cream",
            "Butter",
            "Spices (turmeric, chili powder, garam masala)",
          ],
          instructions: [
            "Fry paneer cubes until golden and set aside.",
            "Sauté onions in butter until soft.",
            "Add tomato puree and spices, cooking until thickened.",
            "Stir in cream and fried paneer cubes.",
            "Simmer for 5 minutes and serve with naan or rice.",
          ],
          prepTime: "30 minutes",
          servings: "4",
        },
      ],
    },
    {
      country: "Mexico",
      color: "#28B463", // Green for Mexico
      foods: [
        {
          name: "Tacos",
          image: "https://example.com/images/tacos.jpg",
          description:
            "Soft tortillas filled with seasoned meat, vegetables, and salsa.",
          ingredients: [
            "8 small tortillas",
            "500g ground beef",
            "1 onion, chopped",
            "1 cup shredded lettuce",
            "1 cup diced tomatoes",
            "Salsa",
            "Cheddar cheese",
          ],
          instructions: [
            "Cook ground beef with onion until browned.",
            "Warm tortillas in a skillet.",
            "Assemble tacos with beef, lettuce, tomatoes, salsa, and cheese.",
            "Serve with lime wedges.",
          ],
          prepTime: "20 minutes",
          servings: "4",
        },
      ],
    },
  ];
  
  export default recipe;
  
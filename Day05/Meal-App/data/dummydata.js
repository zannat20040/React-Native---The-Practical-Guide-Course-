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
  {
    country: "France",
    color: "#D4AC0D", // Golden yellow for France
    foods: [
      {
        name: "Croissant",
        image: "https://example.com/images/croissant.jpg",
        description:
          "Flaky and buttery pastry, a classic French breakfast item.",
        ingredients: [
          "2 cups all-purpose flour",
          "1 cup butter",
          "1/2 cup milk",
          "1 tbsp sugar",
          "1 tsp salt",
          "1 tsp yeast",
        ],
        instructions: [
          "Mix flour, yeast, sugar, and salt in a bowl.",
          "Add milk and knead into a dough, refrigerate.",
          "Roll out dough, layer with butter, and fold multiple times.",
          "Shape into croissants and let rise.",
          "Bake at 200°C for 15 minutes until golden.",
        ],
        prepTime: "3 hours",
        servings: "6",
      },
      {
        name: "Ratatouille",
        image: "https://example.com/images/ratatouille.jpg",
        description:
          "A colorful vegetable medley cooked with herbs and olive oil.",
        ingredients: [
          "1 zucchini, sliced",
          "1 eggplant, sliced",
          "1 bell pepper, chopped",
          "2 tomatoes, chopped",
          "1 onion, chopped",
          "Olive oil",
          "Herbs (thyme, rosemary, basil)",
        ],
        instructions: [
          "Sauté onions and bell peppers in olive oil.",
          "Layer zucchini, eggplant, and tomatoes in a baking dish.",
          "Sprinkle herbs and drizzle with olive oil.",
          "Bake at 180°C for 30 minutes until vegetables are tender.",
        ],
        prepTime: "45 minutes",
        servings: "4",
      },
    ],
  },
  {
    country: "China",
    color: "#E74C3C", // Red for China
    foods: [
      {
        name: "Sweet and Sour Pork",
        image: "https://example.com/images/sweet_sour_pork.jpg",
        description:
          "Crispy pork stir-fried with sweet and tangy sauce and vegetables.",
        ingredients: [
          "500g pork, cubed",
          "1 bell pepper, chopped",
          "1 onion, chopped",
          "Pineapple chunks",
          "Soy sauce",
          "Sugar",
          "Vinegar",
        ],
        instructions: [
          "Coat pork in cornstarch and fry until golden.",
          "Sauté bell peppers and onions in a wok.",
          "Add pork and pineapple chunks.",
          "Stir in soy sauce, sugar, and vinegar, cooking until thickened.",
        ],
        prepTime: "30 minutes",
        servings: "4",
      },
    ],
  },
  {
    country: "Thailand",
    color: "#F39C12", // Bright orange for Thailand
    foods: [
      {
        name: "Pad Thai",
        image: "https://example.com/images/pad_thai.jpg",
        description:
          "Stir-fried rice noodles with shrimp, tofu, and tamarind sauce.",
        ingredients: [
          "200g rice noodles",
          "100g shrimp",
          "Tofu, diced",
          "2 eggs",
          "Bean sprouts",
          "Peanuts, crushed",
          "Tamarind paste",
          "Fish sauce",
        ],
        instructions: [
          "Soak rice noodles in water until soft.",
          "Stir-fry tofu and shrimp in a wok.",
          "Push to the side, scramble eggs, and mix with tofu and shrimp.",
          "Add noodles, tamarind paste, and fish sauce.",
          "Toss with bean sprouts and top with peanuts.",
        ],
        prepTime: "25 minutes",
        servings: "2",
      },
    ],
  },
  {
    country: "USA",
    color: "#3498DB", // Blue for USA
    foods: [
      {
        name: "Burger",
        image: "https://example.com/images/burger.jpg",
        description:
          "Juicy beef patty served in a bun with lettuce, tomato, and cheese.",
        ingredients: [
          "500g ground beef",
          "Burger buns",
          "Lettuce",
          "Tomato slices",
          "Cheddar cheese",
          "Pickles",
          "Ketchup and mustard",
        ],
        instructions: [
          "Form ground beef into patties and grill until cooked.",
          "Toast burger buns on a grill.",
          "Assemble burger with lettuce, tomato, cheese, and pickles.",
          "Add ketchup and mustard before serving.",
        ],
        prepTime: "20 minutes",
        servings: "4",
      },
    ],
  },
  {
    country: "Turkey",
    color: "#8E44AD", // Deep purple for Turkey
    foods: [
      {
        name: "Baklava",
        image: "https://example.com/images/baklava.jpg",
        description:
          "A sweet pastry made of layers of phyllo dough, nuts, and honey syrup.",
        ingredients: [
          "1 pack phyllo dough",
          "2 cups walnuts, chopped",
          "1 cup butter, melted",
          "1 cup sugar",
          "1 cup water",
          "1/2 cup honey",
        ],
        instructions: [
          "Layer phyllo dough in a baking dish, brushing each layer with butter.",
          "Sprinkle chopped walnuts between layers.",
          "Bake at 180°C for 30 minutes until golden.",
          "Boil sugar, water, and honey to make syrup.",
          "Pour syrup over baked baklava and cool before serving.",
        ],
        prepTime: "1 hour",
        servings: "8",
      },
    ],
  },
  {
    country: "Greece",
    color: "#2980B9", // Mediterranean blue for Greece
    foods: [
      {
        name: "Moussaka",
        image: "https://example.com/images/moussaka.jpg",
        description:
          "A layered casserole with eggplant, ground meat, and creamy béchamel sauce.",
        ingredients: [
          "2 large eggplants, sliced",
          "500g ground beef or lamb",
          "2 onions, chopped",
          "2 cups tomato sauce",
          "1 cup grated cheese",
          "2 cups milk",
          "3 tbsp flour",
          "3 tbsp butter",
          "Olive oil",
          "Salt and pepper",
        ],
        instructions: [
          "Salt eggplant slices and let them sit to remove bitterness. Rinse and pat dry.",
          "Fry eggplant slices in olive oil until golden and set aside.",
          "Cook ground meat with onions and tomato sauce until thickened.",
          "Make béchamel sauce by whisking butter, flour, and milk until smooth.",
          "Layer eggplant, meat mixture, and béchamel in a baking dish.",
          "Top with grated cheese and bake at 190°C for 30 minutes.",
        ],
        prepTime: "1 hour 15 minutes",
        servings: "6",
      },
      {
        name: "Greek Salad",
        image: "https://example.com/images/greek_salad.jpg",
        description:
          "A refreshing salad with tomatoes, cucumbers, olives, feta cheese, and olive oil.",
        ingredients: [
          "4 tomatoes, diced",
          "1 cucumber, sliced",
          "1 red onion, sliced",
          "1/2 cup black olives",
          "200g feta cheese, crumbled",
          "3 tbsp olive oil",
          "1 tsp oregano",
          "Salt and pepper",
        ],
        instructions: [
          "Combine tomatoes, cucumbers, onions, and olives in a bowl.",
          "Top with crumbled feta cheese.",
          "Drizzle with olive oil and sprinkle with oregano, salt, and pepper.",
          "Serve immediately as a side or main dish.",
        ],
        prepTime: "15 minutes",
        servings: "4",
      },
    ],
  },
];

export default recipe;

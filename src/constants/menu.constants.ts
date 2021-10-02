export type Category = {
  id: string;
  items?: FoodItem[];
};
export type FoodItem = {
  title: string;
  description?: string;
  price?: Number | undefined;
};
export const MENU_CATEGORIES: Category[] = [
  {
    id: "Appertizers",
    items: [
      {
        title: "Soup of the Day",
        price: 5.5,
      },
      {
        title: "Baked Onion Soup",
        price: 7.5,
      },
      {
        title: "Deep Fried Avacado",
        description:
          "Tender avocado slices under a crunchy layer of bread crumbs, with hints of lime, cilantro and chili. Served with our signature dipping sauces.",
        price: 8,
      },
      {
        title: "Root Vegetable Medley Fries",
        description:
          "An eye catching mixture of lightly battered root vegetables - Sweet parsnips, magenta beets and vibrant orange carrots.",
        price: 8,
      },
      {
        title: "Classic Perogi",
        description:
          "Potato and cheddar stuffed tossed with sautéed onions, mushrooms and crisp bacon with a side of sour cream.",
        price: 10,
      },
      {
        title: "Classic Poutine",
        description:
          "Our crispy, golden Pub Chips topped with gravy and melted cheese curd.",
        price: 10,
      },
      {
        title: "Pickle Spears",
        description:
          "Dill pickle cut into spears and lightly coated with a dill-flavored breading. Served with buttermilk ranch.",
        price: 10,
      },
      {
        title: "Spice Dusted Calamari",
        description: "Served with spice tartar sauce.",
        price: 12,
      },
      {
        title: "Italian Meatballs",
        description:
          "In a spicy marinara sauce with grated parmesan and garlic bread.",
        price: 13,
      },
      {
        title: "Chicken Shawarma Poutine",
        description:
          "Pub Chips topped with gravy, melted cheese curd and Chicken Shawarma.",
        price: 12,
      },
      {
        title: "Sweet Potato Fries",
        description: "Served with chipotle mayo",
        price: 8,
      },
      {
        title: "Veggie Samosas",
        description: "Served with Thai chili sauce",
        price: 8,
      },
      {
        title: "Spinache Artichoke Cheese Dip",
        description:
          "Rich and creamy blend of chees, spinach and globe artichoke; served with garlic naan bread",
        price: 13,
      },
      {
        title: "Boneless Chicken Bites",
        description:
          "Boneless crispy chicken bites tossed in your choice of wing sauce; served with carrots and ranch dressing",
        price: 11,
      },
      {
        title: "Chicken Shawarma Flatbread",
        description:
          "Tomato Sauce, bell peppers and red onions; finished with melted marble cheese",
        price: 12,
      },
      {
        title: "Bruscheta Flatbread",
        description:
          "Tzatziki sauce, tomatoes, onions, herbs, feta cheese and marble cheese with a balsamic reduction",
        price: 12,
      },
    ],
  },
  {
    id: "Salads",
    items: [
      {
        title: "Greek Salad",
        description:
          "Crispy romaine lettuce with kalamata olives, tomatoes, cucumbers, mixed peppers, red onions and feta cheese.",
        price: 11,
      },
      {
        title: "Julienne Salad",
        description:
          "Monterey jack cheese, grilled chicken breast, peameal bacon, eggs, tomatoes, cucumbers and red onions. Served over a bed of mixed greens.",
        price: 16,
      },
      {
        title: "Roasted Beet Root Salad",
        description:
          "Spring mix salad with roasted beet roots, avocados, tomatoes, red onions, roasted sliced honey glazed almonds, and feta cheese. Served with balsamic dressing.",
        price: 13,
      },
      {
        title: "Buffalo Chicken Cobb Salad",
        description:
          "Mixed greens topped with our famous chicken fingers tossed in Buffalo butter sauce, avocados, bacon, tomatoes, egg and feta cheese with a ranch dressing.",
        price: 16,
      },
      {
        title: "Warm Chicken Salad",
        description:
          "Mixed greens topped with chicken, sweet peppers, carrot ribbons and spicy red radish; coated in a warm house vinaigrette dressing.",
        price: 16,
      },
      {
        title: "Grilled Vegetables & Warm Goat Cheese Salad",
        description:
          "House mix greens with grilled vegetable, tomato wedges, topped with warm goat cheese and drizzled with balsamic reduction. 13",
        price: 16,
      },
    ],
  },
  {
    id: "Nachos & Wings",
    items: [
      {
        title: "Baked Nachos",
        description:
          "Tortilla chips covered with tomatoes, jalapeños, sweet peppers, green onions and shredded marble cheese served with sour cream and salsa. 15 Add grilled chicken 4 | Add chili 4 | Add guacamole 2.50",
        price: 15,
      },
      {
        title: "Wings",
        description:
          "Served with carrot sticks with your choice of ranch or blue cheese on the side for dipping. Lightly dusted with seasoned flour and tossed in you choice of wing sauce",
        price: 13.5,
      },
      {
        title: "Quesadilla",
        description:
          "Soft flour tortillas baked with a filling of cheese, tomato, jalapeños, sweet peppers and green onion served with sour cream and salsa",
        price: 10,
      },
      {
        title: "Chipotle Chicken Quesadilla",
        price: 12,
      },
    ],
  },
  {
    id: "Burgers & Sandwiches",
    items: [
      {
        title: "Classic Burger",
        description:
          "A tender and juicy 6oz burger grilled to perfection. Topped with lettuce, tomatoes, onions, mayo and pickle",
        price: 13,
      },
      {
        title: "Banquet Burger",
        description:
          "Beef burger with peameal bacon and melted marble cheese. Topped with lettuce, tomatoes, onions, mayo and pickle",
        price: 16,
      },
      {
        title: "Vegeterian Burger",
        description:
          "Grilled veggie patty with fresh tzatziki, tomatoes, onions and feta cheese",
        price: 13,
      },
      {
        title: "The Lamb Burger",
        description:
          "Seasoned with mint and basil topped with tzatziki, spring mix, onions, tomatoes, herbs and feta cheese",
        price: 15,
      },
      {
        title: "West Coast Burger",
        description:
          "Beef burger topped with fresh avocado, fire-roasted red pepper and roasted garlic aioli. Topped with lettuce, tomatoes, onions, mayo and pickle",
        price: 16,
      },
      {
        title: "Portabelo Mushroom Burger",
        description:
          "Balsamic roasted portabello caps topped with spring mix, local goat cheese and red peppers",
        price: 13,
      },
      {
        title: "Fish Tacos",
        description:
          "Two soft tacos filled with beer battered fish, lettuce, cabbage slaw, pico de gallo and aspicy tartar sauce",
        price: 14,
      },
      {
        title: "Steak Sandwich",
        description:
          "A grilled 60z striploin topped with sautéed creminl mushrooms, caramelized onions ona toasted garlic panini",
        price: 19,
      },
      {
        title: "Roast Beef dip",
        description:
          "Thinly sliced tender roast beef and caramelized onions, creamed horseradish and a rich beef au jus on a toasted garlic panini",
        price: 14,
      },
      {
        title: "Canadian Club",
        description:
          "Grilled chicken topped with peameal bacon, lettuce, tomatoes and mayo, served on toasted 10 grain or white bread",
        price: 14,
      },
      {
        title: "PBLT",
        description:
          "Peameal bacon, lettuce, tomato and mayo on toasted whole 10 grain or white bread",
        price: 12,
      },
      {
        title: "Caribean Jerk Chicken",
        description:
          "Grilled chicken, mayo, lettuce, tomatoes and red onion, seared in a spicy Caribbean jerk sauce on a rustic bun with melted monterey jack",
        price: 15,
      },
      {
        title: "Chipotle Chicken Wrap",
        description:
          "Crispy breaded chicken tossed in chipotle sauce with lettuce, tomatoes and marble cheese wrapped ina grilled soft tortilla",
        price: 14,
      },
      {
        title: "Chipotle Fajita Wrap",
        description:
          "Grilled chicken wrapped with onions, sweet peppers, tomatoes, lettuce, Tex Mex cheese, salsa and oursecret spices",
        price: 14,
      },
      {
        title: "Grilled Veggie Wrap",
        description:
          "House marinated grilled vegetable, spring mix, tomatoes and feta cheese wrapped in a grilled soft tortilla",
        price: 14,
      },
    ],
  },
  {
    id: "Bull Favorites",
    items: [
      {
        title: "Fish & Chips",
        description:
          "Deep fried haddock ina crispy ale beer batter, served with pub chips, cabbage slaw and tartar sauce.",
        price: 14,
      },
      {
        title: "8oz NY Striploin",
        description:
          "“AAA” center cut steak grilled to your taste. Topped with a red wine mushroom onion sauce and served with garlic mashed potatoes and seasoned vegetables",
        price: 23,
      },
      {
        title: "Bangers, Beans & Mash",
        description:
          "Real English bangers, caramelized onions and baked beans with garlic mashed potatoes",
        price: 13.5,
      },
      {
        title: "HOT'N Spicy Stir-Fry",
        description:
          "Fresh mixed vegetables, peanuts, garlic, and coriander with Teriyaki sauce served on basmati rice and sprinkled with toasted sesame seeds",
        price: 13.5,
      },
      {
        title: "Classic Chicken Fingers",
        description:
          "Lightly breaded chicken tenders; served with pub chips and plum sauce",
        price: 13.5,
      },
      {
        title: "Chicken Souvlaki",
        description:
          "Lemon and oregano marinated grilled chicken skewers, with basmati rice, Greek salad and tzatziki sauce",
        price: 18,
      },
      {
        title: "Sheppard's Pie",
        description:
          "Ground beef, peas, carrots and onion and with beef gravy topped with parmesan garlic mashed potatoes and served with mixed greens",
        price: 16,
      },
      {
        title: "Steak & Portabello Mushroom Pie",
        description:
          "Braised beef tenderloin tipsina portobello mushroom demi-glaze, baked with puff pastry and topped with beef gravy, served with garlic mashed potatoes and seasonal vegetables",
        price: 16,
      },
      {
        title: "Norwegian Steelhead Salmon & Jumbo Shrimp",
        description:
          "Baked salmon topped with Red Thai sauce and grilled jurnbo shrimp. Served with basmati rice pilaf and stearned seasonal vegetables",
        price: 23,
      },
      {
        title: "Chicken Valencia",
        description:
          "Pan seared free range chicken breast topped with tiger shrimp, black olives in a mushroom white wine cream sauce. Served with garlic mashed potatoes and steamed seasonal vegetables",
        price: 18,
      },
      {
        title: "Sizzling Fajitas",
        description:
          "Warr flour tortillas, sour cream, salsa, marble cheese, chopped tomatoes, lettuce; followed by caramelized onions and peppers, served on a sizzling skillet with your choice of Chicken or Steak",
        price: 20,
      },
    ],
  },
];

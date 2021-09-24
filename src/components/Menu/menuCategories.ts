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
    id: "Nachos & Quesadilla",
    items: [
      {
        title: "Baked Nachos",
        description:
          "Tortilla chips covered with tomatoes, jalapeños, sweet peppers, green onions and shredded marble cheese served with sour cream and salsa. 15 Add grilled chicken 4 | Add chili 4 | Add guacamole 2.50",
      },
      {
        title: "Quesadilla",
        description:
          "Soft flour tortillas baked with a filling of cheese, tomato, jalapeños, sweet peppers and green onion served with sour cream and salsa 10",
      },
      {
        title: "Chipotle Chicken Quesadilla",
      },
    ],
  },
];

export type Category = {
  id: string;
  items?: FoodItem[];
};
export type MenuItem = {
  title: string;
  logo?: string;
  description?: string;
  options?: MenuItemOptions[];
};
export type MenuItemOptions = {
  price: Number;
  description?: string;
};

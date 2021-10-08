// import HeinekenLogo from "assets/img/logos/heineken.jpg";
export type DrinkCategory = {
  id: string;
  items?: DrinkMenuItem[];
};
export type DrinkMenuItem = {
  title: string;
  options?: DrinkOption[];
  description?: string;
  logo?: string;
};
export type DrinkOption = {
  size: string;
  price: number;
};
export const DRINK_CATEGORIES: DrinkCategory[] = [
  {
    id: "DRAUGHT BEER",
    items: [
      {
        title: "Heineken",
        description:
          "A refreshing lager beer with a distinct and balanced taste. The shade of fruitiness nicely blends with the bitterness of the hops",
        options: [
          {
            size: "20oz",
            price: 6.5,
          },
          {
            size: "bottle",
            price: 8.9,
          },
        ],
      },

      {
        title: "Molson Canadian",
        options: [
          {
            size: "20oz",
            price: 6.5,
          },
        ],
      },
      {
        title: "Coors Original",
        options: [
          {
            size: "20oz",
            price: 7.25,
          },
        ],
      },
      {
        title: "Rickard's Red",
        options: [
          {
            size: "20oz",
            price: 7.25,
          },
        ],
      },
      {
        title: "Budweiser",
        options: [
          {
            size: "20oz",
            price: 6.5,
          },
        ],
      },
      {
        title: "Bud Light",
        options: [
          {
            size: "20oz",
            price: 6.5,
          },
        ],
      },
      {
        title: "Moosehead Lager",
        options: [
          {
            size: "20oz",
            price: 7.25,
          },
        ],
      },
      {
        title: "Alexander Keith's Ipa",
        options: [
          {
            size: "20oz",
            price: 7.25,
          },
        ],
      },
      {
        title: "Shocktop Belgian White",
        options: [
          {
            size: "20oz",
            price: 7.25,
          },
        ],
      },
      {
        title: "Newcastle Brown Ale",
        options: [
          {
            size: "20oz",
            price: 8.9,
          },
        ],
      },
      {
        title: "Goose Island Ipa",
        options: [
          {
            size: "20oz",
            price: 8.5,
          },
        ],
      },
      {
        title: "Krombacher Pilsner",
        options: [
          {
            size: "20oz",
            price: 8.5,
          },
        ],
      },
      {
        title: "Guinness Stout",
        options: [
          {
            size: "20oz",
            price: 8.5,
          },
        ],
      },
      {
        title: "Stella Artois Lager",
        options: [
          {
            size: "20oz",
            price: 8.5,
          },
        ],
      },
    ],
  },
  {
    id: "Draught Cider",
    items: [
      {
        title: "Strongbow",
        description:
          "Fruity and refreshing cider. The ultimate thirst- quencher and number 1 cider in the world",
        options: [
          {
            size: "20oz",
            price: 8.9,
          },
        ],
      },
      {
        title: "Somersby Apple Cider",
        options: [
          {
            size: "Tall Can",
            price: 9,
          },
        ],
      },
    ],
  },
  {
    id: "Craft Draught",
    items: [
      {
        title: "Duggan's #9 Ipa",
        options: [
          {
            size: "20oz",
            price: 7.25,
          },
        ],
      },
      {
        title: "HOP CITY - 8TH SIN BLACK LAGER",
        options: [
          {
            size: "20oz",
            price: 7.25,
          },
        ],
      },
      {
        title: "HOP CITY - BARKING SQUIRREL LAGER",
        options: [
          {
            size: "20oz",
            price: 7.25,
          },
        ],
      },
      {
        title: "HOP CITY - POLLY PILSNER",
        options: [
          {
            size: "20oz",
            price: 7.25,
          },
        ],
      },
      {
        title: "HOP CITY - HOP BOT IPA",
        options: [
          {
            size: "20oz",
            price: 7.25,
          },
        ],
      },
      {
        title: "STEAMWHISTLE PILSNER",
        options: [
          {
            size: "20oz",
            price: 7.25,
          },
        ],
      },
    ],
  },
  {
    id: "BOTTLED BEER",
    items: [
      {
        title: "MOLSON CANADIAN",
        options: [
          {
            size: "Bottle",
            price: 5.25,
          },
        ],
      },
      {
        title: "COORS LIGHT",
        options: [
          {
            size: "Bottle",
            price: 5.25,
          },
        ],
      },
      {
        title: "MILLER LITE",
        options: [
          {
            size: "Bottle",
            price: 5.25,
          },
        ],
      },
      {
        title: "MOLSON ULTRA",
        options: [
          {
            size: "Bottle",
            price: 5.25,
          },
        ],
      },
      {
        title: "MOLSON EXPORT",
        options: [
          {
            size: "Bottle",
            price: 5.25,
          },
        ],
      },
      {
        title: "BUDWEISER",
        options: [
          {
            size: "Bottle",
            price: 5.25,
          },
        ],
      },
      {
        title: "BUD LIGHT",
        options: [
          {
            size: "Bottle",
            price: 5.25,
          },
        ],
      },
      {
        title: "LABATT BLUE",
        options: [
          {
            size: "Bottle",
            price: 5.25,
          },
        ],
      },
      {
        title: "BLUE LIGHT",
        options: [
          {
            size: "Bottle",
            price: 5.25,
          },
        ],
      },
      {
        title: "LABATT 50",
        options: [
          {
            size: "Bottle",
            price: 5.25,
          },
        ],
      },
      {
        title: "MOOSEHEAD LAGER",
        options: [
          {
            size: "Bottle",
            price: 5.5,
          },
        ],
      },
      {
        title: "KRONENBOURG BLANC",
        options: [
          {
            size: "Bottle",
            price: 6,
          },
        ],
      },
      {
        title: "MICHELOB ULTRA",
        options: [
          {
            size: "Bottle",
            price: 6,
          },
        ],
      },
      {
        title: "CORONA",
        options: [
          {
            size: "Bottle",
            price: 6,
          },
        ],
      },
      {
        title: "STELLA ARTOIS",
        options: [
          {
            size: "Bottle",
            price: 6,
          },
        ],
      },
      {
        title: "HEINEKEN 0.0",
        options: [
          {
            size: "Bottle",
            price: 5.25,
          },
        ],
      },
    ],
  },
  {
    id: "Tall Cans",
    items: [
      {
        title: "KILKENNY",
        options: [
          {
            size: "Tall Can",
            price: 8,
          },
        ],
      },
      {
        title: "HARP LAGER",
        options: [
          {
            size: "Tall Can",
            price: 8,
          },
        ],
      },
    ],
  },
  {
    id: "COCKTAILS",
    items: [
      {
        title: "MOSCOW MULE",
        description: "Stolichnaya Vodka, Lime and Ginger Beer",
        options: [
          {
            size: "2oz",
            price: 12,
          },
        ],
      },
      {
        title: "NEGRONI",
        description: "Gin, Campari and Sweet Vermouth",
        options: [
          {
            size: "2oz",
            price: 11,
          },
        ],
      },
      {
        title: "MARGARITA",
        description: "Tequila, Lime Juice and Cointreau",
        options: [
          {
            size: "2oz",
            price: 11,
          },
        ],
      },
      {
        title: "OLD FASHIONED",
        description:
          "Whyte & Mackay Whiskey, Agave, and Bitters, served with an orange twist",
        options: [
          {
            size: "2oz",
            price: 11,
          },
        ],
      },
      {
        title: "BLUE FREEZE",
        description: "Lamb's White Rum, Blue Curacao, with pineapple juice",
        options: [
          {
            size: "2oz",
            price: 11,
          },
        ],
      },
      {
        title: "WHISKEY PARALYZER",
        description:
          "Whyte & Mackay Whiskey, Kahlua, over ice with milk and a splash of Pepsi",
        options: [
          {
            size: "2oz",
            price: 11,
          },
        ],
      },
      {
        title: "TROPICAL STORM",
        description:
          "Blueberry Vodka, Malibu Rum, pineapple juice and grenadine",
        options: [
          {
            size: "2oz",
            price: 11,
          },
        ],
      },
      {
        title: "JUNE BUG",
        description: "Malibu Rum, Melon Liquor, orange and pineapple juice",
        options: [
          {
            size: "2oz",
            price: 11,
          },
        ],
      },
      {
        title: "TOM COLLINS",
        description:
          "Gin, Lemon, Agave and Club Soda served with a lemon wedge",
        options: [
          {
            size: "2oz",
            price: 11,
          },
        ],
      },
      {
        title: "CHOCOLATE MARTINI",
        description:
          "Stolichnaya Vodka, Creme de Cacao, shaken with ice, served with a cherry",
        options: [
          {
            size: "2oz",
            price: 11,
          },
        ],
      },
      {
        title: "PINK MARTINI",
        description:
          "Stolichnaya Vodka, Peach Schnapps shaken with cranberry juice",
        options: [
          {
            size: "2oz",
            price: 11,
          },
        ],
      },
      {
        title: "BIKINI MARTINI",
        description:
          "Stolichnaya Vodka, Malibu Rum, pineapple juice and grenadine",
        options: [
          {
            size: "2oz",
            price: 11,
          },
        ],
      },
    ],
  },
  {
    id: "COOLERS",
    items: [
      {
        title: "TWISTED TEA",
        options: [
          {
            size: "Can",
            price: 6,
          },
        ],
      },
      {
        title: "SOCIAL LITE - TRIPLE BERRY/LIME GINGER",
        options: [
          {
            size: "Can",
            price: 7.5,
          },
        ],
      },
      {
        title: "SOCIAL LITE - LEMON CUCUMBER MINT",
        options: [
          {
            size: "Can",
            price: 7.5,
          },
        ],
      },
      {
        title: "SOCIAL LITE - PINEAPPLE MANGO",
        options: [
          {
            size: "Can",
            price: 7.5,
          },
        ],
      },
      {
        title: "SOCIAL LITE - GRAPEFRUIT POMELO",
        options: [
          {
            size: "Can",
            price: 7.5,
          },
        ],
      },
      {
        title: "SMIRNOFF ICE",
        options: [
          {
            size: "Bottle",
            price: 7.5,
          },
        ],
      },
    ],
  },
  {
    id: "WHITE WINE",
    items: [
      {
        title: "WOLF BLASS - YELLOW LABEL CHARDONNAY",
        options: [
          {
            size: "5oz",
            price: 9,
          },
          {
            size: "8oz",
            price: 14,
          },
          {
            size: "Bottle",
            price: 42,
          },
        ],
      },
      {
        title: "GABBIANO - PINOT GRIGIO",
        options: [
          {
            size: "5oz",
            price: 9,
          },
          {
            size: "8oz",
            price: 14,
          },
          {
            size: "Bottle",
            price: 42,
          },
        ],
      },
      {
        title: "DEINHARD GREEN LABEL - RIESLING",
        options: [
          {
            size: "5oz",
            price: 8,
          },
          {
            size: "8oz",
            price: 13,
          },
          {
            size: "Bottle",
            price: 39,
          },
        ],
      },
      {
        title: "PARLEZ VOUS - SAUVIGNON BLANC",
        options: [
          {
            size: "5oz",
            price: 8,
          },
          {
            size: "8oz",
            price: 12,
          },
          {
            size: "Bottle",
            price: 36,
          },
        ],
      },
    ],
  },
  {
    id: "RED WINE",
    items: [
      {
        title: "ROSEMOUNT - DIAMOND SHIRAZ",
        options: [
          {
            size: "5oz",
            price: 9,
          },
          {
            size: "8oz",
            price: 14,
          },
          {
            size: "Bottle",
            price: 42,
          },
        ],
      },
      {
        title: "BV COASTAL - CABERNET SAUVIGNON",
        options: [
          {
            size: "5oz",
            price: 8,
          },
          {
            size: "8oz",
            price: 13,
          },
          {
            size: "Bottle",
            price: 39,
          },
        ],
      },
      {
        title: "GRAFFIGNA - MALBEC",
        options: [
          {
            size: "5oz",
            price: 9,
          },
          {
            size: "8oz",
            price: 14,
          },
          {
            size: "Bottle",
            price: 42,
          },
        ],
      },
      {
        title: "GABBIANO - CHIANTI",
        options: [
          {
            size: "5oz",
            price: 9,
          },
          {
            size: "8oz",
            price: 15,
          },
          {
            size: "Bottle",
            price: 45,
          },
        ],
      },
      {
        title: "LIBERTY SCHOOL - CABERNET SAUVIGNON",
        options: [
          {
            size: "Bottle",
            price: 65,
          },
        ],
      },
    ],
  },
  {
    id: "More",
    items: [
      {
        title: "BERINGER MAIN & WINE - WHITE ZINFANDEL",
        options: [
          {
            size: "5oz",
            price: 7,
          },
          {
            size: "8oz",
            price: 11,
          },
          {
            size: "Bottle",
            price: 33,
          },
        ],
      },
      {
        title: "HENKELL - TROCKEN PICCOLO (200ML)",
        options: [
          {
            size: "Bottle",
            price: 12,
          },
        ],
      },
      {
        title: "RED OR WHITE SANGRIA",
        options: [
          {
            size: "Glass",
            price: 12,
          },
          {
            size: "Pitcher",
            price: 34,
          },
        ],
      },
    ],
  },
];
// {
//   title: "",
//   options:[{
//     size:'',
//     price:
//   }]
// },

import {
  List,
  ListItem,
  MenuItem as Item,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import Responsive from "components/Responsive";
import MenuItem from "components/MenuItem";
import { useState } from "react";
import { MENU_CATEGORIES } from "./menuCategories";

const MobileMenu = () => {
  const [categoryIdx, setCategoryIdx] = useState<number>(0);
  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    setCategoryIdx(parseInt(event.target.value));
  };
  return (
    <Responsive min="xs" max="md">
      <Select
        variant="standard"
        label={MENU_CATEGORIES[categoryIdx].id}
        value={`${categoryIdx}`}
        onChange={handleSelectChange}
      >
        {MENU_CATEGORIES.map((category, i) => (
          <Item key={`Category-${category.id}`} value={i}>
            {category.id}
          </Item>
        ))}
      </Select>
      <List>
        {MENU_CATEGORIES[categoryIdx].items?.map((item) => (
          <ListItem
            key={`${MENU_CATEGORIES[categoryIdx].id}-${item.title}`}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <MenuItem item={item} />
          </ListItem>
        ))}
      </List>
    </Responsive>
  );
};
export default MobileMenu;

import { FC } from "react";
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

import { Category } from "types/menu";
type Props = {
  categories: Category[];
};
const Mobile: FC<Props> = ({ categories }) => {
  const [categoryIdx, setCategoryIdx] = useState<number>(0);
  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    setCategoryIdx(parseInt(event.target.value));
  };
  return (
    <Responsive min="xs" max="md">
      <Select
        variant="standard"
        label={categories[categoryIdx].id}
        value={`${categoryIdx}`}
        onChange={handleSelectChange}
      >
        {categories.map((category, i) => (
          <Item key={`Category-${category.id}`} value={i}>
            {category.id}
          </Item>
        ))}
      </Select>
      <List>
        {categories[categoryIdx].items?.map((item) => (
          <ListItem
            key={`${categories[categoryIdx].id}-${item.title}`}
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
export default Mobile;

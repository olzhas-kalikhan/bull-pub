import { useState, FC } from "react";
import { Box, Tab, Tabs } from "@mui/material";

import Responsive from "components/Responsive";
import { Category } from "types/menu";

import CategoryPanel from "components/CategoryPanel";
type Props = {
  categories: Category[];
};
const Desktop: FC<Props> = ({ categories }) => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedCategory(newValue);
  };
  return (
    <Responsive min="md" max="xl">
      <Box data-aos="fade">
        <Tabs
          centered
          value={selectedCategory}
          onChange={handleTabChange}
          variant="fullWidth"
          sx={{ my: 4 }}
        >
          {categories.map(({ id }) => (
            <Tab key={`tab-${id}`} label={id} />
          ))}
        </Tabs>
        {categories.map((category, i) => (
          <CategoryPanel
            key={`${category.id}-${i}`}
            category={category}
            currentIdx={selectedCategory}
            idx={i}
          />
        ))}
      </Box>
    </Responsive>
  );
};

export default Desktop;

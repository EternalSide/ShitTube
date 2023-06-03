import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

function Sidebar({ selectedCategory, setSelectedCategory }) {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "100%" },
        flexDirection: { md: "column" },
        borderRight: "1px solid #343434",
        backgroundColor: "#0f0f0f",
        width: { sx: "100%", md: "250px" },
        paddingTop: "10px",
      }}
    >
      {categories.map((category) => {
        return (
          <button
            onClick={() => setSelectedCategory(category.name)}
            className="category-btn"
            style={{
              background: category.name === selectedCategory && "rgb(209 0 0)",
              color: "white",
              paddingBottom: "5px",
              width: "100%",
            }}
            key={category.name}
          >
            <span
              style={{
                color: category.name === selectedCategory ? "white" : "white",
                marginRight: "15px",
              }}
            >
              <HomeIcon />
            </span>
            <span
              style={{
                opacity: category.name === selectedCategory ? "1" : "0.8",
                fontFamily: "Roboto",
                fontWeight: 400,
                fontSize: 15,
              }}
            >
              {category.name}
            </span>
          </button>
        );
      })}
    </Stack>
  );
}

export default Sidebar;

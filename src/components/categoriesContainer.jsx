import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { submitToApi } from "../utils/api";

export const CategoriesContainer = ({ children }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await submitToApi(
        null,
        "https://backend.getlinked.ai/hackathon/categories-list",
        "GET"
      );

      await result.unshift({ id: 0, name: "Select your category" });
      setCategories(result);
    })();
  }, []);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { optionsArray: categories });
        }

        return child;
      })}
    </>
  );
};

CategoriesContainer.propTypes = {
  children: PropTypes.array,
};

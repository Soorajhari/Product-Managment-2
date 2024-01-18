import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";

const Category = ({ handleCheckboxChange }) => {
  const [expandedItems, setExpandedItems] = useState({});
  const [expandedSubsubcategories, setExpandedSubsubcategories] = useState({});
  const { data, error } = useFetch("/get-category");

  console.log(data);

  const toggleSubcategories = (index) => {
    setExpandedItems((prevExpanded) => ({
      ...prevExpanded,
      [index]: !prevExpanded[index],
    }));
  };

  const toggleSubsubcategories = (index, subIndex) => {
    setExpandedSubsubcategories((prevExpanded) => ({
      ...prevExpanded,
      [index]: {
        ...prevExpanded[index],
        [subIndex]: !prevExpanded[index]?.[subIndex],
      },
    }));
  };

  return (
    <div className="ml-10 mt-6">
      <div className="flex gap-x-8">
        <p className="font-semibold text-lg">Home</p>
        <ion-icon class="mt-2" name="chevron-forward-outline"></ion-icon>
      </div>

      <div className="mt-10">
        <p className="text-blue-500 font-medium text-xl">Categories</p>
        <p className="text-2xl mt-2">All Categories</p>
        <div className="mt-3 gap-x-32">
          {data.map((item, index) => (
            <div className="flex gap-x-32 mt-3" key={index}>
              <ul className="text-lg font-medium">
                <li>
                  <div className="flex items-center">{item.category}</div>
                </li>
                <div className="">
                  <div className="flex flex-col gap-x-20">
                    {expandedItems[index] &&
                      item.subcategories.map((subcategory, subIndex) => (
                        <div key={subIndex} className="">
                          <li>{subcategory.name}</li>
                          <div
                            className="ml-12"
                            onClick={() =>
                              toggleSubsubcategories(index, subIndex)
                            }
                          >
                            {expandedSubsubcategories[index]?.[subIndex] ? (
                              <ion-icon
                                class="text-xl"
                                name="chevron-down-outline"
                              ></ion-icon>
                            ) : (
                              <ion-icon
                                class="text-xl"
                                name="chevron-forward-outline"
                              ></ion-icon>
                            )}
                          </div>
                          <div className="">
                            {expandedSubsubcategories[index]?.[subIndex] &&
                              item.subcategories[subIndex].subsubcategories.map(
                                (subItem, subsubIndex) => (
                                  <div
                                    className="flex gap-x-4"
                                    key={subsubIndex}
                                  >
                                    <input
                                      type="checkbox"
                                      id="myCheckbox"
                                      name="myCheckbox"
                                      value="checkboxValue"
                                      onChange={(e) =>
                                        handleCheckboxChange(
                                          e.target.checked,
                                          subItem.name
                                        )
                                      }
                                    ></input>
                                    <li className="font-light">
                                      {subItem.name}
                                    </li>
                                  </div>
                                )
                              )}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </ul>
              <div onClick={() => toggleSubcategories(index)}>
                {expandedItems[index] ? (
                  <ion-icon
                    class="text-xl"
                    name="chevron-down-outline"
                  ></ion-icon>
                ) : (
                  <ion-icon
                    class="text-xl"
                    name="chevron-forward-outline"
                  ></ion-icon>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;

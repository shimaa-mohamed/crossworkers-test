import * as React from "react";
import "../index.less";

interface FilterButtonProps {
  setFilter: (filterName: string) => void;
  isCurrentFilter: (filterName: string) => boolean;
}

class FilterButtons extends React.Component<FilterButtonProps> {
  render() {
    const { setFilter, isCurrentFilter } = this.props;

    return (
      <div className="filters-wrapper">
        <>
          <input
            id="All"
            type="radio"
            name="filter"
            value="All"
            onChange={(e) => setFilter(e.target.value)}
          />
          <label
            className={`custom-radio ${
              isCurrentFilter("All") ? "checked" : ""
            }`}
            htmlFor="All"
          >
            All
          </label>
        </>
        <>
          <input
            id="Done"
            type="radio"
            name="filter"
            value="Done"
            onChange={(e) => setFilter(e.target.value)}
          />
          <label
            className={`custom-radio ${
              isCurrentFilter("Done") ? "checked" : ""
            }`}
            htmlFor="Done"
          >
            Done
          </label>
        </>
        <>
          <input
            id="Pending"
            type="radio"
            name="filter"
            value="Pending"
            onChange={(e) => setFilter(e.target.value)}
          />
          <label
            className={`custom-radio ${
              isCurrentFilter("Pending") ? "checked" : ""
            }`}
            htmlFor="Pending"
          >
            Pending
          </label>
        </>
      </div>
    );
  }
}

export default FilterButtons;

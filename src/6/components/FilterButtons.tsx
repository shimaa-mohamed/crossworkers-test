import * as React from "react";
import { FILTERS } from "./TodoList";

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
            id={FILTERS.ALL}
            type="radio"
            name="filter"
            value={FILTERS.ALL}
            onChange={(e) => setFilter(e.target.value)}
          />
          <label
            className={`custom-radio ${
              isCurrentFilter(FILTERS.ALL) ? "checked" : ""
            }`}
            htmlFor={FILTERS.ALL}
          >
            {FILTERS.ALL}
          </label>
        </>
        <>
          <input
            id={FILTERS.DONE}
            type="radio"
            name="filter"
            value={FILTERS.DONE}
            onChange={(e) => setFilter(e.target.value)}
          />
          <label
            className={`custom-radio ${
              isCurrentFilter(FILTERS.DONE) ? "checked" : ""
            }`}
            htmlFor={FILTERS.DONE}
          >
            {FILTERS.DONE}
          </label>
        </>
        <>
          <input
            id={FILTERS.PENDING}
            type="radio"
            name="filter"
            value={FILTERS.PENDING}
            onChange={(e) => setFilter(e.target.value)}
          />
          <label
            className={`custom-radio ${
              isCurrentFilter(FILTERS.PENDING) ? "checked" : ""
            }`}
            htmlFor={FILTERS.PENDING}
          >
            {FILTERS.PENDING}
          </label>
        </>
      </div>
    );
  }
}

export default FilterButtons;

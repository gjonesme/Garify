import React from "react";
import FilterButton from "./FilterButton";

const FilterBar = (props) => {
  return (
    <div>
      <FilterButton
        filterName="All"
        activeFilter={props.activeFilter}
        setActiveFilter={props.setActiveFilter}
      />
      <FilterButton
        filterName="Artists"
        activeFilter={props.activeFilter}
        setActiveFilter={props.setActiveFilter}
      />
      <FilterButton
        filterName="Songs"
        activeFilter={props.activeFilter}
        setActiveFilter={props.setActiveFilter}
      />
      <FilterButton
        filterName="Playlists"
        activeFilter={props.activeFilter}
        setActiveFilter={props.setActiveFilter}
      />
      <FilterButton
        filterName="Albums"
        activeFilter={props.activeFilter}
        setActiveFilter={props.setActiveFilter}
      />
      <FilterButton
        filterName="Podcasts & Shows"
        activeFilter={props.activeFilter}
        setActiveFilter={props.setActiveFilter}
      />
      <FilterButton
        filterName="Genres & Moods"
        activeFilter={props.activeFilter}
        setActiveFilter={props.setActiveFilter}
      />
      <FilterButton
        filterName="Profiles"
        activeFilter={props.activeFilter}
        setActiveFilter={props.setActiveFilter}
      />
    </div>
  );
};

export default FilterBar;

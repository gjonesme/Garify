import React from "react";
import FilterButton from "./FilterButton";

const FilterBar = (props) => {
  return (
    <div>
      <FilterButton
        filterName="All"
        filter="all"
        activeFilter={props.activeFilter}
        setActiveFilter={props.setActiveFilter}
      />
      <FilterButton
        filterName="Artists"
        filter="artists"
        activeFilter={props.activeFilter}
        setActiveFilter={props.setActiveFilter}
      />
      <FilterButton
        filterName="Songs"
        filter="tracks"
        activeFilter={props.activeFilter}
        setActiveFilter={props.setActiveFilter}
      />
      <FilterButton
        filterName="Playlists"
        filter="playlists"
        activeFilter={props.activeFilter}
        setActiveFilter={props.setActiveFilter}
      />
      <FilterButton
        filterName="Albums"
        filter="albums"
        activeFilter={props.activeFilter}
        setActiveFilter={props.setActiveFilter}
      />
      <FilterButton
        filterName="Podcasts & Shows"
        filter="shows"
        activeFilter={props.activeFilter}
        setActiveFilter={props.setActiveFilter}
      />
      {/* <FilterButton
        filterName="Genres & Moods"
        activeFilter={props.activeFilter}
        setActiveFilter={props.setActiveFilter}
      /> */}
      <FilterButton
        filterName="Audiobooks"
        filter="audiobooks"
        activeFilter={props.activeFilter}
        setActiveFilter={props.setActiveFilter}
      />
    </div>
  );
};

export default FilterBar;

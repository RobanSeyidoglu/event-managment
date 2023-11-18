import Icon from "../Icon/Icon";

import styles from "./SearchInput.module.css";

const SearchInput = ({
  selectedList,
  setSelectedList,
  searchedEvent,
  setSearchedEvent,
}) => {
  const searchEvent = ({ target }) => {
    setSelectedList(target.value ? "search" : "inbox");
    setSearchedEvent(target.value);
  };

  if (selectedList !== "search") {
    setSearchedEvent("");
  }

  return (
    <div className={styles.SearchWrapper}>
      <Icon icon="search" size={21} className={styles.SearchIcon} />
      <input
        type="search"
        name="searchEvents"
        placeholder="Search"
        value={searchedEvent}
        className={styles.SearchInput}
        onChange={searchEvent}
      />
    </div>
  );
};

export default SearchInput;
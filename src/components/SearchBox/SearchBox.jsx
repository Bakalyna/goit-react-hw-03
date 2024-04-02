import css from './SearchBox.module.css';

const SearchBox = ({ filter, onFilter }) => {
  return (
    <div className={css.search}>
      <label htmlFor="search">Find contacts by name</label>
      <input
        type="text"
        id="search"
        placeholder="Search..."
        className={css['search-input']}
        value={filter}
        onChange={e => {
          onFilter(e.target.value);
        }}
      />
    </div>
  );
};
export default SearchBox;

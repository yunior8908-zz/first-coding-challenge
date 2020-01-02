import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchInput = (props) => {
  const { searchName } = props;
  const [search, setSearch] = useState('');
  const handlerChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    searchName(search);
  };

  return (
    <div className="input-group input-group-sm mb-3">
      <input className="form-control" placeholder="search by name" value={search} onChange={handlerChange} />
      <button type="button" className="btn btn-primary btn-sm" onClick={handleSearch}>Search</button>
    </div>
  );
};

SearchInput.propTypes = {
  searchName: PropTypes.func.isRequired,
};

export default SearchInput;

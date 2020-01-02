/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FetchLaunchesRequest } from '../../redux/actions/launchesActions';
import LaunchesList from './launchesList';
import Pagination from '../pagination';
import SearchInput from './searchInput';

const LaunchesIndex = (props) => {
  const { listar, loading, total } = props;
  const [page, setPage] = React.useState(1);
  const [limit] = React.useState(5);
  const [search, setSearch] = React.useState('');

  React.useEffect(() => {
    listar({ page, limit, search });
  }, [page, limit, search]);

  const handlePage = (p, l) => {
    setPage(p);
  };

  const handleSearch = (value) => {
    setSearch(value);
  };

  return (
    <>
      {loading && (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      )}
      <SearchInput searchName={handleSearch} />
      {!loading && <LaunchesList />}
      {total > 0 && !loading && (
      <Pagination
        total={total}
        current={page}
        pageSize={limit}
        handlePage={handlePage}
      />
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  loading: state.LaunchesReducers.loadingList,
  total: state.LaunchesReducers.total,
});

const mapDispatchToProps = () => (dispatch) => ({
  listar: (params) => dispatch(FetchLaunchesRequest(params)),
});

LaunchesIndex.propTypes = {
  listar: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  total: PropTypes.number.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LaunchesIndex);

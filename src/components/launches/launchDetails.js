import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import { FetchLaunch } from '../../redux/actions/launchesActions';

const LaunchDetails = (props) => {
  const {
    launch, select, loading, match,
  } = props;

  const {
    url, slug,
    name, status = {},
    window_start: windowStart, window_end: windowEnd, net, rocket = {},
  } = launch;
  const { configuration = {} } = rocket;
  const { id } = match.params;

  useEffect(() => {
    if (id) {
      select(id);
    }
  }, [id]);


  return (
    <>
      {loading ? (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <div className="card">
          <div className="card-header">
            <strong>
id:
              {launch.id}
            </strong>
          </div>
          {launch && (
            <div className="card-body">
              <div>
                <strong>url: </strong>
                {' '}
                {url}
              </div>
              <div>
                <strong>slug: </strong>
                {slug}
              </div>
              <div id="name">
                <strong>name: </strong>
                <span>{name}</span>
              </div>
              <div>
                <strong>status: </strong>
                {status.name}
              </div>
              <div>
                <strong>net: </strong>
                {net}
              </div>
              <div>
                <strong>window start: </strong>
                {windowStart}
              </div>
              <div>
                <strong>window end: </strong>
                {windowEnd}
              </div>
              <div>
                <strong>rocket: </strong>
                {configuration.full_name}
              </div>
            </div>
          )}
          <div className="card-footer">
            <div className="float-right">
              <NavLink
                id="button-back"
                className="btn btn-sm btn-primary"
                to="/launches"
              >
                <span>back</span>
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  loading: state.LaunchesReducers.loadingLaunch,
  launch: state.LaunchesReducers.launch,
});

const mapDispatchToProps = (dispatch) => ({
  select: (id) => dispatch(FetchLaunch(id)),
});

LaunchDetails.propTypes = {
  launch: PropTypes.instanceOf(Object).isRequired,
  select: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  match: PropTypes.instanceOf(Object).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(LaunchDetails));

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LaunchRow from './launchRow';

const LaunchesList = (props) => {
  const { launches } = props;

  return (
    <>
      <table className="table small table-bordered table-hover table-striped">
        <thead className="thead-light">
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Status</th>
            <th>Rocket name</th>
          </tr>
        </thead>
        <tbody>
          {launches.map((launch) => <LaunchRow key={launch.id} {...launch} />)}
        </tbody>
      </table>
    </>
  );
};

const mapStateToProps = (state) => ({
  launches: state.LaunchesReducers.launches,
});

LaunchesList.propTypes = {
  launches: PropTypes.instanceOf(Array).isRequired,
};


export default connect(
  mapStateToProps,
)(LaunchesList);

import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


const LaunchRow = (props) => {
  const {
    id, name, status = {}, rocket = {},
  } = props;

  const { configuration = {} } = rocket;

  return (
    <tr>
      <td>
        <NavLink to={`/launch/${id}`}>
          {id}
        </NavLink>
      </td>
      <td>
        <NavLink id="name" to={`/launch/${id}`}>
          {name}
        </NavLink>
      </td>
      <td id="status-name">{status.name}</td>
      <td id="rocket-name">{configuration.name}</td>
    </tr>
  );
};


LaunchRow.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.instanceOf(Object),
  rocket: PropTypes.instanceOf(Object),
};

LaunchRow.defaultProps = {
  status: {},
  rocket: {},
};


export default LaunchRow;

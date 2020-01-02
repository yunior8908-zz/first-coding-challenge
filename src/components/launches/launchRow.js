import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


const LaunchRow = (props) => {
  const {
    id, name, status = {}, rocket = {},
  } = props;
  return (
    <tr>
      <td>
        <NavLink to={`/launch/${id}`}>
          {id}
        </NavLink>
      </td>
      <td>
        <NavLink to={`/launch/${id}`}>
          {name}
        </NavLink>
      </td>
      <td>{status.name}</td>
      <td>{rocket.configuration.name}</td>
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

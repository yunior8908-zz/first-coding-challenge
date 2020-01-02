/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Pagination = (props) => {
  const {
    total, current, pageSize, handlePage,
  } = props;
  const [range, setRange] = useState([]);
  const [start, setStart] = useState(current - 1 || 0);

  useEffect(() => {
    const aux = Array(total).fill(null, start, start + 10).map((pg, index) => index + 1);
    setRange(aux);
  }, [start, total]);

  const handlerSlide = (direction) => {
    if (direction === 'up') {
      setStart((prev) => prev + 1);
    } else if (direction === 'down') {
      setStart((prev) => prev - 1);
    }
  };

  const handlerPage = (p) => {
    handlePage(p, pageSize);
  };

  return (
    <div className="pagination">
      <div
        className={`page-item ${start === 0 ? 'disabled' : ''}`}
        disabled={start === 0}
        onClick={() => handlerSlide('down')}
      >
        <span className="page-link small">Previous</span>
      </div>
      {range.map((pg) => (
        <div key={pg} className={`page-item ${pg === current ? 'active' : ''}`} onClick={() => handlerPage(pg)}>
          <span className="page-link small" href="#">{pg}</span>
        </div>
      ))}
      <div
        className="page-item"
        disabled={start === (total - 10) || total - start < 10}
        onClick={() => handlerSlide('up')}
      >
        <span className="page-link small" href="#">Next</span>
      </div>
    </div>
  );
};

Pagination.propTypes = {
  total: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired,
  pageSize: PropTypes.number,
  handlePage: PropTypes.func.isRequired,
};


Pagination.defaultProps = {
  pageSize: 5,
};

export default Pagination;

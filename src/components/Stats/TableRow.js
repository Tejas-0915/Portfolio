import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const TableRow = ({ label, link, value, format }) => {
  const isInternalLink = link && link.startsWith("/");

  const renderValue = () => {
    if (!link) {
      return format(value);
    }
    if (isInternalLink) {
      return <Link to={link}>{format(value)}</Link>;
    }
    return <a href={link}>{format(value)}</a>;
  };

  return (
    <tr>
      <td width="70%">{label}</td>
      <td>{renderValue()}</td>
    </tr>
  );
};

TableRow.propTypes = {
  format: PropTypes.func,
  label: PropTypes.string.isRequired,
  link: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.number,
    PropTypes.string,
  ]),
};

TableRow.defaultProps = {
  format: (x) => x,
  link: null,
  value: null,
};

export default TableRow;

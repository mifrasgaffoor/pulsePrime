
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
export default function NavItem({ to, label }) {
  return (
    <li className="mr-5 hover:text-red-600">
      <Link to={to}>{label}</Link>
    </li>
  );
}

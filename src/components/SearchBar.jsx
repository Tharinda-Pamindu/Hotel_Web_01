import { motion } from 'framer-motion';
import { FiMapPin, FiCalendar, FiUsers, FiChevronDown } from 'react-icons/fi';

const fields = [
  {
    icon: <FiMapPin />,
    label: 'Where to?',
    value: 'Search destinations',
  },
  {
    icon: <FiCalendar />,
    label: 'Check In',
    value: 'Add dates',
  },
  {
    icon: <FiCalendar />,
    label: 'Check Out',
    value: 'Add dates',
  },
  {
    icon: <FiUsers />,
    label: 'Travelers',
    value: '2 Adults, 0 Children',
    hasDropdown: true,
  },
];

export default function SearchBar() {
  return (
    <div className="search-bar-wrapper">
      <div className="container">
        <motion.div
          className="search-bar"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
        >
          {fields.map((field, index) => (
            <div className="search-field" key={index}>
              <span className="search-field-icon">{field.icon}</span>
              <div className="search-field-content">
                <span className="search-field-label">{field.label}</span>
                <span className="search-field-value">
                  {field.value}
                  {field.hasDropdown && (
                    <FiChevronDown style={{ marginLeft: 4, verticalAlign: 'middle', fontSize: '0.9rem' }} />
                  )}
                </span>
              </div>
            </div>
          ))}
          <button className="search-btn">Search</button>
        </motion.div>
      </div>
    </div>
  );
}

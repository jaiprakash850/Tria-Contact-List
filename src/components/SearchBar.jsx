// src/components/SearchBar.jsx
import { Search } from 'lucide-react';

// Controlled component for the search input
const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="relative mb-6">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
      <input
  type="text"
  placeholder="Search contacts by name (e.g., Benjamin)..." // ⬅️ More specific placeholder
  value={searchTerm}
  onChange={(e) => onSearchChange(e.target.value)} 
  // Update focus ring/border for better feedback
  className="w-full py-3 pl-10 pr-4 border border-gray-300 rounded-lg focus:ring-3 focus:ring-purple-400 focus:border-purple-500 transition duration-150 shadow-inner" // ⬅️ NEW focus/shadow
/>
    </div>
  );
};

export default SearchBar;
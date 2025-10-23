// src/components/AddContactModal.jsx
import React, { useState } from 'react';
import { X } from 'lucide-react';

const AddContactModal = ({ onClose, onAddContact }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!formData.name || !formData.phone || !formData.email) {
      alert('Please fill in all fields.');
      return;
    }
    
    // Call the function passed from the parent (App.jsx)
    onAddContact(formData);
  };

  return (
    // Modal Overlay
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" onClick={onClose}>
      
      {/* Modal Content - Prevent closing when clicking inside */}
      <div 
        className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 relative"
        onClick={(e) => e.stopPropagation()} 
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New Contact</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input 
              type="text" 
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g., Jane Doe"
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2.5 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
            <input 
              type="text" 
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g., 555-1234"
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2.5 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g., jane@example.com"
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2.5 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          
          <button 
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-150 mt-6"
          >
            Save Contact
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddContactModal;
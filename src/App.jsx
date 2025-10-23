// src/App.jsx
import React, { useState, useEffect, useMemo } from 'react';
import { mockContacts } from './data/mockContacts';
import ContactList from './components/ContactList';
import SearchBar from './components/SearchBar';
import AddContactModal from './components/AddContactModal';
import { Plus } from 'lucide-react';

// --- Utility Function to Simulate API Fetch ---
const fetchContacts = () => {
  return new Promise(resolve => {
    // Simulate network delay
    setTimeout(() => {
      resolve(mockContacts);
    }, 1000); // 1 second delay
  });
};

const App = () => {
  const [contacts, setContacts] = useState([]); // Master list of contacts
  const [searchTerm, setSearchTerm] = useState(''); // State for SearchBar
  const [isLoading, setIsLoading] = useState(true); // State for loading status
  const [isModalOpen, setIsModalOpen] = useState(false); // For Add Contact feature

  //Data Fetching on Mount
  useEffect(() => {
    setIsLoading(true);
    fetchContacts().then(data => {
      setContacts(data);
      setIsLoading(false);
    });
  }, []); // Empty dependency array means this runs only once on mount

  // Filtering Logic (Optimized with useMemo)
  const filteredContacts = useMemo(() => {
    // Handle empty search term
    if (!searchTerm) {
      return contacts;
    }
    
    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    return contacts.filter(contact =>
      // Search by name (case-insensitive)
      contact.name.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }, [contacts, searchTerm]); // Recalculates only when contacts or searchTerm changes

  // Function to add a new contact (for optional feature)
  const addContact = (newContact) => {
    // Create a unique ID for the new contact
    const newId = contacts.length > 0 ? Math.max(...contacts.map(c => c.id)) + 1 : 1;
    const contactToAdd = { 
      ...newContact, 
      id: newId,
      // Assign a random, neutral color for new contacts
      avatarColor: 'bg-gray-400' 
    };
    
    // Update the state with the new contact prepended/appended
    setContacts(prevContacts => [contactToAdd, ...prevContacts]);
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8"> 
    <div className="max-w-xl mx-auto">
      <header className="mb-6 pb-4 border-b border-gray-200 flex justify-between items-center"> {/* ⬅️ Divider added */}
        <h1 className="text-3xl font-extrabold text-indigo-700 tracking-tight">Tria Contact Book</h1> {/* ⬅️ Bolder title/color */}
        <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-150"
          >
            <Plus className="w-5 h-5 mr-1" />
            Add Contact
          </button>
      </header>

        {/* Search Bar */}
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

        <main>
          {/* Contact List */}
          <ContactList contacts={filteredContacts} isLoading={isLoading} />
        </main>
      </div>

      {/* Modal for Adding Contact (will be implemented next) */}
      {isModalOpen && (
        <AddContactModal 
          onClose={() => setIsModalOpen(false)} 
          onAddContact={addContact} 
        />
      )}
    </div>
  );
};

export default App;
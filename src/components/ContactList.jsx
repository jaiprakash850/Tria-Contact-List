// src/components/ContactList.jsx
import ContactCard from './ContactCard';

const ContactList = ({ contacts, isLoading }) => {
  if (isLoading) {
    // Loading State
    return (
      <div className="text-center p-8 text-xl text-gray-500">
        Loading contacts... 🔄
      </div>
    );
  }

  if (contacts.length === 0) {
    // No results state
    return (
      <div className="text-center p-8 text-xl text-gray-500">
        No contacts found matching your search. Try a different name. 🧐
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* List Rendering */}
      {contacts.map(contact => (
        <ContactCard key={contact.id} contact={contact} />
      ))}
    </div>
  );
};

export default ContactList;
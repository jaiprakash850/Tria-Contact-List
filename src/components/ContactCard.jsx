// src/components/ContactCard.jsx
import { Phone, Mail } from 'lucide-react';

// This is a presentational component (no state or complex logic)
const ContactCard = ({ contact }) => {
  const initial = contact.name ? contact.name.charAt(0).toUpperCase() : '?';
  return (
    <div className="flex items-center p-4 bg-white border border-gray-100 rounded-xl shadow-md transition duration-300 transform hover:scale-[1.01] hover:shadow-lg cursor-pointer">
  {/* Avatar - Add ring and background */}
  <div className={`
    shrink-0 w-14 h-14 rounded-full flex items-center justify-center 
    text-white font-bold text-xl 
    ${contact.avatarColor || 'bg-gray-400'} 
    ring-2 ring-offset-2 ring-indigo-300  // ⬅️ NEW: Ring for premium look
  `}>
    {initial}
  </div>
  
  {/* Contact Details */}
  <div className="ml-4 grow">
    {/* Name - Use stronger font-weight and a slightly larger size */}
    <h3 className="text-xl font-extrabold text-gray-900">{contact.name}</h3> 
    
    {/* Info Block - Make text smaller and grayed out */}
    <div className="mt-1 space-y-1 text-xs text-gray-500"> 
      <div className="flex items-center">
        <Phone className="w-3 h-3 mr-2 text-blue-500" />
        <span className="truncate">{contact.phone}</span>
      </div>
      <div className="flex items-center">
        <Mail className="w-3 h-3 mr-2 text-blue-500" />
        <span className="truncate">{contact.email}</span>
      </div>
    </div>
  </div>
</div>
  );
};

export default ContactCard;
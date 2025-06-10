import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

const SendToHrMail = () => {
  const [emails, setEmails] = useState<string[]>([]);
  const [inputEmail, setInputEmail] = useState('');
  const [invalidEmails, setInvalidEmails] = useState<string[]>([]);
  const [selectedTemplate, setSelectedTemplate] = useState('');

  const savedContacts = [
    'hr.ravi@company.com',
    'hiring@startup.in',
    'talent@bigfirm.com'
  ];

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleAddEmail = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      const trimmedEmail = inputEmail.trim();
      if (trimmedEmail === '') return;

      if (validateEmail(trimmedEmail)) {
        if (!emails.includes(trimmedEmail)) {
          setEmails([...emails, trimmedEmail]);
        }
      } else {
        setInvalidEmails([...invalidEmails, trimmedEmail]);
      }
      setInputEmail('');
    }
  };

  const handleSelectSaved = (email: string) => {
    if (!emails.includes(email)) setEmails([...emails, email]);
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow">
      <h2 className="text-xl font-semibold mb-1">Send to HRs</h2>
      <p className="text-sm text-gray-500 mb-4">
        Enter email addresses of HR contacts. You can add multiple, and save for future use.
      </p>

      {/* Email Input Chips */}
      <div className="flex flex-wrap gap-2 items-center border border-gray-300 rounded px-3 py-2 focus-within:ring-2 ring-blue-400 mb-1">
        {emails.map((email, idx) => (
          <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
            {email}
          </span>
        ))}
        <input
          type="email"
          placeholder="Add HR email..."
          className="flex-1 outline-none text-sm min-w-[150px]"
          value={inputEmail}
          onChange={(e) => setInputEmail(e.target.value)}
          onKeyDown={handleAddEmail}
        />
      </div>

      {/* Email Validity Feedback */}
      <div className="text-xs mb-4">
        {invalidEmails.length === 0 ? (
          <span className="text-green-600">🟢 Valid</span>
        ) : (
          <>
            <span className="text-red-600">⚠️ Invalid: {invalidEmails.join(', ')}</span>
          </>
        )}
      </div>

      {/* Template Dropdown */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Select Template</label>
        <select
          className="w-full border border-gray-300 px-3 py-2 rounded text-sm"
          value={selectedTemplate}
          onChange={(e) => setSelectedTemplate(e.target.value)}
        >
          <option value="">Select a template</option>
          <option value="nodejs">Node.js Template</option>
          <option value="marketing">Marketing Template</option>
          <option value="ux">UX Template</option>
        </select>
      </div>

      {/* Saved Contacts */}
      <div className="mb-6">
        <h4 className="text-sm font-medium mb-2">Saved HR Contacts</h4>
        <div className="flex flex-wrap gap-2">
          {savedContacts.map((email, idx) => (
            <button
              key={idx}
              onClick={() => handleSelectSaved(email)}
              className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition"
            >
              {email}
            </button>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <button
        className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg flex items-center justify-center gap-2 text-sm font-medium"
        onClick={() => alert('Sending Profile Email...')}
      >
        <FaPaperPlane />
        Send Profile Email
      </button>
    </div>
  );
};

export default SendToHrMail;

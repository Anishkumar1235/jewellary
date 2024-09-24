import React, { useState } from 'react';

// PopupForm Component
const PopupForm = ({ isOpen, onClose, onUpdate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNo: '',
    pinCode: '',
    state: '',
    district: '',
    optionalPhoneNo: '',
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleUpdate = () => {
    onUpdate(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-4" style={{ width: '500px', maxHeight: '80vh', overflowY: 'auto' }}>
        <h3 className="text-lg font-bold mb-4">Change Delivery Address</h3>
        <form>
          <div className="mb-3">
            <label className="block text-gray-700 text-sm font-semibold mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 text-sm"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-3">
            <label className="block text-gray-700 text-sm font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 text-sm"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-3">
            <label className="block text-gray-700 text-sm font-semibold mb-1">Phone No.</label>
            <input
              type="text"
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 text-sm"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="mb-3">
            <label className="block text-gray-700 text-sm font-semibold mb-1">Pin Code</label>
            <input
              type="text"
              name="pinCode"
              value={formData.pinCode}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 text-sm"
              placeholder="Enter pin code"
            />
          </div>
          <div className="mb-3">
            <label className="block text-gray-700 text-sm font-semibold mb-1">State</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 text-sm"
              placeholder="Enter state"
            />
          </div>
          <div className="mb-3">
            <label className="block text-gray-700 text-sm font-semibold mb-1">District</label>
            <input
              type="text"
              name="district"
              value={formData.district}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 text-sm"
              placeholder="Enter district"
            />
          </div>
          <div className="mb-3">
            <label className="block text-gray-700 text-sm font-semibold mb-1">Optional Phone No.</label>
            <input
              type="text"
              name="optionalPhoneNo"
              value={formData.optionalPhoneNo}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 text-sm"
              placeholder="Enter optional phone number"
            />
          </div>
          <div className="flex justify-end space-x-3 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleUpdate}
              className="bg-pink-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-pink-600"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;

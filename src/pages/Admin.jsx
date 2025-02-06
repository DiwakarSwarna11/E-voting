import React, { useState } from 'react';

const Admin = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [datesSaved, setDatesSaved] = useState(false);

  const handleSaveDates = () => {
    if (startDate && endDate) {
      localStorage.setItem('startDate', startDate);
      localStorage.setItem('endDate', endDate);
      setDatesSaved(true);
    } else {
      alert('Please select both start and end dates');
    }
  };

  return (
    <div className="admin-container">
      <h1>Admin Panel</h1>
      <label>
        Start Date:
        <input 
          type="date" 
          value={startDate} 
          onChange={(e) => setStartDate(e.target.value)} 
        />
      </label>
      <label>
        End Date:
        <input 
          type="date" 
          value={endDate} 
          onChange={(e) => setEndDate(e.target.value)} 
        />
      </label>
      <button onClick={handleSaveDates}>Save Voting Dates</button>

      {datesSaved && <p>Voting dates have been set successfully.</p>}
    </div>
  );
};

export default Admin;

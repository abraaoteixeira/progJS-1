import React from 'react';
import axios from 'axios';

function ExportButton({ diagram, explanation }) {
  const handleExport = async (format) => {
    try {
      const response = await axios.post('/topics/export', { diagram, explanation, format });
      if (response.data.message === 'Export successful') {
        alert('Export successful');
      } else {
        alert('Export failed');
      }
    } catch (error) {
      console.error('Error exporting:', error);
      alert('Export failed');
    }
  };

  return (
    <div>
      <button onClick={() => handleExport('pdf')}>Export as PDF</button>
      <button onClick={() => handleExport('image')}>Export as Image</button>
    </div>
  );
}

export default ExportButton;

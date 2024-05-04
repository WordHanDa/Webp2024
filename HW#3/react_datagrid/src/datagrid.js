import React, { useState, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';

const Datagrid = () => {
  const [loading, setLoading] = useState(true);
  const [rows, setRows] = useState([]);
  const [error, setError] = useState(null);
  const columns = [
    { field: 'title', headerName: 'Title', width: 200 },
    { field: 'startDate', headerName: 'Start Date', width: 200 },
    { field: 'endDate', headerName: 'End Date', width: 200 },
    { field: 'showUnit', headerName: 'Location', width: 200 },
    { field: 'discountInfo', headerName: 'Price', width: 200 },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log("Data received:", data); // Log received data
        
        // Ensure each row has a unique ID
        const rowsWithIds = data.map((row, index) => ({ ...row, id: index + 1 }));
        console.log("Rows with IDs:", rowsWithIds); // Log rows with IDs

        setRows(rowsWithIds);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Run only once on component mount

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div style={{ height: 400, width: '50%', margin: 'auto' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} />
    </div>
  );
}

export default Datagrid;

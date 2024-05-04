import React, { useState, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';

const Datagrid = () => {
  const [loading, setLoading] = useState(true);
  const [rows, setRows] = useState([]);
  const [error, setError] = useState(null);
  const columns = [
    { field: 'title', headerName: 'Title', width: 300 },
    { field: 'time', headerName: 'Time', width: 200 },
    { field: 'location', headerName: 'Location', width: 200 },
    { field: 'price', headerName: 'Price', width: 200 },
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
        setRows(data.map((row, index) => ({ ...row, id: index + 1 }))); // Ensure each row has a unique ID
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
    <div style={{ height: 400, width: '50%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5}/>
    </div>
  );
}

export default Datagrid;

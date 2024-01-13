import React, { useEffect, useState } from 'react';
import './App.css';


function ShowTable(){
       
    const [setData, setDataItem] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/`)
        .then((data) => {
    
          console.log('data',data);
          setDataItem(data.results);
      })
      }, []);
}

export default ShowTable;
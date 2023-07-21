import * as React from 'react';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';


function BasicForm() {

    const [data, setData] = useState({
        name: '',
        role: '',
        task: '',
      });
      const handleChange = (event, key) => {
        setData((prevData) => ({
          ...prevData,
          [key]: event.target.value,
        }));
      };
      const handleSave = () => {
        // Send a POST request to the JSON server to save the data
        fetch('http://localhost:3000/profile', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then((responseData) => {
            console.log('Data saved:', responseData);
            // Reset the text fields to empty values after saving
            setData({
              name: '',
              role: '',
              task: '',
            });
          })
          .catch((error) => {
            console.error('Error saving data:', error);
          });
      };

  return (
    <Card sx={{minWidth: 275, mb: 2}}>
        <TextField 
            sx={{m: 2, mb: -2}}
            helperText=""
            id="demo-helper-text-aligned"
            label="İsim"
            value={data.name}
            onChange={(e) => handleChange(e, 'name')}
        />
        <TextField
            sx={{m: 2, mb: -2}}
            helperText=" "
            id="demo-helper-text-aligned-no-helper"
            label="Rol"
            value={data.role}
            onChange={(e) => handleChange(e, 'role')}
        />
        <TextField
            sx={{m: 2, mb: -2}}
            helperText=" "
            id="demo-helper-text-aligned-no-helper"
            label="Görev"
            value={data.task}
            onChange={(e) => handleChange(e, 'task')}
        />
        <Button 
        onClick={handleSave}
        aria-label="add"
        size="large" 
        sx={{m: 3}} 
        style={{background: 'linear-gradient(to right bottom, green, lightgreen)'}}>
          <Typography color={"white"} fontSize="İnherit">Ekle</Typography>
        </Button>
    </Card>
  );
}

export default BasicForm;
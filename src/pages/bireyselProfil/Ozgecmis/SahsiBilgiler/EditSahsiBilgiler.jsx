import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";

import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const PostInputWrapper = styled(TextField)({
  margin: "10px 0",
  borderRadius: "10px",
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
  },
  width: "95%",
  marginLeft: "2.5%",
});

const EqualWidthButton = styled(Button)({
  flex: 1, // Make the buttons share the available space equally
  margin: "0 5px", // Optional: Add some margin between the buttons
});

const EditSahsiBilgiler = ({ onClose, onSave, initialData, isOpen }) => {
  const [editedData, setEditedData] = useState({ ...initialData });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <Dialog open={isOpen} className="popup-container">
      <DialogTitle>Şahsi Bilgileri Düzenle</DialogTitle>
      <DialogContent>
        <PostInputWrapper
          name="userName"
          label="Ad"
          variant="outlined"
          value={editedData.userName}
          onChange={handleChange}
        />
        <PostInputWrapper
          name="userSurname"
          label="Soyad"
          variant="outlined"
          value={editedData.userSurname}
          onChange={handleChange}
        />
        <PostInputWrapper
          name="email"
          label="Email"
          variant="outlined"
          value={editedData.email}
          onChange={handleChange}
        />
        <PostInputWrapper
          name="birthDate"
          type="date"
          label="Doğum Tarihi"
          variant="outlined"
          value={editedData.birthDate}
          onChange={handleChange}
        />
        <PostInputWrapper
          name="city"
          label="Şehir"
          variant="outlined"
          value={editedData.city}
          onChange={handleChange}
        />
        <PostInputWrapper
          name="cellNumber"
          label="Cep Numarası"
          variant="outlined"
          value={editedData.cellNumber}
          onChange={handleChange}
        />
      </DialogContent>

      <DialogActions>
        <EqualWidthButton
          onClick={() => onSave(editedData)}
          variant="contained"
        >
          Kaydet
        </EqualWidthButton>
        <EqualWidthButton onClick={onClose} variant="contained">
          İptal Et
        </EqualWidthButton>
      </DialogActions>
    </Dialog>
  );
};

export default EditSahsiBilgiler;

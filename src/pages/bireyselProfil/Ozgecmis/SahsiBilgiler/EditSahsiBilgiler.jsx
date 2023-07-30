// src/EditPopup.js
import React, { useState } from "react";
import TextField from "@mui/material/TextField";

import { Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ButtonsWrapper, EqualWidthButton } from "../../CustomStyledComponents";

const CardWrapper = styled(Paper)({
  padding: "1rem",
  marginBottom: "10px",
  borderRadius: "3px",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  flexDirection: "column", // Arrange items in a column
  alignItems: "flex-start", // Align items to the left
  zIndex: "9999",
  width: "30%",
});

const PostInputWrapper = styled(TextField)({
  margin: "10px 0",
  borderRadius: "10px",
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
  },
  width : "95%",
  marginLeft : "2.5%",
});

const EditSahsiBilgiler = ({ onClose, onSave, initialData }) => {
  const [editedData, setEditedData] = useState({ ...initialData });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = () => {
    console.log("edited data : ");
    console.log(editedData);
    onSave(editedData);
    onClose();
  };

  return (
    <CardWrapper className="popup-container">
      <h2>Şahsi Bilgileri Düzenle</h2>

      <PostInputWrapper
        name="name"
        label="Ad"
        variant="outlined"
        value={editedData.name}
        onChange={handleChange}
      />
      <PostInputWrapper
        name="surname"
        label="Soyad"
        variant="outlined"
        value={editedData.surname}
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
      <ButtonsWrapper>
        <EqualWidthButton onClick={handleSave} variant="contained">
          Kaydet
        </EqualWidthButton>
        <EqualWidthButton onClick={onClose} variant="contained">
          İptal Et
        </EqualWidthButton>
      </ButtonsWrapper>
    </CardWrapper>
  );
};

export default EditSahsiBilgiler;

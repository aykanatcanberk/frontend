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

const EditEgitimGecmisi = ({ onClose, onSave, initialData }) => {
  const [editedData, setEditedData] = useState({ ...initialData });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = () => {
    onSave(editedData);
    onClose();
  };

  return (
    <CardWrapper className="popup-container">
      <h2>Eğitim Geçmişi Düzenle</h2>

      <PostInputWrapper
        name="graduate"
        label="Lisans"
        variant="outlined"
        value={editedData.graduate}
        onChange={handleChange}
      />
      <PostInputWrapper
        name="year"
        label="Sınıf"
        variant="outlined"
        value={editedData.year}
        onChange={handleChange}
      />
      <PostInputWrapper
        name="department"
        label="Bölüm Adı"
        variant="outlined"
        value={editedData.department}
        onChange={handleChange}
      />
      <PostInputWrapper
        name="faculty"
        label="Fakulte"
        variant="outlined"
        value={editedData.faculty}
        onChange={handleChange}
      />
      <PostInputWrapper
        name="eduStatus"
        label="Eğitim Durumu"
        variant="outlined"
        value={editedData.eduStatus}
        onChange={handleChange}
      />
      <PostInputWrapper
        name="gpa"
        label="Ortalama"
        variant="outlined"
        value={editedData.gpa}
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

export default EditEgitimGecmisi;

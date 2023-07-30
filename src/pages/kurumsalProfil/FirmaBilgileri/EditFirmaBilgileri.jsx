// src/EditPopup.js
import React, { useState } from "react";
import TextField from "@mui/material/TextField";

import { Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ButtonsWrapper, EqualWidthButton } from "../CustomStyledComponents";

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

const EditFirmaBilgileri = ({ onClose, onSave, initialData }) => {
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
      <h2>Firma Bilgilerini Düzenle</h2>

      <PostInputWrapper
        name="companySector"
        label="Company Sector"
        variant="outlined"
        value={editedData.companySector}
        onChange={handleChange}
      />
      <PostInputWrapper
        name="companyType"
        label="Company Type"
        variant="outlined"
        value={editedData.companyType}
        onChange={handleChange}
      />
      <PostInputWrapper
        name="employeeCount"
        label="employeeCount"
        variant="outlined"
        value={editedData.employeeCount}
        onChange={handleChange}
      />
      <PostInputWrapper
        name="foundedIn"
        type="date"
        variant="outlined"
        value={editedData.foundedIn}
        onChange={handleChange}
      />
      <PostInputWrapper
        name="location"
        label="Şehir"
        variant="outlined"
        value={editedData.location}
        onChange={handleChange}
      />
      <PostInputWrapper
        name="areaOfExpertise"
        label="Cep Numarası"
        variant="outlined"
        value={editedData.areaOfExpertise}
        onChange={handleChange}
      />
      <PostInputWrapper
        name="webSite"
        label="webSite"
        variant="outlined"
        value={editedData.webSite}
        onChange={handleChange}
      />
      <PostInputWrapper
        name="phoneNum"
        label="phoneNum"
        variant="outlined"
        value={editedData.phoneNum}
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

export default EditFirmaBilgileri;

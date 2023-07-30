// src/EditPopup.js
import React, { useState } from "react";
import TextField from "@mui/material/TextField";

import { Grid, Paper, Typography, FormControlLabel } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ButtonsWrapper, EqualWidthButton } from "../../CustomStyledComponents";

// import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

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

const DatesWrapper = styled(FormControlLabel)({
  padding: "1rem",
  marginBottom: "10px",
  borderRadius: "3px",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  flexDirection: "column", // Arrange items in a column
  alignItems: "center", // Align items to the left
  zIndex: "9999",
  width: "30%",
});

const PostInputWrapper = styled(TextField)({
  margin: "10px 0",
  borderRadius: "10px",
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
  },
  width: "95%",
  marginLeft: "2.5%",
});

const EditIsGecmisi = ({ onClose, onSave, initialData }) => {
  const [isCurrentlyWorking, setIsCurrentlyWorking] = useState(false);
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
        name="companyName"
        label="Şirket Adı"
        variant="outlined"
        value={editedData.companyName}
        onChange={handleChange}
      />
      <PostInputWrapper
        name="workPosition"
        label="Pozisyon"
        variant="outlined"
        value={editedData.workPosition}
        onChange={handleChange}
      />

      <ButtonsWrapper>
        <PostInputWrapper
          name="startDate"
          type="date"
          variant="outlined"
          value={editedData.startDate}
          onChange={handleChange}
        />
        <FormControlLabel
          control={
            <Checkbox style={{paddingLeft:10}}
              name="isCurrentlyWorking"
              checked={isCurrentlyWorking}
              onChange={() => {
                setIsCurrentlyWorking(!isCurrentlyWorking);
              }}
            />
          }
          label="Hala çalışıyorum"
        />
        {!isCurrentlyWorking && (
          <PostInputWrapper
            name="endDate"
            type="date"            
            variant="outlined"
            value={editedData.endDate}
            onChange={handleChange}
          />
        )}
      </ButtonsWrapper>
      <PostInputWrapper
        name="faculty"
        label="Fakulte"
        variant="outlined"
        value={editedData.faculty}
        onChange={handleChange}
      />
      <PostInputWrapper
        name="personnelNumber"
        label="Personel Numarası"
        variant="outlined"
        value={editedData.personnelNumber}
        onChange={handleChange}
      />
      <PostInputWrapper
        name="confirmationLetter"
        label="Onay Mektubu"
        variant="outlined"
        value={editedData.confirmationLetter}
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

export default EditIsGecmisi;

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";

import { DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { styled } from "@mui/material/styles";
import { EqualWidthButton } from "../CustomStyledComponents";

const PostInputWrapper = styled(TextField)({
  margin: "10px 0",
  borderRadius: "10px",
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
  },
  width: "95%",
  marginLeft: "2.5%",
});

const EditFirmaBilgileri = ({ onClose, onSave, initialData, isOpen }) => {
  const [editedData, setEditedData] = useState({ ...initialData });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <Dialog open={isOpen} className="popup-container">
      <DialogTitle>Firma Bilgilerini Düzenle</DialogTitle>
      <DialogContent>
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

export default EditFirmaBilgileri;

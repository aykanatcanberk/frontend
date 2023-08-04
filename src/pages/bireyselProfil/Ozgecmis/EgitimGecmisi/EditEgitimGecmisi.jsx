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

const EditEgitimGecmisi = ({ onClose, onSave, initialData, isOpen }) => {
  const [editedData, setEditedData] = useState({ ...initialData });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <Dialog open={isOpen} className="popup-container">
      <DialogTitle>Eğitim Geçmişi Düzenle</DialogTitle>
      <DialogContent>
        <PostInputWrapper
          name="schoolType"
          label="Öğretim Seviyesi"
          variant="outlined"
          value={editedData.schoolType}
          onChange={handleChange}
        />
        <PostInputWrapper
          name="schoolName"
          label="Okul"
          variant="outlined"
          value={editedData.schoolName}
          onChange={handleChange}
        />
        <PostInputWrapper
          name="departmentName"
          label="Bölüm Adı"
          variant="outlined"
          value={editedData.departmentName}
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
          name="avg"
          label="Ortalama"
          variant="outlined"
          value={editedData.avg}
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

export default EditEgitimGecmisi;

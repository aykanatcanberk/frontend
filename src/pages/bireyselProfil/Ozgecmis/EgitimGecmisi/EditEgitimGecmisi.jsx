import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";

import { Button, DialogActions, DialogContent, DialogTitle } from "@mui/material";
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

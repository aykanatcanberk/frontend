import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";

import {
  Button,
  Checkbox,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
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

const Calender = styled('div')({
  flex: "auto",
  flexDirection: "row"
  
});

const AddIsGecmisi = ({ onClose, onSave, initialData, isOpen }) => {
  const [isCurrentlyWorking, setIsCurrentlyWorking] = useState(false);
  const [editedData, setEditedData] = useState({ ...initialData });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <Dialog open={isOpen} className="popup-container">
      <DialogTitle>İş Geçmişi Ekle</DialogTitle>
      <DialogContent>
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

        <Calender>
          <PostInputWrapper
            name="startDate"
            type="date"
            variant="outlined"
            value={editedData.startDate}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Checkbox
                style={{ paddingLeft: 10 }}
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
        </Calender>
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

export default AddIsGecmisi;

import React, { useState } from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import {
  CardWrapper,
  CardWrapperForTitles,
  CardWrapperLeftAligned,
  RoundButton,
  ButtonsWrapper
} from "../../CustomStyledComponents";

import {
  Button,
  Checkbox,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const EqualWidthButton = styled(Button)({
  flex: 1, // Make the buttons share the available space equally
  margin: "0 5px", // Optional: Add some margin between the buttons
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

const Calender = styled('div')({
  flex: "auto",
  flexDirection: "row"
  
});

function IsGecmisi({ workBackground, onEditClick }) {
  
  const [isEditingWorkBackground, setIsEditingWorkBackground] = useState(false);
  const [workBackgroundData, setWorkBackgroundData] = useState({});

  const handleEditWorkBackgroundClick = () => {
    setIsEditingWorkBackground(true);
  };

  const handleEditCancel = () => {
    setIsEditingWorkBackground(false);
  };

  const handleEditWorkBackgroundSave = (editedWorkBackground) => {
     // updateUserEduBackgroundInformation(editedEduBackground, 1);

    setWorkBackgroundData(editedWorkBackground);
    setIsEditingWorkBackground(false);
  };


  return (
    <>
      <CardWrapper elevation={0}>
        <CardWrapperLeftAligned elevation={4}>
          <Grid container alignItems="left">
            <Grid item xs={10} sm={10} md={10} alignItems="left">
              <Typography
                variant="subtitle1"
                style={{
                  fontFamily: "Arial",
                  fontSize: "15px",
                  fontWeight: "bold",
                  alignSelf: "left",
                }}
              >
                Şirket Adı
              </Typography>
              <Typography
                variant="subtitle1"
                style={{
                  fontFamily: "Arial",
                  fontSize: "14px",
                  fontWeight: "light",
                  alignSelf: "left",
                }}
              >
                {workBackground.companyName}
              </Typography>
              <br />

              <Typography
                variant="subtitle1"
                style={{
                  fontFamily: "Arial",
                  fontSize: "15px",
                  fontWeight: "bold",
                  alignSelf: "left",
                }}
              >
                Pozisyon
              </Typography>
              <Typography
                variant="subtitle1"
                style={{
                  fontFamily: "Arial",
                  fontSize: "14px",
                  fontWeight: "light",
                  alignSelf: "left",
                }}
              >
                {workBackground.workPosition}
              </Typography>
              <br />

              <Typography
                variant="subtitle1"
                style={{
                  fontFamily: "Arial",
                  fontSize: "15px",
                  fontWeight: "bold",
                  alignSelf: "left",
                }}
              >
                Başlama/Bitiş Tarihi
              </Typography>
              <>
                <Typography
                  variant="subtitle1"
                  style={{
                    fontFamily: "Arial",
                    fontSize: "14px",
                    fontWeight: "light",
                    alignSelf: "left",
                  }}
                >
                  {workBackground.startDate}
                </Typography>
                <Typography
                  variant="subtitle1"
                  style={{
                    fontFamily: "Arial",
                    fontSize: "14px",
                    fontWeight: "light",
                    alignSelf: "left",
                  }}
                >
                  {workBackground.endDate}
                </Typography>
              </>

              <br />

              <Typography
                variant="subtitle1"
                style={{
                  fontFamily: "Arial",
                  fontSize: "15px",
                  fontWeight: "bold",
                  alignSelf: "left",
                }}
              >
                Açıklama
              </Typography>
              <Typography
                variant="subtitle1"
                style={{
                  fontFamily: "Arial",
                  fontSize: "14px",
                  fontWeight: "light",
                  alignSelf: "left",
                }}
              >
                {workBackground.shortDescription}
              </Typography>
              <br />

              <Typography
                variant="subtitle1"
                style={{
                  fontFamily: "Arial",
                  fontSize: "15px",
                  fontWeight: "bold",
                  alignSelf: "left",
                }}
              >
                Personel Numarası
              </Typography>
              <Typography
                variant="subtitle1"
                style={{
                  fontFamily: "Arial",
                  fontSize: "14px",
                  fontWeight: "light",
                  alignSelf: "left",
                }}
              >
                {workBackground.personnelNumber}
              </Typography>
              <br />

              <Typography
                variant="subtitle1"
                style={{
                  fontFamily: "Arial",
                  fontSize: "15px",
                  fontWeight: "bold",
                  alignSelf: "left",
                }}
              >
                Onay Mektubu
              </Typography>
              <Typography
                variant="subtitle1"
                style={{
                  fontFamily: "Arial",
                  fontSize: "14px",
                  fontWeight: "light",
                  alignSelf: "left",
                }}
              >
                {workBackground.confirmationLetter}
              </Typography>
              <br />

              {/* Add other input fields here */}
            </Grid>
          </Grid>
          <ButtonsWrapper>
            <RoundButton
              type="submit"
              variant="contained"
              color="primary"
              size="small"
            >
              Onaya Gönder
            </RoundButton>
            <RoundButton
              variant="contained"
              color="primary"
              size="small"
              onClick={handleEditWorkBackgroundClick}
            >
              DÜZENLE
            </RoundButton>
          </ButtonsWrapper>
        </CardWrapperLeftAligned>
      </CardWrapper>

      <EditIsGecmisi
              initialData={workBackground}
              onClose={handleEditCancel}
              onSave={handleEditWorkBackgroundSave}
              isOpen={isEditingWorkBackground}
            /> 
    </>
  );
}

const EditIsGecmisi = ({ onClose, onSave, initialData, isOpen }) => {
  const [isCurrentlyWorking, setIsCurrentlyWorking] = useState(false);
  const [editedData, setEditedData] = useState({ ...initialData });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <Dialog open={isOpen} className="popup-container">
      <DialogTitle>İş Bilgileri Düzenle</DialogTitle>
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

export default IsGecmisi;

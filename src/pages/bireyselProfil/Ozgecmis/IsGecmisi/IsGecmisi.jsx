import React, { useState } from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import {
  CardWrapper,
  CardWrapperForTitles,
  CardWrapperLeftAligned,
  RoundButton,
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

const ButtonsWrapper = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "10px",
});

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

const Calender = styled("div")({
  flex: "auto",
  flexDirection: "row",
});

function IsGecmisi({ workBackground, companyName, approvalState}) {
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

  const getColor = (approvalState) => {
    if(approvalState === "b"){
      return "grey";
    }
    else if (approvalState === "r"){
      return "red";
    }
    else if (approvalState === "o"){
      return "green";
    }
    else {
      return "grey";
    }
    let color = approvalState === "b" ? "grey" : approvalState === "o" ? "green" : "red";
    console.log("color: " + color);
    return approvalState === "b" ? "grey" : approvalState === "o" ? "green" : "red";
  }

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
                {companyName}
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
                {workBackground.departmentName}
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
                  {workBackground.start}
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
                  {workBackground.end}
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
                {workBackground.employeeID}
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
                {workBackground.appLetter}
              </Typography>
              <br />

              {/* Add other input fields here */}
            </Grid>
          </Grid>
          <ButtonsWrapper>
            <RoundButton
              type="submit"
              variant="contained"
              color={
                approvalState === "b" ? "default" : // Use "default" instead of "grey"
                approvalState === "o" ? "primary" : // Use "primary" instead of "green"
                "secondary"
              }
              size="small"
            >
              {approvalState === "b" ? "Bekliyor" : approvalState === "o" ? "Onaylandı" : "Reddedildi"}
            </RoundButton>
            <RoundButton
              type="submit"
              variant="contained"
              color="primary"
              size="small"
              // onClick={() => } // DO THE SEND APPROVAL HERE PLEASE
            >
              Onaya Gönder
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

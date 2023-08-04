import React, { useEffect, useRef, useState } from "react";
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
import DropdownMenu from "./DropdownMenu";
import { getCompanyIdByNameDictioanry } from "../../../../services/workHistoryService";

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

const Calender = styled("div")({
  flex: "auto",
  flexDirection: "row",
});

const AddIsGecmisi = ({ onClose, onSave, initialData, isOpen, companyDic }) => {

  const [isCurrentlyWorking, setIsCurrentlyWorking] = useState(false);
  const [editedData, setEditedData] = useState({ ...initialData });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedData((prevData) => ({ ...prevData, [name]: value }));
  };

  const [companyDict, setCompanyDict] = useState([]);

  useEffect(() => {
   setCompanyDict(companyDic);
  }, []);

  const [currentCompanyEntered, setCurrentCompanyEntered] = useState({});

  const selectItem = (item) => {
    setCompanyNameEntered(true);
    setCurrentCompanyEntered(item)
  };

  const [canSubmit, setCanSubmit] = useState(false);

  // const companyNameRef = useRef('');
  // const departmentNameRef = useRef('');
  // const startRef = useRef('');
  // const endRef = useRef('');
  // const employeeIDRef = useRef('');
  // const appLetterRef = useRef('');
  const checkboxRef = useRef();
  
  const [companyNameEntered, setCompanyNameEntered] = useState(false);
  const [departmentNameEntered, setDepartmentNameEntered] = useState(false);
  const [startEntered, setStartEntered] = useState(false);
  const [endEntered, setEndEntered] = useState(false);
  const [employeeIDEntered, setEemployeeIDEntered] = useState(false);
  const [appLetterEntered, setAppLetterEntered] = useState(false);

  useEffect(() => {
    setCanSubmit(
      !companyNameEntered ||
        !departmentNameEntered ||
        !startEntered ||
        !endEntered ||
        !employeeIDEntered ||
        !appLetterEntered
    );
  }, [
    companyNameEntered,
    departmentNameEntered,
    startEntered,
    endEntered,
    employeeIDEntered,
    appLetterEntered,
  ]);

  const handleCancel = () => {
    setCompanyNameEntered(false);  
    setDepartmentNameEntered(false);
    setStartEntered(false);
    setEndEntered(false);
    setEemployeeIDEntered(false);
    setAppLetterEntered(false);

    setEditedData({});
    // // companyNameRef.current.value = '';
    // employeeIDRef.current.value = '';
    // departmentNameRef.current.value = "ALİ OSMAN";
    // startRef.current.valueOf = "";
    // endRef.current.valueOf = "";
    
    // appLetterRef.current.value = '';

    if (checkboxRef.current) {
      checkboxRef.current.checked = false;
    }

    onClose();
  };

  return (
    <Dialog open={isOpen} className="popup-container">
      <DialogTitle>İş Geçmişi Ekle</DialogTitle>
      <DialogContent>
        <DropdownMenu selectItem={selectItem} menuItems={companyDict} />
        <PostInputWrapper
          name="editedData.departmentName"
          label="Çalışılan departman"
          variant="outlined"
          value={editedData.departmentName}
          // value={companyName}
          onChange={(e) => {
            handleChange(e);
            setDepartmentNameEntered(e.target.value ? true : false);
          }}
          // ref={departmentNameRef}
        />

        <Calender>
          <PostInputWrapper
            name="start"
            type="date"
            variant="outlined"
            value={editedData.start}
            // value={start}
            onChange={(e) => {
              handleChange(e);
              console.log(e.target.value);
              setStartEntered(e.target.value ? true : false);
            }}
            // ref={startRef}
          />

          {!isCurrentlyWorking && (
            <PostInputWrapper
              name="end"
              type="date"
              variant="outlined"
              value={editedData.end}
              // value={end}
              onChange={(e) => {
                handleChange(e);
                setEndEntered(e.target.value ? true : false);
              }}
              // ref={endRef}

            />
          )}
          <FormControlLabel
            control={
              <Checkbox
                style={{ paddingLeft: 24 }}
                name="isCurrentlyWorking"
                checked={isCurrentlyWorking}   
                onChange={() => {
                  setIsCurrentlyWorking(!isCurrentlyWorking);
                }}
                inputRef={checkboxRef}
              />
            }
            label="Hala çalışıyorum"
          />
        </Calender>

        <PostInputWrapper
          name="employeeID"
          label="Personel Numarası"
          variant="outlined"
          value={editedData.employeeID}
          // value={employeeID}
          onChange={(e) => {
            handleChange(e);
            setEemployeeIDEntered(e.target.value ? true : false);
          }}
          // ref={employeeIDRef}
        />
        <PostInputWrapper
          name="appLetter"
          label="Onay Mektubu"
          variant="outlined"
          value={editedData.appLetter}
          onChange={(e) => {
            handleChange(e);
            setAppLetterEntered(e.target.value ? true : false);
          }}
          // ref={appLetterRef}
        />
      </DialogContent>

      <DialogActions>
        <EqualWidthButton
          onClick={() => onSave(editedData, currentCompanyEntered)}
          variant="contained"
          disabled={canSubmit}
        >
          Kaydet
        </EqualWidthButton>
        <EqualWidthButton onClick={handleCancel} variant="contained">
          İptal Et
        </EqualWidthButton>
      </DialogActions>
    </Dialog>
  );
};

export default AddIsGecmisi;

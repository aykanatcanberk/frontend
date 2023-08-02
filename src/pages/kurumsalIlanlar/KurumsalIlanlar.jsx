import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import BusinessIcon from "@mui/icons-material/Business";
import { blue } from "@mui/material/colors";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import CardContent from "@mui/joy/CardContent";
import Checkbox from "@mui/joy/Checkbox";
import Divider from "@mui/joy/Divider";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Typography from "@mui/joy/Typography";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import "./KurumsalIlanlar.css";
import { Link } from "react-router-dom";
import Advert from "../../components/Advert/Advert";
import db from "../../data/db.json";
import { addAdvert } from "../../services/advertService";

function KurumsalIlanlar() {
  const FormData = {
    advertName: "",
    companyName: "",
    jobStyle: [],
    jobTime: [],
    jobType: [],
    major: [],
    desc: "",
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const [formData, setFormData] = useState(FormData);
  const handleCheckboxChange = (event) => {
    const { name, value } = event.target;
    if (event.target.checked) {
      setFormData({
        ...formData,
        [name]: [...formData[name], value],
      });
    } else {
      setFormData({
        ...formData,
        [name]: formData[name].filter((item) => item !== value),
      });
    }
  };
 /* const fetchCompanyAdverts = () => {
    axios.get("https://localhost:7029/api/Advert/api/Advert/companypage")
      .then((response) => {
        console.log("Company Advertisements:", response.data);
        setCompanyAdvertisements(response.data);
      })
      .
      })
     
catch((error) => {
        console.error("Error fetching company advertisements:", error);
      });
  };

  useEffect(() => {
    fetchCompanyAdverts();
  }, []);

  const handleSubmit = () => {
    const newAdvert = {
      advertName: formData.advertName,
      desc: formData.desc,
      jobStyle: formData.jobStyle,
      jobTime: formData.jobTime,
      jobType: formData.jobType,
      major: formData.major,
      advertDate: new Date().toLocaleDateString(),
    };
  
    axios.post("https://localhost:7029/api/Advert", newAdvert) 
      .then((response) => {
        console.log("İlan başarıyla eklendi:", response.data);
      })
      .catch((error) => {
        console.error("İlan eklenirken bir hata oluştu:", error);
      });
  
    setFormData(FormData);
  };
  */
  const handleSubmit = () => {
    const newAdvert = {
      advertName: formData.advertName,
      desc: formData.desc,
      jobStyle: formData.jobStyle,
      jobTime: formData.jobTime,
      jobType: formData.jobType,
      major: formData.major,
      advertDate: new Date().toLocaleDateString(),
    };

    addAdvert(newAdvert)
      .then((response) => {
        console.log("İlan başarıyla eklendi:", response.data);
      })
      .catch((error) => {
        console.error("İlan eklenirken bir hata oluştu:", error);
      });
    setFormData(FormData);
  };
  return (
    <>
      <Grid
        container
        direction="column"
        marginTop={2}
        paddingLeft={80}
        alignItems="center"
        spacing={2}
      >
        <Grid item container alignItems="center" spacing={2}>
          <Grid item>
            <Avatar
              style={{ width: 55, height: 55, backgroundColor: blue[500] }}
            >
              <BusinessIcon />
            </Avatar>
          </Grid>
          <Grid item>
            <Box
              component="span"
              sx={{
                p: 1,
                border: 1,
                borderColor: "text.primary",
                boxShadow: 2,
              }}
            >
              <Link to="/kurumsal-profil">
                <Button>Profil</Button>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={0} sx={{ marginTop: "20px" }}>
        <Grid
          item
          lg={8}
          md={12}
          sx={{ paddingRight: "10px", paddingLeft: "40px" }}
        >
          <Typography
            level="h6"
            className="Typography"
            style={{ marginLeft: 120, marginTop: 10 }}
          >
            İlan Paylaş
          </Typography>
          <Card
            variant="outlined"
            sx={{
              maxHeight: "max-content",
              maxWidth: "80%",
              marginLeft: 14,
              marginTop: 5,
              overflow: "auto",
              resize: "horizontal",
            }}
          >
            <Typography level="h1" fontSize="xl">
              İlan Adı
              <Input
                name="advertName"
                value={formData.advertName}
                onChange={handleInputChange}
              />
            </Typography>
            <Divider inset="none" />
            <CardContent
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(150px, 1fr))",
                gap: 1.5,
              }}
            >
              <FormControl>
                <FormLabel>Çalışma Şekli</FormLabel>
                <Checkbox
                  label="Yüz Yüze"
                  name="jobStyle"
                  value="Yüz Yüze"
                  checked={formData.jobStyle.includes("Yüz Yüze")}
                  onChange={handleCheckboxChange}
                  sx={{ gridColumn: "1/-1", my: 1 }}
                />
                <Checkbox
                  label="Uzaktan"
                  name="jobStyle"
                  value="Uzaktan"
                  checked={formData.jobStyle.includes("Uzaktan")}
                  onChange={handleCheckboxChange}
                  sx={{ gridColumn: "1/-1", my: 1 }}
                />
                <Checkbox
                  label="Hibrit"
                  name="jobStyle"
                  value="Hibrit"
                  checked={formData.jobStyle.includes("Hibrit")}
                  onChange={handleCheckboxChange}
                  sx={{ gridColumn: "1/-1", my: 1 }}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Çalışma Tercihi</FormLabel>
                <Checkbox
                  label="Tam Zamanlı"
                  name="jobTime"
                  value="Tam Zamanlı"
                  checked={formData.jobTime.includes("Tam Zamanlı")}
                  onChange={handleCheckboxChange}
                  sx={{ gridColumn: "1/-1", my: 1 }}
                />
                <Checkbox
                  label="Yarı Zamanlı"
                  name="jobTime"
                  value="Yarı Zamanlı"
                  checked={formData.jobTime.includes("Yarı Zamanlı")}
                  onChange={handleCheckboxChange}
                  sx={{ gridColumn: "1/-1", my: 1 }}
                />
                <Checkbox
                  label="Proje Bazlı"
                  name="jobTime"
                  value="Proje Bazlı"
                  checked={formData.jobTime.includes("Proje Bazlı")}
                  onChange={handleCheckboxChange}
                  sx={{ gridColumn: "1/-1", my: 1 }}
                />
                <Checkbox
                  label="Serbest Zamanlı"
                  name="jobTime"
                  value="Serbest Zamanlı"
                  checked={formData.jobTime.includes("Serbest Zamanlı")}
                  onChange={handleCheckboxChange}
                  sx={{ gridColumn: "1/-1", my: 1 }}
                />
              </FormControl>
              <FormControl>
                <FormLabel>İlan Tipi</FormLabel>
                <Checkbox
                  label="Staj İlanı"
                  name="jobType"
                  value="Staj İlanı"
                  checked={formData.jobType.includes("Staj İlanı")}
                  onChange={handleCheckboxChange}
                  sx={{ gridColumn: "1/-1", my: 1 }}
                />
                <Checkbox
                  label="İş İlanı"
                  name="jobType"
                  value="İş İlanı"
                  checked={formData.jobType.includes("İş İlanı")}
                  onChange={handleCheckboxChange}
                  sx={{ gridColumn: "1/-1", my: 1 }}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Bölüm</FormLabel>
                <Checkbox
                  label="Bilgisayar Mühendisliği"
                  name="major"
                  value="Bilgisayar Mühendisliği"
                  checked={formData.major.includes("Bilgisayar Mühendisliği")}
                  onChange={handleCheckboxChange}
                  sx={{ gridColumn: "1/-1", my: 1 }}
                />
                <Checkbox
                  label="Elektrik-Elektronik Mühendisliği"
                  name="major"
                  value="Elektrik-Elektronik Mühendisliği"
                  checked={formData.major.includes(
                    "Elektrik-Elektronik Mühendisliği"
                  )}
                  onChange={handleCheckboxChange}
                  sx={{ gridColumn: "1/-1", my: 1 }}
                />
                <Checkbox
                  label="Endüstri Mühendisliği"
                  name="major"
                  value="Endüstri Mühendisliği"
                  checked={formData.major.includes("Endüstri Mühendisliği")}
                  onChange={handleCheckboxChange}
                  sx={{ gridColumn: "1/-1", my: 1 }}
                />
                <Checkbox
                  label="Makine Mühendisliği"
                  name="major"
                  value="Makine Mühendisliği"
                  checked={formData.major.includes("Makine Mühendisliği")}
                  onChange={handleCheckboxChange}
                  sx={{ gridColumn: "1/-1", my: 1 }}
                />
              </FormControl>
              <CardActions
                sx={{
                  gridColumn: "1/-1",
                  display: "flex",
                  flexDirection: "column",
                  width: "max-width",
                }}
              >
                <FormLabel>Gereklilikler</FormLabel>
                <TextareaAutosize
                  className="styled-textarea"
                  maxRows={20}
                  aria-label="maximum height"
                  placeholder=""
                  defaultValue=""
                  name="desc"
                  value={formData.desc}
                  onChange={handleInputChange}
                />
                <Button variant="solid" color="primary" onClick={handleSubmit}>
                  Paylaş
                </Button>
              </CardActions>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          item
          lg={4}
          md={12}
          sx={{
            paddingRight: "150px",
            "@media (max-width: 1280px)": {
              textAlign: "center",
              paddingRight: "5px",
            },
          }}
        >
          <Typography
            level="h6"
            className="Typography"
            style={{ marginLeft: 4, marginTop: 10 }}
          >
            Yayımlanmış İlanlar
          </Typography>
          <div style={{ marginTop: 20, marginRight: 20 }}>
            {db["kurumsal-ilanlar"].map((advert) => (
              <Advert key={advert.id} kurumsalİlanlarVerisi={advert} />
            ))}
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default KurumsalIlanlar;

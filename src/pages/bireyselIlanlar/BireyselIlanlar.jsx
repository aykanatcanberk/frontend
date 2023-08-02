import React, { useEffect, useState } from "react";
import axios from "axios";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/joy/Typography";
import İlan from "../../components/İlan/İlan";
import "./BireyselIlanlar.css";
import { getAdverts } from "../../services/advertService";

const jobOptions = [{ title: "Staj İlanı" }, { title: "İş İlanı" }];
const companies = [
  { title: "Aselsan" },
  { title: "Havelsan" },
  { title: "Roketsan" },
  { title: "TUSAŞ" },
  { title: "TR EĞİTİM VE TEKNOLOJİ A.Ş." },
];
const bolumler = [
  { title: "Bilgisayar Mühendisliği" },
  { title: "Elektrik-Elektronik Mühendisliği" },
  { title: "Endüstri Mühendisliği" },
  { title: "Makine Mühendisliği" },
];

function BireyselIlanlar() {
  const [data, setData] = useState([]);
  const [selectedJobs, setSelectedJobs] = useState([]);
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [selectedBolumler, setSelectedBolumler] = useState([]);
  const [selectedCalismaSekli, setSelectedCalismaSekli] = useState([]);
  const [selectedCalismaTercihi, setSelectedCalismaTercihi] = useState([]);

  useEffect(() => {
    getAdverts()
      .then((response) => {
        setData(response.data);
        console.log(data);
      })
      .catch((error) => {
        console.log("Hata alindi " + error);
      });
  }, []);

  const handleJobChange = (event, newValue) => {
    setSelectedJobs([...newValue]);
  };

  const handleCompanyChange = (event, newValue) => {
    setSelectedCompanies([...newValue]);
  };

  const handleBolumChange = (event, newValue) => {
    setSelectedBolumler([...newValue]);
  };

  const handleCalismaSekliChange = (event) => {
    const { value } = event.target;
    setSelectedCalismaSekli((prev) => {
      if (prev.includes(value)) {
        return prev.filter((item) => item !== value);
      } else {
        return [...prev, value];
      }
    });
  };

  const handleCalismaTercihiChange = (event) => {
    const { value } = event.target;
    setSelectedCalismaTercihi((prev) => {
      if (prev.includes(value)) {
        return prev.filter((item) => item !== value);
      } else {
        return [...prev, value];
      }
    });
  };

  const filteredData = data.filter((advert) => {
    const jobMatches =
      selectedJobs.length === 0 ||
      selectedJobs.some((job) => job.title === advert.jobType);
    const companyMatches =
      selectedCompanies.length === 0 ||
      selectedCompanies.some((company) => company.title === advert.companyName);

    const bolumMatches =
      selectedBolumler.length === 0 ||
      selectedBolumler.some((bolum) => advert.major.includes(bolum.title));

    const calismaSekliMatches =
      selectedCalismaSekli.length === 0 ||
      selectedCalismaSekli.some((calismaSekli) =>
        advert.jobStyle.includes(calismaSekli)
      );

    const calismaTercihiMatches =
      selectedCalismaTercihi.length === 0 ||
      selectedCalismaTercihi.some((tercih) => advert.jobTime.includes(tercih));

    return (
      jobMatches &&
      companyMatches &&
      bolumMatches &&
      calismaSekliMatches &&
      calismaTercihiMatches
    );
  });
 /* useEffect(() => {
  axios
      .get("https://localhost:7029/api/Advert/api/Advert/personpage") 
      .then((response) => {
        setData(response.data);
        console.log(data);
      })
      .catch((error) => {
        console.log("Hata alindi " + error);
      });
  }, []);*/

  return (
    <Grid container justifyContent="left">
      <Grid item xs={10} lg={3}>
        <Grid
          container
          direction="column"
          marginTop={6}
          marginLeft={3}
          alignItems="center"
          spacing={2}
        >
          <Stack spacing={3} sx={{ width: 250 }}>
            <Typography variant="body2" style={{ fontSize: "10px" }}>
              <Autocomplete
                multiple
                id="tags-outlined"
                options={jobOptions}
                value={selectedJobs}
                onChange={handleJobChange}
                getOptionLabel={(option) => option.title}
                filterSelectedOptions
                renderInput={(params) => (
                  <TextField {...params} label="Tüm İlanlar" />
                )}
              />
            </Typography>
          </Stack>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="column"
            marginTop={2}
            marginLeft={3}
            alignItems="center"
            spacing={2}
          >
            <Stack spacing={3} sx={{ width: 250 }}>
              <Typography variant="body2" style={{ fontSize: "10px" }}>
                <Autocomplete
                  multiple
                  id="tags-outlined"
                  options={companies}
                  value={selectedCompanies}
                  onChange={handleCompanyChange}
                  getOptionLabel={(option) => option.title}
                  filterSelectedOptions
                  renderInput={(params) => (
                    <TextField {...params} label="Tüm Firmalar" />
                  )}
                />
              </Typography>
            </Stack>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="column"
            marginTop={2}
            marginLeft={3}
            alignItems="center"
            spacing={2}
          >
            <Stack spacing={2} sx={{ width: 250 }}>
              <Typography variant="body2" style={{ fontSize: "10px" }}>
                <Autocomplete
                  multiple
                  id="tags-outlined"
                  options={bolumler}
                  value={selectedBolumler}
                  onChange={handleBolumChange}
                  getOptionLabel={(option) => option.title}
                  filterSelectedOptions
                  renderInput={(params) => (
                    <TextField {...params} label="Tüm Bölümler" />
                  )}
                />
              </Typography>
            </Stack>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="column"
            marginTop={2}
            marginLeft={3}
            alignItems="center"
            spacing={1}
          >
            <Box
              sx={{
                p: 1.5,
                border: 1,
                borderColor: "grey.500",
                borderRadius: 4,
                marginTop: 5,
                width: "220px",
              }}
            >
              Çalışma Şekli
            </Box>
            <FormControl sx={{ marginTop: 2, marginRight: 7 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleCalismaSekliChange}
                    value="Yüz Yüze"
                  />
                }
                label="Yüz Yüze"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleCalismaSekliChange}
                    value="Uzaktan"
                  />
                }
                label="Uzaktan"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleCalismaSekliChange}
                    value="Hibrit"
                  />
                }
                label="Hibrit"
              />
            </FormControl>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="column"
            marginTop={2}
            marginLeft={3}
            alignItems="center"
            spacing={1}
          >
            <Box
              sx={{
                p: 1.5,
                border: 1,
                borderColor: "grey.500",
                borderRadius: 4,
                marginTop: 5,
                width: "220px",
              }}
            >
              Çalışma Tercihi
            </Box>
            <FormControl sx={{ marginTop: 2 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleCalismaTercihiChange}
                    value="Tam Zamanlı"
                  />
                }
                label="Tam Zamanlı"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleCalismaTercihiChange}
                    value="Yarı Zamanlı"
                  />
                }
                label="Yarı Zamanlı"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleCalismaTercihiChange}
                    value="Proje Bazlı"
                  />
                }
                label="Proje Bazlı"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleCalismaTercihiChange}
                    value="Serbest Zamanlı"
                  />
                }
                label="Serbest Zamanlı"
              />
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} lg={9}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          marginTop={3}
          spacing={2}
        >
          {filteredData.map((advert, index) => (
            <Grid item key={advert.id} xs={12} sm={6}>
              <İlan advert={advert} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default BireyselIlanlar;

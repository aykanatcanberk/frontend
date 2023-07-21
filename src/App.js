import { Container } from "@mui/material";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import BasicCard from "./components/card-demo/BasicCard";
import BasicForm from "./components/form-demo/BasicForm";

function App() {
  return (
    <>
    <Navbar />
    <Container maxWidth="%80">
      <BasicForm />
      <BasicCard />

      </Container>
    </>
   );
}

export default App;

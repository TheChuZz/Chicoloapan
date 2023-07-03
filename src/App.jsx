import Navar from "./pages/Navar";
import Listas from "./pages/Listas";
import HomePage from "./pages/HomePage";
import FormularioPage from "./pages/FormularioPage";
import Registro from "./pages/Registro";
import Editar from "./pages/Editar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./pages/Admin";

function App() {
  return (
    <BrowserRouter>
      <Navar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/FormularioPage" element={<FormularioPage />} />
        <Route path="/Admin" element={<Admin/>}> </Route>
        <Route path="/Registro" element={<Registro />} />
        <Route path="/Listas" element={<Listas />} />
        <Route path="/Editar/:id" element={<Editar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

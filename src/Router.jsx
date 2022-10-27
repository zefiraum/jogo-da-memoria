import { Route, Routes} from "react-router-dom";
import { Cadastro } from "./components/pages/Cadastro";
import { Login } from "./components/pages/Login";
import { Game } from "./components/pages/Game";

export function Router() {
  return(
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/game" element={<Game />} />
    </Routes>
  );
}
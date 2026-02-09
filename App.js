import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import Notifications from "./pages/Notifications/Notifications";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  document.body.className = theme;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home theme={theme} setTheme={setTheme} />} />
        <Route
          path="/profile"
          element={<ProfilePage theme={theme} setTheme={setTheme} />}
        />
        <Route
          path="/notifications"
          element={<Notifications theme={theme} setTheme={setTheme} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

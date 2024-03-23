import "./App.css";
import MainPage from "./components/mainpage";
import { ThemeContextProvider } from "./context/themeContext";

function App() {
    return (
        <ThemeContextProvider>
            <MainPage />
        </ThemeContextProvider>
    );
}

export default App;

import "./App.css";
import Home from "./components/home";
import { ThemeContextProvider } from "./context/themeContext";

function App() {
    return (
        <ThemeContextProvider>
            <Home />
        </ThemeContextProvider>
    );
}

export default App;

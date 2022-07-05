import { ThemeProvider } from "@mui/system";
import { BrowserRouter } from "react-router-dom";
import { AppRouters } from "./routers";
import { lightThem } from "./shared/themes";

export const App = ()=>{
    return (
        <ThemeProvider  theme={lightThem}>
            <BrowserRouter>
                <AppRouters/>
            </BrowserRouter>
        </ThemeProvider>
    )
}
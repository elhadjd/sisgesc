import { Input } from "@mui/icons-material";
import { Button, InputBase } from "@mui/material";
import { Routes , Route, Navigate } from "react-router-dom";
export const AppRouters = ()=>{
    return (
        <Routes>
            <Route path="/pagina-inicial" element={<Button variant="contained" color="primary">TEST</Button> } / >


            <Route path="*" element={<Navigate to="pagina-inicial"/>} />
        </Routes>
    );
}
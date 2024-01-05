import { Routes, Route } from "react-router-dom";

import { Details, Form, Main } from "./pages";

export const App = () => {
    return (
        <Routes>
            <Route path="/*" element={<Main />}>
                <Route path="movie/form" element={<Form />} />
                <Route path="movie/:id" element={<Details />} />
            </Route>
        </Routes>
    );
};

export default App;

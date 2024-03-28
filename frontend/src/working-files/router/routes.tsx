import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import App from "../../app/Cms";
import FRONTEND_ROUTES from "../constants/frontend-routes.constants";
import StudentsPage from "../../pages/StudentsPage/StudentsPage";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path={FRONTEND_ROUTES.BASE} element={<App />}>
        <Route
            path={FRONTEND_ROUTES.BASE}
            element={<StudentsPage />}
        />
        <Route
            path={FRONTEND_ROUTES.PAGES.STUDENTS}
            element={<StudentsPage />}
        />
        <Route
            path={FRONTEND_ROUTES.PAGES.DASHBOARD}
            element={<StudentsPage />}
        />
    </Route>,
));

export default router;
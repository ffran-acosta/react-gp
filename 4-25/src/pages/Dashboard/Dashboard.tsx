
import { Navigate, Route } from "react-router-dom"
import { PrivateRoutes } from "../../model"
import { Home } from "./Home"

function Dashboard() {
    return (
        <>
            <Route path="/" element={<Navigate to={PrivateRoutes.PRIVATE} />} />
            <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
            <Route path={PrivateRoutes.HOME} element={<Home />} />
        </>
    )
}

export default Dashboard
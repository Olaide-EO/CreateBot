import Home from "../screens/home";
import Wizzard from "../screens/setupwizzard";


const homeRoutes = [
    {
        path: "/",
        component: Home,
      }
]

const setupWizzardRoutes = [
    {
        path: "/create-bot",
        component: Wizzard,
      }
]

export {
    homeRoutes,
    setupWizzardRoutes
}
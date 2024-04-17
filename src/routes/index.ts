import { Chat, Login } from "../components";
import { chatPage, loginPage } from "../constants";

export const publicRoutes = [
    {
        path:loginPage,
        component:Login
    },
]

export const privateRoutes = [
    {
        path:chatPage,
        component:Chat
    }
]
import { RootLayout } from "@app/layouts/root-layout"
import { Home } from "@app/pages/home"
import { createBrowserRouter } from "react-router-dom"

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [{ path: "/", element: <Home /> }],
  },
])

import { AuthLayout } from "./authLayout"
import { Test } from "./test"
import { createBrowserRouter } from "react-router-dom"

export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [{ path: "/", element: <Test /> }],
  },
])

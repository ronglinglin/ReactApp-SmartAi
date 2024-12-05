import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./routes/homepage/homepage.jsx";
import Dashboardpage from "./routes/dashboardpage/Dashboardpage.jsx";
import Chatpage from "./routes/chatpage/chatpage.jsx";
import Rootlayout from "./layout/rootlayout/rootlayout.jsx";
import DashboardLayout from "./layout/dashboardLayout/DashboardLayout.jsx";
import Signinpage from "./routes/signinpage/signinpage.jsx";
import Signoutpage from "./routes/signoutpage/signoutpage.jsx";

const router = createBrowserRouter(
  [
    {
      element: <Rootlayout />,
      children: [
        { path: "/", element: <Homepage /> },
        {
          path: "/sign-in/*",
          element: <Signinpage />,
        },
        {
          path: "/sign-up/*",
          element: <Signoutpage />,
        },
        {
          element: <DashboardLayout />,
          children: [
            { path: "/dashboard", element: <Dashboardpage /> },
            { path: "/dashboard/chats/:id", element: <Chatpage /> },
          ],
        },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_skipActionStatusRevalidation: true,
      v7_skipActionErrorRevalidation: true,
      v7_partialHydration: true,
    },
  }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider
      router={router}
      future={{
        v7_startTransition: true,
      }}
    />
  </React.StrictMode>
);

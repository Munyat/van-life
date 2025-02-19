import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "../server";
import Vans, { loader as vansLoader } from "./pages/vans/Vans";
import VanDetails, {
  loader as VanDetailsLoader,
} from "./pages/vans/VanDetails";
import Layout from "./Components/Layout";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostLayout from "./Components/HostLayout";
import HostVans, { loader as HostVansLoader } from "./pages/Host/HostVans";
import HostVansDetails, {
  loader as HostVanDetailsLoader,
} from "./pages/Host/HostVansDetails";
import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPricing from "./pages/Host/HostVanPricing";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import NotFoundPage from "./pages/NotFoundPage";
import Error from "./Components/Error";
import Login from "./pages/Login";
import {
  loader as LoginLoader,
  action as LoginAction,
} from "./loaders/loginLoader";
import { requireAuth } from "./utils";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        path="login"
        element={<Login />}
        loader={LoginLoader}
        action={LoginAction}
      />

      <Route
        path="vans"
        element={<Vans />}
        loader={vansLoader}
        errorElement={<Error />}
      />
      <Route
        path="vans/:id"
        element={<VanDetails />}
        loader={VanDetailsLoader}
        errorElement={<Error />}
      />

      <Route path="host" element={<HostLayout />}>
        <Route
          index
          element={<Dashboard />}
          loader={async ({ request }) => await requireAuth(request)} // Properly redirect unauthenticated users
          errorElement={<Error />}
        />
        <Route
          path="income"
          element={<Income />}
          loader={async ({ request }) => await requireAuth(request)}
        />
        <Route
          path="vans"
          element={<HostVans />}
          loader={HostVansLoader}
          errorElement={<Error />}
        />
        <Route
          path="vans/:id"
          element={<HostVansDetails />}
          loader={HostVanDetailsLoader}
          errorElement={<Error />}
        >
          <Route
            index
            element={<HostVanInfo />}
            loader={async ({ request }) => await requireAuth(request)}
          />
          <Route
            path="pricing"
            element={<HostVanPricing />}
            loader={async ({ request }) => await requireAuth(request)}
          />
          <Route
            path="photos"
            element={<HostVanPhotos />}
            loader={async ({ request }) => await requireAuth(request)}
          />
        </Route>
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async ({ request }) => await requireAuth(request)}
        />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

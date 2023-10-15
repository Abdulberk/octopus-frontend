import Sidebar from "./components/Sidebar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Tables from "./pages/Tables";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";

const Home = () => {
  return (
    <div className="font-sans font-bold text-[96px]">
      <h1>Home Home Home Home</h1>
    </div>
  );
};

const Billing = () => {
  return (
    <div className="font-sans font-bold text-[96px]">
      <h1>
        Billing Billing Billing Billing Billing Billing Billing Billing Billing
      </h1>
    </div>
  );
};

const RTL = () => {
  return (
    <div className="font-sans font-bold text-[96px]">
      <h1>RTL RTL RTL RTL</h1>
    </div>
  );
};

const User = () => {
  return (
    <div className="font-sans font-bold text-[96px]">
      <h1>User User User User</h1>
    </div>
  );
};

const Layout = () => {
  return (
    <div className="flex bg-[#F8F9FA] border">
      <div className="basis-[246.5px] h-screen ">
        <Sidebar />
      </div>
      <div className="basis-[1653.5px]  flex flex-col w-full gap-[13px]  mt-[22.5px]">
        <div className="flex flex-col w-full pl-[48.5px] pr-[47.5px]">
          <Navbar />
        </div>

        <div className="flex w-full h-full  pl-[32px] pt-[16px] pr-[22px] pb-[70px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="tables" element={<Tables />}>
            <Route path="my-table" element={<Tables />} />
          </Route>
          <Route path="billing" element={<Billing />} />
          <Route path="rtl" element={<RTL />} />
          <Route path="user" element={<User />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;

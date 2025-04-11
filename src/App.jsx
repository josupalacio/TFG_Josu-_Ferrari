import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import Dashboard from "./pages/Dashboard";
import ChatBot from "./pages/Chatbot";
import Schedule from "./pages/Schedule";
import Search from "./pages/Search";
import Analytics from "./pages/Analytics";
import Files from "./pages/Files";
import Settings from "./pages/Settings";
import MyAccount from "./pages/MyAccount";

const App = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "Chart_fill", path: "/" },
    { title: "ChatBot", src: "Chat", path: "/chatbot" },
    { title: "Schedule", src: "Calendar", path: "/schedule" },
    { title: "Search", src: "Search", path: "/search" },
    { title: "Analytics", src: "Chart", path: "/analytics" },
    { title: "Files", src: "Folder", gap: true, path: "/files" },
    { title: "Setting", src: "Setting", path: "/settings" },
    { title: "My Account", src: "User", gap: true, path: "/myaccount" },
  ];

  return (
    <Router>
      <div className="flex">
        <SideBar open={open} setOpen={setOpen} Menus={Menus} />
        <div className="h-screen flex-1 p-7">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/chatbot" element={<ChatBot />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/search" element={<Search />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/files" element={<Files />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/myaccount" element={<MyAccount />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
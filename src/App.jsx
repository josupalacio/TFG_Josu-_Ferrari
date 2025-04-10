import { useState } from "react";
import SideBar from "./components/SideBar";

const App = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "Chart_fill" },
    { title: "ChatBot", src: "Chat" },
    { title: "Schedule", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
    { title: "My Account", src: "User", gap: true },
  ];

  return (
    <div className="flex">
      <SideBar open={open} setOpen={setOpen} Menus={Menus} />
      <div className="h-screen flex-1 p-7">
        
      </div>
    </div>
  );
};

export default App;
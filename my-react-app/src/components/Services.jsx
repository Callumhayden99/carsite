import { useState } from "react";
import { Footer } from "./Footer";

export const Services = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false); // Start with sidebar closed

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {!isSidebarOpen && ( // Only show this button when the sidebar is closed
        <div onClick={toggleSidebar} className="open-filters-btn"> 
          Open Filters
        </div>
      )}
      <div className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
        <div onClick={toggleSidebar} className="close-sidebar-btn">
          Close
        </div>
      </div>
      <Footer />
    </>
  );
};

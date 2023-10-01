import Sidebar from "../components/Sidebar";

function Layout({ children }) {
  return (
    <div className="layout w-100 h-100">
      <Sidebar />

      <div className="main-content w-100 h-100">
        <div className="content w-100 h-100">{children}</div>
      </div>
    </div>
  );
}

export default Layout;

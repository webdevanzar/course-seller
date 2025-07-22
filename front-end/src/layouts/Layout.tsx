import { SideBar } from "../components/SideBar";
import { Outlet } from "react-router-dom";

const LayOut = () => {
  return (
    <div className="h-screen flex">
      <SideBar />
      <div className="flex flex-1 flex-col">
        <main className="flex-1 overflow-y-auto pt-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default LayOut;

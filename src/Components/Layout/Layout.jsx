import Sidebar from "../Slider/Slider";
import Header from "../Header/Header";
import TaskManager from "../TaskManagers/TaskManager";

const Layout = () => {
  return (
    <div className="w-screen h-screen relative">
      <Sidebar />
      <Header />
      <div className="md:pl-[250px] pl-[60px] pr-[20px] pt-[70px] w-full h-full overflow-y-auto">
        <TaskManager />
      </div>
    </div>
  );
};

export default Layout;

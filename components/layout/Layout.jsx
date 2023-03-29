import moment from "moment/moment";
import { BsSearch } from "react-icons/bs";
import SideBar from "../siadebar/SideBar";

const Layout = ({ children }) => {
  return (
    <div className="h-screen w-screen flex bg-black text-white">
    <SideBar />
      <div className="flex-1 h-full overflow-hidden relative z-0  ">
        <div className="absolute z-[-1] w-[250px] h-[250px] rounded-full bg-red-600 blur-[90px] top-[-50px] left-0"></div>
        <div className="absolute z-[-1] w-[250px] h-[250px] rounded-full bg-amber-600 blur-[90px] top-[-50px] left-[40%]"></div>
        <div className="absolute z-[-1] w-[250px] h-[250px] rounded-full bg-teal-500 blur-[90px] top-[-50px] right-0"></div>

        <div className="flex justify-between p-8 items-center">

          <span>{moment().format("dddd,Do MMM YYYY")}</span>

          <div className="flex gap-1  p-1 bg-gray-400  items-center border-2 border-gray-700 rounded-md w-[30%]">
            <BsSearch className="ml-4" />
            <input
              className="bg-transparent outline-none"
              placeholder="search..."
            />
          </div>

          <div className="flex gap-3 items-center">
<img src="/assets/avatar.webp" className="w-[50px] h-[50px] rounded-full object-cover border-2 border-teal-500"/>
<div>
<p>John Doe</p>
<p className="text-sm">John.doe@gmail.com</p>

</div>

          </div>

        </div>

        <main className="p-8">{children}</main>
      </div>
    </div>
  );
};

export default Layout;

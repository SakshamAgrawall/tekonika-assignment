import { NavLink } from "react-router-dom";
import { FaChevronDown, FaRegBell, FaRegQuestionCircle, FaRegUser } from "react-icons/fa";
import { RiLogoutBoxRLine } from "react-icons/ri";

const Header = () => {
  const navItems = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Patient Register", path: "/patient-register" },
    { label: "Patient Data", path: "#", hasDropdown: true },
    { label: "Operation Theater", path: "#", hasDropdown: true },
    { label: "Reports", path: "/reports" },
  ];

  return (
    <nav className="bg-white p-[31px_30px_31px_191px] w-full text-black z-60 shadow-md">
      <div className="flex justify-between h-full items-center">
        <ul className="flex h-full gap-[42px]">
          {navItems.map((item, index) => (
            <li key={index} className={`h-full ${item.hasDropdown ? "group relative" : ""}`}>
              {item.hasDropdown ? (
                <div className="flex items-center gap-2 cursor-pointer">
                  <span>{item.label}</span>
                  <FaChevronDown />
                </div>
              ) : (
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `hover:text-gray-500 pb-[30px] ${isActive ? "border-b-4 border-black" : "border-none"}`
                  }
                >
                  {item.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>

        <div className="flex justify-center gap-[26px] items-center">
          <FaRegQuestionCircle className="w-[18px] h-[18px]" />
          <FaRegBell className="w-[18px] h-[18px]" />
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center p-[15px] rounded-lg bg-[#C0C6AB] w-fit">
              <FaRegUser className="w-[18px] h-[18px] text-white" />
            </div>
            <div className="flex flex-col items-start">
              <span className="font-bold">Hardeep</span>
              <span>STAFF</span>
            </div>
          </div>
          <RiLogoutBoxRLine className="w-[18px] h-[18px]" />
        </div>
      </div>
    </nav>
  );
};

export default Header;
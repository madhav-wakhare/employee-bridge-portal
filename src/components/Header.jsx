
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-6 bg-white border-b">
      <Link to="/">
        <div className="flex items-center">
          <div className="h-8 w-8 bg-[#00ED64] rounded-full flex items-center justify-center mr-2">
            <span className="text-[#001E2B] text-lg font-bold">M</span>
          </div>
          <h1 className="text-2xl font-bold text-[#001E2B]">MongoDB.</h1>
        </div>
      </Link>
      <Link to="/create">
        <Button className="bg-white text-black border border-gray-300 hover:bg-gray-100">
          Create Employee
        </Button>
      </Link>
    </header>
  );
};

export default Header;


import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-6 bg-white border-b">
      <Link to="/">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/e4ddff2d-f12e-476d-933b-a2421f6088bb.png" 
            alt="MongoDB Logo" 
            className="h-8 w-auto mr-2" 
          />
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

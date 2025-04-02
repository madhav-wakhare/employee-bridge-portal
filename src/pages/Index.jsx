
import Header from "@/components/Header";
import EmployeeList from "@/components/EmployeeList";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <EmployeeList />
      </main>
    </div>
  );
};

export default Index;


import Header from "@/components/Header";
import CreateEmployeeForm from "@/components/CreateEmployeeForm";

const CreateEmployee = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <CreateEmployeeForm />
      </main>
    </div>
  );
};

export default CreateEmployee;

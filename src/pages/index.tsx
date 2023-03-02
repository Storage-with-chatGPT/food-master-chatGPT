import IngredientList from "@/components/ingredientList";
import IngredientSelect from "@/components/ingredientSelect";
import DeleteConfirm from "@/components/commons/DeleteConfirm";
const Home = () => {
  return (
    <div className="w-[600px] h-screen flex justify-center ">
      <div className="w-[550px] h-[650px] bg-white flex flex-col justify-center">
        <div className="bg-gray-200 w-full h-[300px] rounded-md p-4">
          <IngredientSelect />
        </div>
        <div className="w-full h-[400px] text-center">
          <IngredientList />
        </div>
      </div>
    </div>
  );
};

export default Home;

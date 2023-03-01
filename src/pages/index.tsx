import IngredientList from "@/components/ingredientList";
import IngredientSelect from "@/components/ingredientSelect";
import DeleteConfirm from "@/components/commons/DeleteConfirm";
const Home = () => {
  return (
    <div className="w-full h-screen flex justify-center ">
      <div className="w-[550px] h-screen bg-white flex flex-col justify-center my-0.5">
        <div className="bg-blue-300 w-full h-[300px] my-0.5">
          <IngredientSelect />
        </div>

        <div className="bg-red-300 w-full h-[400px] text-center my-0.5">
          <IngredientList />
        </div>
      </div>
    </div>
  );
};

export default Home;

import IngredientList from "@/components/IngredientList";

const Home = () => {
  return (
    <div className="w-full h-screen flex justify-center ">
      <div className="w-[640px] h-screen bg-white flex flex-col justify-center my-0.5">
        <div className="bg-blue-300 w-full h-2/6 my-0.5">Select Div</div>
        <div className="bg-red-300 w-full h-4/6 text-center my-0.5">
          <IngredientList />
        </div>
      </div>
    </div>
  );
};

export default Home;

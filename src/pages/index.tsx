import IngredientList from '@/components/ingredientList';
import IngredientSelect from '@/components/ingredientSelect';
import Header from '@/components/commons/Header';
import Footer from '@/components/commons/Footer';

const Home = () => {
  return (
    <div className="w-full h-[1050px] flex flex-col  items-center ">
      <div className="w-[550px] h-[650px] bg-white ">
        <Header />
        <div className="bg-gray-200 w-full h-[300px] rounded-md p-4">
          <IngredientSelect />
        </div>
        <div className="w-[560px] h-[400px] text-center">
          <IngredientList />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;

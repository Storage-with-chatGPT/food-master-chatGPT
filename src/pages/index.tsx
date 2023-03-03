import Footer from '@/components/commons/Footer';
import Header from '@/components/commons/Header';
import IngredientList from '@/components/ingredientList';
import IngredientSelect from '@/components/ingredientSelect';

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col  items-center ">
      <div className="w-[550px] h-full bg-white ">
        <Header />
        <div className="bg-gray-200 w-full h-[300px] rounded-md p-2">
          <IngredientSelect />
        </div>
        <div className="w-[560px] h-full text-center">
          <IngredientList />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;

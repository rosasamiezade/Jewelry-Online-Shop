import club from '../../images/banner6.jpg'
interface CustomerClubProps {}

const CustomerClub: React.FC<CustomerClubProps> = (): JSX.Element => {
  return (
    
        <div className="flex justify-center bg-gray-200 py-8"> 
          <div className="flex w-11/12 bg-gray-200 shadow-md"> 
          <div className="flex-1 flex items-center justify-center">
              <img src={club} alt="club" className="w-3/4 h-auto rounded-md" />
            </div>
            <div className="flex-1 p-8 flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-4">
                Enjoy benefits such as discounts, birthday, and various occasion offers
              </h2>
              <p className="text-lg mb-6">
                Continuing the joy of shopping for loyal Luna members is one of the
                main goals of the Luna Customer Club. Customers can accumulate points
                by joining, purchasing, and inviting friends, and enjoy our special
                offers and rewards. In this club, you can increase your points with
                every purchase, and the Luna Customer Club includes five levels, from
                one star to five stars.
              </p>
              <button className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black font-bold px-8 py-4 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                Luna Customer Club
              </button>
            </div>
            
          </div>
        </div>
  );
};

export default CustomerClub;

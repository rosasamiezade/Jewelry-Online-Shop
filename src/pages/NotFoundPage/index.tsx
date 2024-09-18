import { Link } from "react-router-dom";
interface INotFoundPageProps {}

const NotFoundPage: React.FC<INotFoundPageProps> = (): JSX.Element => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="mt-2 text-gray-600">صفحه‌ای که دنبال آن بودید پیدا نشد</p>
        <Link to={"/"}>
          <button className="mt-6 px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            برگرد به صفحه اصلی
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;

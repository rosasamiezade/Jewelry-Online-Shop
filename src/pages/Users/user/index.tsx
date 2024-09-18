interface IUserProps {
  id: string;
  phoneNumber: string;
  password: string;
}

const User: React.FC<IUserProps> = ({
  id,
  phoneNumber,
  password,
}): JSX.Element => {
  return (
<div className="p-4 bg-white rounded-lg shadow-md">
  <h1 className="text-2xl font-bold text-gray-800 mb-2">User ID: {id}</h1>
  <p className="text-gray-600 mb-1">Phone: {phoneNumber}</p>
  <p className="text-gray-600">Password: {password}</p>
</div>

  );
};

export default User;

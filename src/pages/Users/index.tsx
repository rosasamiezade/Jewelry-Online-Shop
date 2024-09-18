import { useQuery } from "@tanstack/react-query";
import User from "./user";
import api from "../../api";

interface IUsersProps {

}

interface Iusers{
    id:string;phoneNumber:string;password:string;
}
const Users: React.FC< IUsersProps> = (): JSX.Element => {

    const fetchUsers = async ():Promise<Iusers[]>=>{
try{
    const response=await api.get('users');
    return response.data
}
catch (err) {
    console.error("Error fetching messages:", err);
    return []; 
  }
    }

    const {data:usersData=[],isLoading,isError,error}=useQuery({
        queryKey:["users1"],
        queryFn:fetchUsers
    })
    if (isLoading) return <p  className="text-center text-gray-500">Loading...</p>; 
    if (isError) return <p  className="text-center text-gray-500">Error: {error?.message}</p>; 
    return ( 
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <ul className="space-y-4">
          {usersData?.map((userData) => (
            <li key={userData.id} className="bg-white p-4 rounded-lg shadow hover:bg-blue-50 transition duration-300 ease-in-out">
              <User {...userData} />
            </li>
          ))}
        </ul>
      </div>
    );
}
 
export default Users;



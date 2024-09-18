import { useQuery } from "@tanstack/react-query";
import api from "../../api";
import MessageComp from "./MessageComp";
interface IMessagesProps {

}
interface IMessage {
    id: string;
    name: string;
    phoneNumber: string;
    message: string;
  }
const Messages: React.FC<IMessagesProps> = (): JSX.Element => {
    
    const fetchMessages = async (): Promise<IMessage[]> => {
        try {
          const response = await api.get("/messages"); 
          return response.data; 
        } catch (err) {
          console.error("Error fetching messages:", err);
          return []; 
        }
      };

  const {data:userMessages=[],isLoading,isError,error} = useQuery({
    queryFn:fetchMessages,
    queryKey:["messages1"],
  })

  if (isLoading) return <p  className="text-center text-gray-500">Loading...</p>; 
  if (isError) return <p  className="text-center text-gray-500">Error: {error?.message}</p>; 
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-8">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">پیام ها </h1>
      <ul className="list-disc list-inside space-y-3">
        {
            userMessages?.map((userMessage)=>{
               return <MessageComp {...userMessage}/>
            })
        }
      </ul>
    </div>
  );
}


export default Messages;

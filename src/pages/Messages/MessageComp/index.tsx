interface IMessageCompProps {
    message:string;
    name:string;
    id:string;
    phoneNumber: string;
}
 
const MessageComp: React.FC<IMessageCompProps> = ({message,name,id,phoneNumber}): JSX.Element => {
    return ( 
        
                <li className="bg-gray-100 p-4 rounded-lg shadow-md hover:bg-gray-200 transition duration-150 ease-in-out">
                <strong className="text-blue-600">{name}</strong>:{" "}
            <span className="text-gray-700">{message}</span>
                </li>
    );
}
 
export default MessageComp;





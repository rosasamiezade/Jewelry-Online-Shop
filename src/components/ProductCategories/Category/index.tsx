interface CategoryProps {
    name:string
    bg:string
}
 
const Category:React.FC<CategoryProps> = ({name,bg}):JSX.Element => {
    return ( 
     <div style={{ backgroundImage:`url(${bg})`}}
     className="bg-cover bg-center h-64 w-40 flex justify-center items-end align-end p-4 transition-transform duration-300 ease-in-out hover:scale-105 rounded-lg">
        <p className="text-white text-center mt-2 font-bold">{name}</p>
     </div> 
    );
}
 
export default Category;
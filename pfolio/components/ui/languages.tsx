export default function Languages(){
    return(
        <div>
        
            <h3 className="text-md font-semibold mb-3">Languages</h3>

            <ul className="space-y-4 divide-y divide-white">   

            <li className="flex justify-between items-center">       
            <span className="text-sm">English</span>      
            <span className="text-sm text-gray-500">Native</span>        
            </li>
        
            <li className="flex justify-between items-center">        
            <span className="text-sm">Hindi</span>        
            <span className="text-sm text-gray-500">Fluent</span>        
            </li>
            
            <li className="flex justify-between items-center">        
            <span className="text-sm">Assamese</span>        
            <span className="text-sm text-gray-500">Native</span>        
            </li>

            <li className="flex justify-between items-center">        
            <span className="text-sm">Japanese</span>        
            <span className="text-sm text-gray-500">Beginner</span>        
            </li>
            
            </ul>
        
        </div>
    )
}
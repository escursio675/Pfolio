export default function Languages(){
    return(
        <div>
        
            <h3 className="text-lg font-semibold mb-3">Languages</h3>

            <ul className="space-y-2">   

            <li className="flex justify-between items-center">       
            <span>English</span>      
            <span className="text-sm text-gray-500">Native</span>        
            </li>
        
            <li className="flex justify-between items-center">        
            <span>Hindi</span>        
            <span className="text-sm text-gray-500">Fluent</span>        
            </li>
            
            <li className="flex justify-between items-center">        
            <span>Assamese</span>        
            <span className="text-sm text-gray-500">Native</span>        
            </li>
            
            <li className="flex justify-between items-center">        
            <span>Japanese</span>        
            <span className="text-sm text-gray-500">Beginner</span>        
            </li>
            
            </ul>
        
        </div>
    )
}
import NameReveal from "@/components/name-reveal"
import {intro} from "@/data/text"

export default function Home(){

  return(
    <>

      <NameReveal />

      <p className="xl:max-w-[43vw] max-w-full"> {intro}</p>
    
    

    </>
  )

}
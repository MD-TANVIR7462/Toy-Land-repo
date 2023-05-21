import { useEffect } from "react"

const useTiitle = title =>{
   useEffect(()=>{
      document.title = `${title} -Toy Land`
   },[title])
}
export default useTiitle
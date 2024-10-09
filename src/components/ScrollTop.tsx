import { useEffect } from "react"



export const ScrollTop = () => {

    // const pathname = useLocation();
    // useEffect(() => {
    //   window.scrollTo({
    //     top: 0,
    //     left: 0,
    //     behavior: 'instant'
    //   })
    // }, [pathname])
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [])
  
    return null;
}
  

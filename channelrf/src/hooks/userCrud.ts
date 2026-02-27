import useAxiosWithInterceptor from "../helpers/jwtInterceptor";
import { BASE_URL } from "../config";

const useCrud  = () => {
    const jwtAxios = useAxiosWithInterceptor();

    const fetchData = () => {
        // sending request using interceptor
    };
    
    return {fetchData}
    
}


export default useCrud
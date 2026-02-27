import useAxiosWithInterceptor from "../helpers/jwtInterceptor";
import { BASE_URL } from "../config";
import { useState } from "react";

interface IuseCrud<T> {
    dataCrud: T[];
    fetchData: () => Promise<void>;
    error: Error | null;
}


const useCrud  = <T>(initialData: T[], apiURL: string): IuseCrud<T> => {
    const jwtAxios = useAxiosWithInterceptor();
    const [dataCrud, setDataCrud] = useState<T[]>(initialData)
    const [error, setError] = useState<Error | null>(null)

    const fetchData = async () => {
        
        // sending request using interceptor
        try{
            const response = await jwtAxios.get('${BASE_URL}${apiURL}', {})
            const data = response.data
            setDataCrud(data)
            setError(null)
            
        }catch(error: any)
    };
    
    return {fetchData}
    
}


export default useCrud
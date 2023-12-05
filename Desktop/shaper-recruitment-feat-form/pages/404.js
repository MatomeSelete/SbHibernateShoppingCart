import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => { 
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            // router.go()
            router.push('./');
        }, 5000)
    }, [])

    return ( 
        <div className="not-found">
            <h1>Ooops...</h1>
            <h2> Page can not be found. </h2>
            <p>Go back to <Link href="/home"> Home </Link></p>
        </div>
     );
}
 
export default NotFound;
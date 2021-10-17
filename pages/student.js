import LoginComp from "../components/Login";
import Loading from "../components/UI/loading";
import { getSession } from 'next-auth/client'

import LoadingMask from "react-loadingmask";
import "react-loadingmask/dist/react-loadingmask.css";
import ProfileComp from "../components/Profile";

export default function Home(props) {
    const session=props.session
    return(


        <ProfileComp session={session}/>





    )
}

export async function getServerSideProps(context) {
    const session = await getSession(context)

    if(!session){
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        }
    }

    return {
        props: { session }
    }
}


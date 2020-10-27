import React, {useEffect} from "react";
import {useRouter}  from 'next/router';
import withPrivateRoute from 'components/route/privateRoute';

const Index = (props: any) => {
    const router = useRouter();

    useEffect(() => { 
        router.push('/appointment/history')
    }, []);
    return null;
  };

export default withPrivateRoute(Index)

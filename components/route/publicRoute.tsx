import React from "react";
import Router from "next/router";
import cookies from "next-cookies";

const checkUserAuthentication = (ctx: any) => {
  return { auth: cookies(ctx).bwccKey || null }; // change null to { isAdmin: true } for test it.
};

const publicRoute = (WrappedComponent: any) => {
  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />;

  hocComponent.getInitialProps = async (context) => {
    const userAuth = await checkUserAuthentication(context);

    // Are you an authorized user or not?
    if (userAuth?.auth) {
      // Handle server-side and client-side rendering.
      if (context.res) {
        context.res?.writeHead(302, {
          Location: '/home',
        });
        context.res?.end();
      } else {
        Router.replace('/home');
      }
    }
    return { userAuth };
  };

  return hocComponent;
};

export default publicRoute;

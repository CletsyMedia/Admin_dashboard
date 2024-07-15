export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, req }) {
      const isLoggedIn = auth?.user;
      const isOnDashboard = req.nextUrl.pathname.starsWith("/dashboard");
      if(isOnDashboard){
        if(isLoggedIn) return true;
        return false;
      }else if(isLoggedIn){
        return Response.redirect(new URL("/dashboard", req.nextUrl))
      }
      return true;
    },
  },
};

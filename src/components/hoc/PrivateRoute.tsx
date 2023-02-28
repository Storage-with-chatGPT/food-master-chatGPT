import { useRouter } from "next/router";
import React, { useEffect } from "react";

const PrivateRoute = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/");
  }, [router]);
  return <div></div>;
};

export default PrivateRoute;

import Spline from "@splinetool/react-spline";
// import { Application } from "@splinetool/runtime"; // Unused
import React, { Suspense } from "react";

// import NyanCat from "@/components/nyan-cat"; // Unused

const NotFoundPage = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Spline scene="/assets/404.spline" style={{ height: "100vh" }} />
      </Suspense>
    </>
  );
};

export default NotFoundPage;

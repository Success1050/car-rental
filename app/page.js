"use client";

import { useState } from "react";
import Sidebar from "./Layouts/Sidebar";
import MiddleLayout from "./Layouts/MiddleLayout";
import LargestLayout from "./Layouts/LargestLayout";

export default function Home() {
  const [isWidth, setisWidth] = useState(false);

  return (
    <>
      <section className="flex  w-full">
        {/* side bar */}
        <Sidebar isWidth={isWidth} setisWidth={setisWidth} />

        {/* second layout */}
        <MiddleLayout />

        {/* end/largest layout */}
        <LargestLayout />
      </section>
    </>
  );
}

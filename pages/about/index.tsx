import React, { useEffect, useState } from "react";

function About() {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 10);
  }, []);

  return (
    <>
      <div
        className={`flex h-full w-full justify-center items-center ${
          loading ? "" : " duration-1000  -translate-y-4"
        }`}
      >
        <img className="w-80 h-80 rounded-lg" src="/eht.png" />
      </div>
    </>
  );
}

export default About;

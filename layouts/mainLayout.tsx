import React from "react";
import Settings from "../components/setting";
import Header from "../components/header";

export default function MainLayout({ children }: any) {
  return (
    <>
      <div className="relative ">
        <Settings />
        <div className="flex flex-col h-screen  top-0 bottom-0 ">
          <div className="sticky z-50 top-0 bottom-0 ">
            <Header />
          </div>
          <main className="flex flex-1 h-full w-full flex-col text-primary">
            {children}
          </main>
          {/* <footer className="sticky flex h-12 w-full text-primary  top-0 bottom-0   ">
            footer
          </footer> */}
        </div>
      </div>
    </>
  );
}

import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  indexRoute,
  homeRoute,
  portfolioRoute,
  projectsRoute,
  contactRoute,
} from "../configs/routePaths";

const navigation = [
  { name: "Home", href: homeRoute },
  { name: "Portfolio", href: portfolioRoute },
  { name: "Projects", href: projectsRoute },
  { name: "Contact", href: contactRoute },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
const Header = () => {
  const router = useRouter();
  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <div className="bg-black">
          <div className="mx-auto pt-8 sm:w-10/12 md:w-3/4 px-2 sm:px-6 duration-500 ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex  sm:flex-1 flex-shrink-0 items-center">
                  <Link key={indexRoute} href={indexRoute}>
                    <div className="flex  w-auto h-auto bg-primary rounded-full p-3 lg:hidden justify-center items-center">
                      <img
                        className="h-6 w-6 "
                        src="/white_eh.png"
                        alt="Your Company"
                      />
                    </div>
                    <div className="hidden w-auto h-auto bg-primary rounded-full p-3 lg:flex justify-center items-center ">
                      <img
                        className="h-6 w-6"
                        src="/white_eh.png"
                        alt="Your Company"
                      />
                    </div>
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-2">
                    {navigation.map((item) => (
                      <Link
                        href={item.href}
                        key={item.name}
                        className={classNames(
                          router.pathname == item.href
                            ? "text-primary"
                            : "text-white hover:text-primary",
                          "duration-300 rounded-md px-2 md:px-3 py-2 text-base font-medium",
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href}>
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    className={classNames(
                      router.pathname == item.href
                        ? "text-primary bg-background"
                        : "text-white hover:text-primary hover:bg-background",
                      "block duration-300 rounded-md px-3 py-2 text-base font-medium",
                    )}
                    aria-current={
                      router.pathname == item.href ? "page" : undefined
                    }
                  >
                    {item.name}
                  </Disclosure.Button>
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
};

export default Header;

import { Disclosure } from "@headlessui/react";
import { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import backgroundImage from "./images/kelly-sikkema-paper-clean.jpg";

const navigation = [
  { name: "Portfolio", href: "/home", external: false },
  { name: "About", href: "/about", external: false },
  { name: "Exercises", href: "/exercises", external: false },
  { name: "Other work", href: "/otherWork", external: false },
  { name: "Contact", href: "mailto:info@automatin.nl", external: true },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [current, setCurrent] = useState(0);

  const changeCurrent = function (index) {
    setCurrent(navigation[index]);
  };

  return (
    <Disclosure
      as='nav'
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {({ open }) => (
        <>
          <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
            <div className='relative flex items-center justify-between h-16'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                {/* Mobile menu button*/}
                <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-white hover:text-grey-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? <XIcon className='block h-6 w-6' aria-hidden='true' /> : <MenuIcon className='block h-6 w-6' aria-hidden='true' />}
                </Disclosure.Button>
              </div>

              <div className='hidden sm:block sm:ml-6'>
                <div className='flex space-x-4'>
                  {navigation.map((item, index) => (
                    <div key={item.name}>
                      {item.external && (
                        <a
                          onClick={() => {
                            changeCurrent(navigation[index]);
                          }}
                          target='_blank'
                          rel='noreferrer'
                          className={classNames(
                            current ? "bg-grey-100 text-grey-900 hover:ring-2 hover:ring-grey-100" : "text-grey-100 hover:bg-grey-100 hover:text-grey-900",
                            "px-3 py-2 rounded-md text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                          href={item.href}
                        >
                          {item.name}
                        </a>
                      )}
                      {!item.external && (
                        <Link
                          onClick={() => {
                            changeCurrent(navigation[index]);
                          }}
                          to={item.href}
                          className={classNames(
                            current ? "bg-grey-100 text-grey-900 hover:ring-2 hover:ring-grey-100" : "text-grey-100 hover:bg-grey-100 hover:text-grey-900",
                            "px-3 py-2 rounded-md text-sm font-medium"
                          )}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {navigation.map((item, index) => (
                <div key={item.name}>
                  {item.external && (
                    <Disclosure.Button
                      as='a'
                      target='_blank'
                      rel='noreferrer'
                      onClick={() => {
                        changeCurrent(navigation[index]);
                      }}
                      href={item.href}
                      className={classNames(item.current ? "bg-gray-900 text-white" : "text-gray-100 hover:bg-gray-700 hover:text-white", "block px-3 py-2 rounded-md text-base font-medium")}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  )}
                  {!item.external && (
                    <Disclosure.Button>
                      <Link
                        onClick={() => {
                          changeCurrent(navigation[index]);
                        }}
                        to={item.href}
                        className={classNames(item.current ? "bg-gray-900 text-white" : "text-gray-100 hover:bg-gray-700 hover:text-white", "block px-3 py-2 rounded-md text-base font-medium")}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    </Disclosure.Button>
                  )}
                </div>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

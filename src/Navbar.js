import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";


const navigation = [
  { name: "Portfolio", href: "/github-pages/", current: true },
  { name: "Work", href: "https://www.projecten.automatin.nl", current: false },
  { name: "Contact", href: "mailto:info@automatin.nl", current: false },
  { name: "About", href: "https://patientje.nl/meerinfo.html", current: false },
];


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as='nav' className='bg-grey-900'>
      {({ open }) => (
        <>
          <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
            <div className='relative flex items-center justify-between h-16'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                {/* Mobile menu button*/}
                <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-grey-900 hover:text-grey-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? <XIcon className='block h-6 w-6' aria-hidden='true' /> : <MenuIcon className='block h-6 w-6' aria-hidden='true' />}
                </Disclosure.Button>
              </div>

              <div className='hidden sm:block sm:ml-6'>
                <div className='flex space-x-4'>
                  {navigation.map((item) => (
                    <div key={item.name}>
                      {item.name !== "About" && (
                        <a
                          href={item.href}
                          className={classNames(
                            item.current ? "bg-grey-100 text-grey-900 hover:ring-2 hover:ring-grey-100" : "text-grey-100 hover:bg-grey-100 hover:text-grey-900",
                            "px-3 py-2 rounded-md text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      )}
                      {item.name === "About" && (
                          <Link to='/about' className={classNames(
                            item.current ? "bg-grey-100 text-grey-900 hover:ring-2 hover:ring-grey-100" : "text-grey-100 hover:bg-grey-100 hover:text-grey-900",
                            "px-3 py-2 rounded-md text-sm font-medium"
                          )}>
                            About
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
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as='a'
                  href={item.href}
                  className={classNames(item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white", "block px-3 py-2 rounded-md text-base font-medium")}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

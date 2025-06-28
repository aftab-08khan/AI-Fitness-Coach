"use client";

import {
  HomeIcon,
  UserGroupIcon,
  Cog6ToothIcon,
  XMarkIcon,
  Bars3Icon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  BellIcon,
  ChevronDownIcon,
  DumbbellIcon,
  HeartPulseIcon,
  MedalIcon,
  Menu,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: HomeIcon },
  { name: "Workouts", href: "/dashboard/workouts", icon: DumbbellIcon },
  { name: "Nutrition", href: "/dashboard/nutrition", icon: HeartPulseIcon },
  { name: "Progress", href: "/dashboard/progress", icon: MedalIcon },
  { name: "Community", href: "/dashboard/community", icon: UserGroupIcon },
];

// function classNames(...classes: string[]) {
//   return classes.filter(Boolean).join(" ");
// }

const DashboardUI = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Mobile Sidebar */}
      <div className="lg:hidden">
        {sidebarOpen && (
          <div className="fixed inset-0 z-50 flex">
            <div className="w-64 bg-black  p-4 shadow-xl h-full">
              <div className="flex justify-between items-center mb-6">
                {/* <Image src={logo} alt="Logo" width={40} height={40} /> */}
                <button onClick={() => setSidebarOpen(false)}>
                  <XMarkIcon className="h-6 w-6 text-gray-700 dark:text-white" />
                </button>
              </div>
              <nav>
                <ul className="space-y-3">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        onClick={() => setSidebarOpen(false)}
                        className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-[--green-400] hover:bg-[--green-900] dark:hover:bg-[--green-light-500]"
                      >
                        <item.icon className="h-5 w-5" />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div
              className="flex-1 bg-black/50"
              onClick={() => setSidebarOpen(false)}
            />
          </div>
        )}
      </div>

      <div className="hidden lg:fixed lg:inset-y-0 lg:z-40 lg:w-64 lg:flex lg:flex-col dark:border-gray-700 bg-[#000]">
        <div className="h-16 flex items-center px-6">
          {/* <Image src={logo} alt="Logo" width={40} height={40} /> */}
        </div>
        <nav className="flex-1 overflow-y-auto px-6 py-4">
          <ul className="space-y-3">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-[--green-400] hover:bg-[--green-900] dark:hover:bg-[--green-light-500]"
                >
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="px-6 py-4">
          <Link
            href="/dashboard/settings"
            className="flex items-center px-3 py-2 gap-3 text-sm font-medium text-[--green-400] hover:bg-[--green-900] dark:hover:bg-[--green-light-500]"
          >
            <Cog6ToothIcon className="h-5 w-5" />
            Settings
          </Link>
        </div>
      </div>

      <div className="lg:pl-64 min-h-screen bg-[#020401ec] dark:bg-gray-800">
        <div className="lg:hidden flex items-center justify-between p-4 bg-[#020401ec] dark:bg-gray-900 shadow">
          <button onClick={() => setSidebarOpen(true)}>
            <Bars3Icon className="h-6 w-6 text-gray-800 dark:text-white" />
          </button>
          {/* <Image src={logo} alt="Logo" width={32} height={32} /> */}
        </div>
        <div aria-hidden="true" className="h-6 w-px bg-gray-900/10 lg:hidden" />

        <div className="flex items-end justify-end p-4 gap-x-4 self-stretch lg:gap-x-6 bg-[#000]">
          <div className="flex items-end gap-x-4 lg:gap-x-6">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="h-6 w-6" />
            </button>

            <div
              aria-hidden="true"
              className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
            />
          </div>
        </div>

        <main className="p-6 bg-[#020401ec] h-screen">{children}</main>
      </div>
    </>
  );
};

export default DashboardUI;

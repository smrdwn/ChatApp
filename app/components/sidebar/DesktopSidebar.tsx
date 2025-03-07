'use client';

import useRoutes from "@/app/hooks/useRoutes";
import { useState } from "react";
import DesktopItem from "./DesktopItem";

const DesktopSidebar = () => {
  const routes = useRoutes();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="
        hidden
        lg:fixed
        lg:inset-0
        lg:left-0
        lg:z-40
        lg:w-20
        xl:px-6
        lg:overflow-y-auto
        lg:bg-white
        lg:border-r-[1px]
        lg:pb-4
        lg:flex
        lg:flex-col
        justify-between
      "
    >
      <nav 
        className="
          mt-4
          flex
          flex-col
          justify-between
        "
      >
        <ul
          role="list"
          className="
            flex
            flex-col
            items-center
            space-y-1
          "
        >
          {routes.map((items) => (
            <DesktopItem 
              key={items.label}
              href={items.href}
              label={items.label}
              icon={items.icon}
              active={items.active}
              onClick={items.onClick}
            />
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default DesktopSidebar

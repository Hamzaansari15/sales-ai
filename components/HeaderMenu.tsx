import { Dropdown } from "antd";
import Image from "next/image";
import type { MenuProps } from "antd";

const items: MenuProps["items"] = [
  {
    label: (
      <a
        href="https://www.antgroup.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        1st menu item
      </a>
    ),
    key: "0",
  },
  {
    label: (
      <a
        href="https://www.aliyun.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        2nd menu item
      </a>
    ),
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: "3rd menu item",
    key: "3",
  },
];

const HeaderMenu = () => {
  return (
    <div className="flex items-center gap-4">
      <Dropdown
        className="sm:w-44 w-10 flex justify-center"
        menu={{ items }}
        trigger={["click"]}
      >
        <div>
          <div className="flex h-10 justify-center rounded-full bg-[#E8E8E8] border-[1px] border-[#E8E8E8] w-full items-center gap-2 cursor-pointer">
            <Image
              width={24}
              height={24}
              src="/images/notification.svg"
              alt="Notification"
            />
            <p className="sm:inline hidden">Notification</p>
            <Image
              className="sm:inline hidden"
              width={20}
              height={20}
              src="/images/arrow-down.svg"
              alt="Notification"
            />
          </div>
        </div>
      </Dropdown>
      <Image
        width={32}
        height={32}
        src="/images/profile-circle.svg"
        alt="Profiles"
      />
    </div>
  );
};

export default HeaderMenu;

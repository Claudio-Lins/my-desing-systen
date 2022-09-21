import {
  Atom,
  Activity,
  CloudArrowDown,
  AddressBook,
  AppleLogo,
  PuzzlePiece,
} from "phosphor-react";
import Image  from "next/image";


export const Menus = [
  {
    title: "Profile",
    icon: <Image src="/claudioLins.jpg" alt='' width={30} height={30} className='rounded-full' />,
  },
  {
    title: "Pages",
    icon: <AddressBook size={28} color="#ffffff" weight="light" />,
  },
  {
    title: "Components",
    icon: <PuzzlePiece size={28} color="#ffffff" weight="light" />,
    submenu: true,
    submenuItems: [
      {
        title: "Calling ",
        icon: <Activity size={26} color="#ffffff" weight="light" />,
        link: '/components/calling-animation'
      },
    ],
  },
  { title: "Forms" },
];

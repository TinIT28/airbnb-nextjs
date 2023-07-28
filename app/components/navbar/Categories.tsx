"use client";

import React from "react";
import Container from "../Container";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineVilla } from "react-icons/md";
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This is property is close to the beach!",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "This is property is has windmills",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This is property is modern",
  },
  {
    label: "Countryside",
    icon: TbMountain,
    description: "This is property is in the countryside!",
  },
  {
    label: "Pools",
    icon: TbPool,
    description: "This is property has a pool!",
  },
  {
    label: "Islands",
    icon: GiIsland,
    description: "This is property on an island!",
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
    description: "This is property is close to a lake!",
  },
  {
    label: "Skiing",
    icon: FaSkiing,
    description: "This is property has skiing activities!",
  },
  {
    label: "Castles",
    icon: GiCastle,
    description: "This is property is in a castle",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "This is property has camping activities!",
  },
  {
    label: "Arctic",
    icon: BsSnow,
    description: "This is property has a pool!",
  },
  {
    label: "Cave",
    icon: GiCaveEntrance,
    description: "This is property is in a cave!",
  },
  {
    label: "Desert",
    icon: GiCactus,
    description: "This is property is in the desert!",
  },
  {
    label: "Barns",
    icon: GiBarn,
    description: "This is property is in the barn!",
  },
  {
    label: "Lux",
    icon: IoDiamond,
    description: "This is property is luxurious!",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();

  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            description={item.description}
            selected={category === item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;

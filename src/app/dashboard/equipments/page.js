import CustomHeading from "@/app/components/CustomHeading";
import { CustomHoverCard } from "@/app/components/CustomHoverCard";
import React from "react";
import { EquipmentsData } from "../../../../data/data";
const Equipments = () => {
  return (
    <div className="h-full w-full overflow-scroll p-4 scrollbar-hide">
      <CustomHeading>Equipments</CustomHeading>

      <div className="mt-6 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 h-full">
        {EquipmentsData?.map((item) => (
          <CustomHoverCard
            key={item.name}
            title={item.name}
            imgSrc={item.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Equipments;

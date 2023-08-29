import React from "react";
import { DocumentData } from "firebase/firestore";
import PinItem from "./PinItem";

interface PinListProps {
  listOfPins: DocumentData[];
}

const PinList: React.FC<PinListProps> = ({ listOfPins }) => {
  return (
    <div
      className="mt-7 px-2 md:px-5
     columns-2 md:columns-3
     lg:columns-4 mb-4
     xl:columns-5 space-y-6 mx-auto"
    >
      {listOfPins.map((item, index) => (
        <PinItem item={item} />
      ))}
    </div>
  );
};

export default PinList;

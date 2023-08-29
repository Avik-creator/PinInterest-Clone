import React, { useState } from "react";
import { HiArrowUpCircle } from "react-icons/hi2";

interface FileObject {
  lastModified: number;
  lastModifiedDate: Date;
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
}

interface UploadImageProps {
  setFile: (file: File) => void;
}

function UploadImage({ setFile }: UploadImageProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  return (
    <div
      className="h-[450px] bg-[#e9e9e9]
    rounded-lg"
    >
      <label
        className="m-5 flex flex-col justify-center items-center
        cursor-pointer h-[90%] 
        border-[2px] border-gray-300 border-dashed rounded-lg text-gray-600 "
      >
        {!selectedFile ? (
          <div className="flex items-center flex-col">
            <HiArrowUpCircle className="text-[22px]" />
            <h2 className=" font-semibold">Click to Upload</h2>
          </div>
        ) : null}
        {selectedFile ? (
          <img
            src={window.URL.createObjectURL(selectedFile)}
            alt="selected-image"
            width={500}
            height={800}
            className="object-contain h-[90%]"
          />
        ) : null}
        <input
          id="dropzone-file"
          type="file"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0]; // Use optional chaining here
            console.log(file); // Logging the selected file
            if (file) {
              setFile(file);
              setSelectedFile(file);
            }
          }}
        />
      </label>
    </div>
  );
}

export default UploadImage;

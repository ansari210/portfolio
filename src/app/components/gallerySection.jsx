"use client";
import React, { useState, useRef } from "react";
import ImageGallery from "./model";
import {gallerydata} from "../../data";
import ProjectTag from "./ProjectTag";



const GallerySection = () => {
  const [tag, setTag] = useState("EpicGlobal");
  const ref = useRef(null);
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };


  return (
    <section id="gallery">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Gallery
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
      {gallerydata?.map((item)=>{
          return(
            <>
            <ProjectTag
            onClick={handleTagChange}
            name={item?.company}
            isSelected={tag === item?.company}
          />
            </>
          )
        })}
   </div>
      <ul ref={ref} className="w-100">
      <ImageGallery images={gallerydata?.[0].epicglobal} />
      </ul>
    
    </section>
  );
};

export default GallerySection;

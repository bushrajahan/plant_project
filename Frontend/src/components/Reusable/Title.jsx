
import React from 'react';

/**
 * Reusable Section Title Component for React + Tailwind CSS.
 * Visually matches the style of a large, bold title with a bottom divider.
 *
 * @param {object} props - Component properties.
 * @param {string} props.text - The main text of the title (e.g., "New Arrivals").
 * @param {string} [props.imageSrc] - Optional: Source URL for an image/icon to display next to the title.
 * @param {string} [props.imageAlt] - Optional: Alt text for the image.
 * @param {string} [props.className] - Optional: Custom Tailwind classes for the container.
 */

const Title = ({
    text,
    imageSrc,
    imageAlt = 'Title icon',
    className = '',
})=>{
    return (
        //Container:Sets up the flex alignment and the bottom divide styles
        <div className={
            `flex items-center sapce-x-3 pb-2 mb-6 border-b border-gray-200 ${className}`
        }>
       {/* optional image icon      */}
        {imageSrc && (
        <img 
          src={imageSrc} 
          alt={imageAlt} 
          // Sets a height that looks good next to the title text
          className="h-8 w-auto object-contain" 
        />
      )}
      {/* Title text: The text 3xl nd font bold */}
       <h2 
        className="text-3xl font-bold text-gray-900 tracking-tight"
       >{text}</h2>

        </div>
    )
};

export default Title;
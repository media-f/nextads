import React from 'react';

/**
 * Adslot component for displaying advertisements
 * @param {Object} props - Component props
 * @param {string} props.prefix - Prefix for the ad unit (e.g. 'LG', 'LB')
 * @param {string} props.name - Name of the ad slot (e.g. 'wideboard_1', 'rectangle_1')
 * @param {React.ReactNode} [props.children] - Optional children to display (like a title)
 * @returns {JSX.Element} Adslot component
 */
export default function Adslot({ prefix, name, children }) {
  const id = `${prefix}_${name}`;
  const typeClass = name.split('_')[0]; // Extract type from name (wideboard, rectangle, halfpage)
  
  return (
    <>
      {children && children}
      <div
        id={id}
        className={`adslot adslot__${prefix} ${typeClass}`}
      ></div>
    </>
  );
}

import React from 'react';

export interface DropdownProps {
  label: string;
}

/**
 * Primary UI component for user interaction
 */
export const Dropdown: React.FC<DropdownProps> = ({ label }) => {
  return <button>{label}</button>
};

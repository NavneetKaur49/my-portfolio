import React, { forwardRef } from "react";

const base =
  "inline-flex items-center justify-center font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition";

const sizeMap = {
  sm: "px-3 py-1 text-sm rounded-md",
  md: "px-4 py-2 text-sm rounded-md",
  lg: "px-6 py-3 text-base rounded-lg",
  icon: "p-2 rounded-full",
};

const variantMap = {
  solid: "bg-purple-600 text-white hover:bg-purple-700",
  outline:
    "border border-purple-600 text-purple-600 hover:bg-purple-50 dark:hover:bg-gray-800",
  ghost: "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800",
};

export const Button = forwardRef(
  ({ variant = "solid", size = "md", className = "", ...props }, ref) => (
    <button
      ref={ref}
      className={`${base} ${sizeMap[size]} ${variantMap[variant]} ${className}`}
      {...props}
    />
  ),
);

export default Button;

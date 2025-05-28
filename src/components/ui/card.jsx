import React, { forwardRef } from "react";

/* Card - the outer wrapper */
export const Card = forwardRef(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`rounded-2xl border bg-white dark:bg-gray-800 shadow ${className}`}
    {...props}
  />
));

/* CardHeader – usually a title area */
export const CardHeader = forwardRef(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`p-4 border-b dark:border-gray-700 ${className}`}
    {...props}
  />
));

/* CardContent – body area */
export const CardContent = forwardRef(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`p-4 ${className}`} {...props} />
));

/* default export so you can also write: import Card from "@/components/ui/card" */
export default Card;

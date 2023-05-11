import React from "react";
export default function Loading({ isLoading, children }) {
  if (isLoading) {
    return <div className="flex justify-center">Loading</div>;
  } else {
    return <>{children}</>;
  }
}

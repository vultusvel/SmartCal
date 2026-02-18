"use client";

import { useEffect } from "react";

export function MswProvider() {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      import("./browser").then(({ worker }) => {
        worker.start();
      });
    }
  }, []);

  return null;
}

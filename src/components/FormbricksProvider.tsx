
import React, { useEffect } from "react";
import formbricks from "@formbricks/js";

const FormbricksProvider: React.FC = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      formbricks.setup({
        environmentId: "cma4hn9ik10l2yp013vzcy3gv",
        appUrl: "https://app.formbricks.com",
      });
    }
  }, []);

  // Removing the floating button - this component will only initialize Formbricks
  return null;
};

export default FormbricksProvider;

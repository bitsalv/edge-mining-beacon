
import React, { useEffect } from "react";
import formbricks from "@formbricks/js";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";

const FormbricksProvider: React.FC = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      formbricks.setup({
        environmentId: "cma4hn9ik10l2yp013vzcy3gv",
        appUrl: "https://app.formbricks.com",
      });
    }
  }, []);

  const openSurvey = () => {
    window.open("https://app.formbricks.com/s/cma4k1hfj0jn7vw019sizlnio", "_blank");
  };

  // We're adding a floating button to access the survey
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button 
        onClick={openSurvey}
        className="bg-accent hover:bg-accent/80 text-white font-medium flex items-center gap-2 shadow-lg"
      >
        <ExternalLink size={16} />
        <span>Survey</span>
      </Button>
    </div>
  );
};

export default FormbricksProvider;

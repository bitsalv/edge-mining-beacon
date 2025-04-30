
import React, { useEffect } from 'react';

declare global {
  interface Window {
    formbricks: any;
  }
}

const FormbricksProvider: React.FC = () => {
  useEffect(() => {
    // Initialize Formbricks when component mounts
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://app.formbricks.com/js/formbricks.umd.cjs';
    
    script.onload = () => {
      if (window.formbricks) {
        window.formbricks.setup({
          environmentId: 'cma4hn9ik10l2yp013vzcy3gv',
          appUrl: 'https://app.formbricks.com'
        });
      } else {
        console.error('Formbricks library failed to load properly. The formbricks object is not available.');
      }
    };
    
    const scriptElement = document.getElementsByTagName('script')[0];
    scriptElement.parentNode?.insertBefore(script, scriptElement);
    
    return () => {
      // Clean up script if component unmounts
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);
  
  return null;
};

export default FormbricksProvider;

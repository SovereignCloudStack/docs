import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import config from "../helpers/klaro.config";
import React from "react";

declare global {
  interface Window {
    klaro: any;
    klaroConfig: any;
  }
}

const ConsentManager = () => {
  const [klaroConsents, setKlaroConsents] = useState({
    markprompt: false,
  });

  const loadKlaro = async () => {
    if (typeof window !== "undefined" && window.klaro === undefined) {
      const Klaro = await import("klaro/dist/klaro-no-css");
      window.klaro = await Klaro;
      window.klaroConfig = config;

      Klaro.setup(config);

      updateKlaroConsents();
      document.getElementById("klaro").addEventListener("click", () => {
        updateKlaroConsents();
      });
    }
  };

  useEffect(() => {
    loadKlaro();
  }, []);

  function updateKlaroConsents() {
    if (Cookies.get("klaro") !== undefined) {
      const cookie = JSON.parse(Cookies.get("klaro"));
      const consents = {
        markprompt: cookie.markprompt,
      };
      setKlaroConsents(consents);
    }
  }

  return <div></div>;
};

export default ConsentManager;

export const useConsentManager = (klaro) => {
  const handleShow = () => {
    klaro.show();
  };
  return {
    show: handleShow,
  };
};

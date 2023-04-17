import { useEffect, useState } from "react";
import Cookies from "js-cookie";
// import * as Matomo from '@socialgouv/matomo-next'
import config from "../helpers/klaro.config";
import React from "react";

declare global {
    interface Window {
        klaro: any;
        klaroConfig: any;
    }
}

export const useConsentManager = () => {
    const handleShow = () => {
        config.show();
    };
    return {
        show: handleShow,
    };
};

export const useAwaitLoaded = (evaluate) => {
    const [result, setResult] = useState(evaluate());
    useEffect(() => {
        if (typeof window === "undefined" || result !== undefined) return;
        const timerId = window.setInterval(() => {
            const _result = evaluate();
            if (_result !== undefined) {
                setResult(_result);
                clearInterval(timerId);
            }
        }, 500);

        return () => window.clearInterval(timerId);
    }, []);

    return result;
};

// const useMatomo = (props) => {
//     if (
//         typeof window !== "undefined" &&
//         typeof props.setMatomoIsSetup === "function"
//     ) {
//         if (Cookies.get("scs-dnt") === undefined) {
//             Matomo.init({
//                 url: "https://scs.matomo.cloud",
//                 siteId: "1",
//             });
//             Matomo.push(["requireCookieConsent"]);
//         }
//         props.setMatomoIsSetup(true);
//     }
// };

// const setMatomoCookieConsent = (props) => {
//     if (props) {
//         Matomo.push(["rememberCookieConsentGiven"]);
//     } else {
//         Matomo.push(["forgetCookieConsentGiven"]);
//     }
// };

const ConsentManager = () => {
    const [klaroConsents, setKlaroConsents] = useState({
        matomo: false,
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
                matomo: cookie.matomo,
                markprompt: cookie.markprompt
            };
            setKlaroConsents(consents);
        }
    }

    return <div></div>;

    // Dealing with Matomo
    // const [matomoIsSetUp, setMatomoIsSetup] = useState(false);

    // useEffect(() => {
    //     if (!matomoIsSetUp) useMatomo({ setMatomoIsSetup });
    // });

    // useEffect(() => {
    //     setMatomoCookieConsent(klaroConsents.matomo);
    // }, [klaroConsents]);
};

export default ConsentManager;

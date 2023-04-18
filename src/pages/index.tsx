import React, { useState } from "react";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import Markprompt from "../components/Markprompt";
import ConsentManager from "../components/ConsentManager";
import { MarkpromptIcon } from "../components/icons/markprompt";

export default function Home(): JSX.Element {
    return (
        <Layout description="Documentation and Community Platform for the Sovereign Cloud Stack">
            <main>
                <div className="relative isolate px-6 lg:px-8">
                    <div
                        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                        aria-hidden="true"
                    >
                        <div
                            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#276fe4] to-[#50C3A5] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                            }}
                        />
                    </div>
                    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 dark:text-gray-300 ring-1 ring-gray-900/10 dark:ring-gray-300/10 hover:ring-gray-900/20 dark:hover:ring-gray-300/20">
                                Announcing our next summit in Berlin on May 23rd{" "}
                                <a
                                    href="https://scs.community/summit/"
                                    className="font-semibold text-indigo-600"
                                >
                                    <span
                                        className="absolute inset-0"
                                        aria-hidden="true"
                                    />
                                    <span aria-hidden="true"></span>
                                </a>
                            </div>
                        </div>
                        <div className="text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-300 sm:text-6xl">
                                SCS: The Cloud Stack you always wanted
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                                The Sovereign Cloud Stack combines the best of
                                cloud computing in one unified standard and is
                                built, backed, and operated by an active
                                open-source community worldwide.
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <a
                                    href="/docs"
                                    className="rounded-md bg-white border-solid text-blue-600 border-blue-600 px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-blue-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-gray-900 dark:hover:bg-blue-600 border-solid"
                                >
                                    Get Started
                                </a>
                                <a
                                    href="https://scs.community"
                                    className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-300"
                                >
                                    Learn more <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>
                        <div data-name="markprompt">
                            <div className="flex h-[calc(100vh-260px)] w-full flex-col items-center justify-center sm:px2 lg:px-8">
                                <div className="mt-16 md:mt-0 lg:mt-0 max-h-[480px] w-full max-w-[720px] flex-grow rounded-xl bg-gray-1100 dark:bg-neutral-900 p-8 shadow-2xl">
                                    <Markprompt
                                        placeholder="Ask me anything about SCS..."
                                        projectKey="sk_test_AK8xpktAgXbHZwmRKaIIHafDiv2tdaRl"
                                    />
                                    <a
                                        href="https://markprompt.com/"
                                        target="_blank"
                                    >
                                        <div className="float-right flex">
                                            <p className="text-sm text-gray-600 dark:text-gray-300 m-0 mr-1">
                                                powered by{" "}
                                            </p>
                                            <MarkpromptIcon className="w-5 m-auto dark:fill-gray-100 fill-gray-800" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(-10%)]"
                        aria-hidden="true"
                    >
                        <div
                            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#276fe4] to-[#50C3A5] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                            }}
                        />
                    </div>
                </div>
            </main>
            <ConsentManager />
        </Layout>
    );
}

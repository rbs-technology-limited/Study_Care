"use client";
import { tabs } from "@/Content";
import parse from "html-react-parser";
import { useState } from "react";
import QuizBox from "./QuizBox/QuizBox";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <section className="my-8">
      <div className="text-dark w-full flex flex-col md:flex-row justify-between items-center">
        {tabs.map((tab) => (
          <div
            className={`w-full text-center cursor-pointer border-b shadow-lg md:shadow-none mb-2 md:mb-0  ${
              activeTab === tab.id
                ? "text-button-teal border-b-button-teal"
                : "text-gray-600 dark:text-white"
            }`}
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      {tabs.map((tab) =>
        activeTab === tab.id ? (
          <div
            className="p-2 my-6 w-full bg-gray-50 dark:bg-transparent h-max"
            key={tab.id}
          >
            {/* {tab?.label === "ভিডিও ডেসক্রিপশন" ? (
              <div dangerouslySetInnerHTML={{ __html: tab.content }}></div>
            ) : (
              tab.content
            )} */}
            {
              tab?.label === "ভিডিও ডেসক্রিপশন" && parse(tab.content)
              //   : tab.content
            }
            {tab?.label === "কুইজ" && <QuizBox data={tab} />}
          </div>
        ) : null
      )}
    </section>
  );
};

export default Tabs;

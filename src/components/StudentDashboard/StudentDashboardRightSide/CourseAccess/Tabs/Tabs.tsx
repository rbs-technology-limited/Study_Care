"use client";
import { tabs } from "@/Content";
import parse from "html-react-parser";
import { useState } from "react";
import Assignment from "./Assignment/Assignment";
import QuizBox from "./QuizBox/QuizBox";

type ITabData = {
  id: number;
  label: string;
  videoDescription?: any;
  referenceData?: any;
  quiz?: any;
  assignmentDetails?: any;
  content?: any;
};

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
            {tab.label === "ভিডিও ডেসক্রিপশন" ? (
              parse(tab.videoDescription!)
            ) : tab.label === "রেফারেন্স" ? (
              <div>{tab.referenceData}</div>
            ) : tab.label === "কুইজ" ? (
              <QuizBox data={tab} />
            ) : tab.label === "অ্যাসাইনমেন্ট" ? (
              <Assignment data={tab} />
            ) : (
              parse(tab.content!)
            )}
          </div>
        ) : null
      )}
    </section>
  );
};

export default Tabs;

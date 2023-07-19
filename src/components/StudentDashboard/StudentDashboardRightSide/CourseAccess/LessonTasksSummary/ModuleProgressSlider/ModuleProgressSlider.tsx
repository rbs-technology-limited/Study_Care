type IModuleProgressSliderProps = {
  totalModules: number;
  completeModules: number;
};

const ModuleProgressSlider = () => {
  const totalModules = 10;
  const completeModules = 8;
  const moduleCompletionPercentage = (completeModules / totalModules) * 100;
  return (
    <div className="text-gray-600 dark:text-white">
      <p className="my-4 font-semibold">
        10/10 টি ক্লাস শেষ করেছেন - অগ্রগতি {moduleCompletionPercentage}%
      </p>
      <div className="flex gap-3 items-center">
        <div
          className="relative w-4/5 h-[13px] bg-white rounded-full border"
          aria-readonly
        >
          <div
            className={`w-[${moduleCompletionPercentage}%] h-[11px] absolute top-0 left-0 bg-green-400 rounded-full`}
          ></div>
        </div>
        <p className="font-semibold text-sm">{moduleCompletionPercentage}%</p>
      </div>
    </div>
  );
};

export default ModuleProgressSlider;

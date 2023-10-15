import  { useEffect, useState } from "react";

const ProgressBar = ({
  value,
  showPercentage,
  width,
}: {
  value: number;
  showPercentage: boolean;
  width?: number;
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const nextProgress = prevProgress + 1;
        if (nextProgress >= value) {
          clearInterval(interval);
          return value;
        }
        return nextProgress;
      });
    }, 1);

    return () => {
      clearInterval(interval);
    };
  }, [value]);

  const actualWidth = width && value > 100 ? value : width || 100;
  const progressWidth = `${(progress / 100) * actualWidth}px`;

  return (
    <div className={`flex flex-col gap-y-[4.5px] items-start  justify-start min-w-[100px]`} >
      {showPercentage && (
        <label className="text-[#4FD1C5] font-bold text-[14px] leading-[140%] font-['Helvetica'] text-left">
          {progress}%
        </label>
      )}
      <div
        className={`bg-[#E2E8F0] rounded-full h-[3px]`}
        style = {{
          width: `${actualWidth}px`
        }}
      >
        <div
          style={{
            width: progressWidth,
            maxWidth: "100%",
            transition: "width 1s ease-in-out",
          }}
          className={`bg-[#4FD1C5] h-[3px] rounded-full`}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;

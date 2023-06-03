export default function ({ total, offset }) {
  const getCurrentPercent = (total: number, offset: number) => {
    return Math.floor((offset * 100) / total);
  };

  const currentPercent: number = getCurrentPercent(total, offset);

  if (currentPercent < 100 && currentPercent !== 0) {
    return (
      <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 mb-4">
        <div
          className="bg-[#1DB954] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
          style={{ width: currentPercent + "%" }}
        >
          {" "}
          {currentPercent}%
        </div>
      </div>
    );
  } else {
    if (currentPercent !== 0) {
      return (
        <div
          className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
          role="alert"
        >
          <span className="font-medium">Success alert!</span> We got all your
          data on all your {total} tracks. We process the data, analyze the
          lyrics. Wait for the result...
        </div>
      );
    }
  }
}

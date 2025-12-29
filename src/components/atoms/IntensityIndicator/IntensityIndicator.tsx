import clsx from "clsx";
import { IntensityIndicatorProps } from "./IntensityIndicator.types";

export const IntensityIndicator = ({ value }: IntensityIndicatorProps) => {
  return (
    <div className="flex items-center gap-3 text-sm">
      <span>Intensywność: </span>
      <div className="flex items-center gap-1">
        {Array.from({ length: 4 }).map((_, index) => (
          <span
            key={index}
            className={clsx(
              "h-3 w-3 rounded-full",
              index < value ? "bg-yellow-400" : "bg-gray-300",
            )}
          />
        ))}
      </div>
      <span className="hidden sm:block">{value}/4</span>
    </div>
  );
};

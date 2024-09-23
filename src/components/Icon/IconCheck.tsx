import { FC } from "react";

interface IconCheckProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
}

const IconCheck: FC<IconCheckProps> = ({
  className,
  fill = false,
  duotone = true,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      className={className}
      fill={fill ? "currentColor" : "none"}
      width="16"
      height="16"
    >
      <path
        d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
        opacity={duotone ? "0.5" : "1"}
        fill="currentColor"
      />
    </svg>
  );
};

export default IconCheck;

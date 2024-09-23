import { FC } from "react";

interface IconFirstProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
}

const IconFirst: FC<IconFirstProps> = ({
  className,
  fill = false,
  duotone = true,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={className}
      fill={fill ? "currentColor" : "none"}
      width="14"
      height="14"
    >
      <path
        d="M459.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29l0-320c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L288 214.3l0 41.7 0 41.7L459.5 440.6zM256 352l0-96 0-128 0-32c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160C4.2 237.5 0 246.5 0 256s4.2 18.5 11.5 24.6l192 160c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29l0-64z"
        opacity={duotone ? "0.5" : "1"}
        fill="currentColor"
      />
    </svg>
  );
};

export default IconFirst;

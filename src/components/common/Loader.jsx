import ReactLoading from "https://cdn.skypack.dev/react-loading@2.0.3";

export const Loader = () => {
  const theme = localStorage.getItem("theme");
  const isDark = theme === "dark";
  return (
    <div
      className={`h-screen w-full flex items-center justify-center  ${
        isDark ? "bg-black" : "bg-white"
      }`}
    >
      <ReactLoading
        type={"bars"}
        color={"rgb(67, 97, 238 )"}
        height={80}
        width={80}
      />
    </div>
  );
};

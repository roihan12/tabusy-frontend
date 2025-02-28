import Lottie from "react-lottie";
import LoaderAnimation from "../../assets/animations/loaderAnimate.json";
const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoPlay: true,
    animationData: LoaderAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Lottie options={defaultOptions} width={300} height={300} />
    </div>
  );
};

export default Loader;

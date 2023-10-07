import Bg from "../assets/landingBg.png";

export default function LandingPage() {
  return (
    <div className="w-full h-screen flex justify-center items-center relative">
      <img className="object-cover w-full h-full object-center" src={Bg}></img>
      <div className="absolute top-0 left-0 w-full h-full text-white">hwlo</div>
    </div>
  );
}

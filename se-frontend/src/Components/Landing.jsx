import Bg from "../assets/landingbg.png";

export default function LandingPage() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <img
        style={{ width: "100%", height: "100%", padding: "0" }}
        src={Bg}
      ></img>
    </div>
  );
}

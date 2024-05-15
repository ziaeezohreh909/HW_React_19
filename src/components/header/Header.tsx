import webImage from "../../assets/web.svg";

export default function Header() {
  return (
    <>
      <div className="bg-gradient-to-l from-blue-400 to-blue-900 text-white text-3xl font-semibold font-serif rounded-b-full p-2">
        <img
          src={webImage}
          alt="webImage"
          className="bg-white rounded-full mx-8 w-8 h-8 float-left"
        />
        <span className="text-center">
          <h1>وب اپلیکیشن مدیریت مخاطبین</h1>
        </span>
      </div>
    </>
  );
}

import { Link } from "react-router";

const LogoContainer = () => {
  return (
    <div>
      <Link to={"/"}>
        <img
          src="/assets/svg/Mockzi.jpg"
          alt="Logo"
          className="w-14 h-17 object-cover rounded-full"
        />
      </Link>
    </div>
  );
};

export default LogoContainer;

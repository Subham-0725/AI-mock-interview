import { Link } from "react-router"

const LogoContainer = () => {
  return (
    <div>
      <Link to={"/"}>
      <img
        src="/assets/svgs/logo.svg"
        alt="Logo"
        className="min-w-10 min-h-10 object-contain"
      />
      
      </Link>
    </div>
  )
}

export default LogoContainer

import { Link } from "react-router-dom";

const loginLink = () => {
  return (
    <p className="mb-4 text-center text-sm text-gray-600">
      이미 계정이 있다면?{" "}
      <Link to="/login" className="text-indigo-500 hover:underline">
        Login
      </Link>
    </p>
  )
}

export default loginLink

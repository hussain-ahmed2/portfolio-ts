import { FaArrowUp } from "react-icons/fa6"

function Footer() {
  return (
    <footer className="text-center py-4 bg-white border-t-2 dark:bg-neutral-900 dark:border-neutral-700 relative">
      &copy; {new Date().getFullYear()} Me 
      <a href="#" className="absolute top-1/2 right-4 transform -translate-y-1/2 hover:text-blue-500 bg-slate-100 dark:bg-neutral-700 hover:bg-slate-200 dark:hover:bg-neutral-800 rounded-full p-2">
        <FaArrowUp />
      </a>
    </footer>
  )
}
export default Footer
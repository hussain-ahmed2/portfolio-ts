import { useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { CgClose } from "react-icons/cg";

type Menu = string;

const MENU: Menu[] = ["Home", "About", "Projects", "Contact"];

function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);

  const handleMobileNavClose = () => {
    setIsMobileNavOpen(false);
  }

  const handleMobileNavOpen = () => {
    setIsMobileNavOpen(true);
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document
            .querySelector(`.mobile-link[href="#${entry.target.id}"]`)
            ?.classList.add("after:w-full", "text-blue-500");
        } else {
          document
            .querySelector(`.mobile-link[href="#${entry.target.id}"]`)
            ?.classList.remove("after:w-full", "text-blue-500");
        }
      });
    }, {
      threshold: 0.5
    });

    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
		<header className="fixed w-full top-0 px-5 max-md:pe-0 bg-white border-b-2 z-50 dark:bg-neutral-900 dark:border-neutral-600">
			<nav className="flex items-center justify-between min-h-14 max-w-screen-xl mx-auto">
				<a className="text-3xl font-bold text-blue-500" href="#">
					Me
				</a>
				<div
					className={`flex gap-10 mobile-nav md:w-1/2 ${
						isMobileNavOpen
							? "max-md:translate-x-0"
							: "max-md:translate-x-full"
					}`}
				>
					<button
						onClick={handleMobileNavClose}
						className="self-end mobile-nav-btn"
					>
						<CgClose />
					</button>
					{MENU.map((item) => (
						<a
							className="font-semibold hover:text-blue-500 mobile-link big-screen-navlink-hover"
							key={item}
							href={`#${item.toLowerCase()}`}
							onClick={handleMobileNavClose}
						>
							{item}
						</a>
					))}
					<span
						className={`bg-black bg-opacity-30 h-full w-1/3 absolute md:hidden -left-1/3 transition-opacity duration-700 ${
							isMobileNavOpen
								? "opacity-100 visible"
								: "opacity-0 invisible"
						}`}
            onClick={handleMobileNavClose}
					></span>
				</div>
				<button
					onClick={handleMobileNavOpen}
					className="mobile-nav-btn"
				>
					<BiMenu />
				</button>
			</nav>
		</header>
  );
}
export default Header;

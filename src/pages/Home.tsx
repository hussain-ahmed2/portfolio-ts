import { FaGithub, FaLinkedin } from "react-icons/fa6";

function Home() {
	return (
		<section
			id="home"
			className="section flex flex-col md:flex-row gap-10 items-center justify-center"
		>
			{/* Profile Section */}
			<div className="w-full md:w-1/2">
				<img
					className="w-full h-full object-contain aspect-square max-w-80 md:max-w-xl mx-auto rounded-full"
					src="./profile.png"
					alt="Profile picture of Me"
				/>
			</div>
			{/* Description Section */}
			<div className="h-1/2 w-full md:w-1/2 text-center md:text-left px-4">
				<h1 className="text-3xl md:text-6xl font-bold">
					I'm <span className="text-blue-500">Me</span>
				</h1>
				<p className="text-lg md:text-2xl mt-4">
					A passionate front-end developer
				</p>
				<p className="text-lg md:text-2xl mt-4 flex gap-2 items-center max-md:justify-center">
					<span className="">Contact me on:</span>
					<a
						href="#"
						target="_blank"
						className="social-icon"
					>
						<FaLinkedin />
					</a>
					<a
						href="#"
						target="_blank"
						className="social-icon"
					>
						<FaGithub />
					</a>
				</p>
			</div>
		</section>
	);
}
export default Home;

function About() {
	return (
		<section
			id="about"
			className="section p-4 flex gap-10 flex-col items-center md:flex-row bg-slate-200 dark:bg-neutral-700 rounded-xl"
		>
			{/* Description Section */}
			<div className="w-full md:w-1/2 text-center md:text-left">
				<h2 className="text-4xl md:text-5xl font-bold">
					About Me
				</h2>
				<p className="text-lg md:text-xl mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
					I'm a front-end developer passionate about creating dynamic,
					responsive, and user-friendly websites. I love solving
					problems with clean code and crafting seamless digital
					experiences.
				</p>
				<p className="text-lg md:text-xl mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
					Continuously learning new technologies and collaborating on
					projects, I aim to bring ideas to life with modern tools and
					frameworks.
				</p>
				<a
					href="#contact"
					className="inline-block mt-6 px-6 py-3 bg-blue-500 text-white text-lg font-medium rounded-lg hover:bg-blue-600 transition duration-300"
				>
					Contact Me
				</a>
			</div>

			{/* Skills & Tools Section */}
			<div className="w-full md:w-1/2 px-8">
				<h3 className="text-3xl font-semibold">
					Skills & Tools
				</h3>

				{/* Frontend Skills */}
				<h4 className="text-xl mt-6 font-semibold">Frontend</h4>
				<ul className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2 text-gray-700 dark:text-gray-400">
					<li className="flex items-center gap-2">
						<span className="text-blue-500 text-xl">✔</span> HTML5
					</li>
					<li className="flex items-center gap-2">
						<span className="text-blue-500 text-xl">✔</span> CSS3
					</li>
					<li className="flex items-center gap-2">
						<span className="text-blue-500 text-xl">✔</span>{" "}
						JavaScript
					</li>
					<li className="flex items-center gap-2">
						<span className="text-blue-500 text-xl">✔</span>{" "}
						React.js
					</li>
					<li className="flex items-center gap-2">
						<span className="text-blue-500 text-xl">✔</span>{" "}
						Tailwind CSS
					</li>
					<li className="flex items-center gap-2">
						<span className="text-blue-500 text-xl">✔</span>{" "}
						TypeScript
					</li>
					<li className="flex items-center gap-2">
						<span className="text-blue-500 text-xl">✔</span> Next.js
					</li>
				</ul>

				{/* Backend Skills */}
				<h4 className="text-xl mt-6 font-semibold">Backend</h4>
				<ul className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2 text-gray-700 dark:text-gray-400">
					<li className="flex items-center gap-2 ">
						<span className="text-blue-500 text-xl">✔</span> Node.js
					</li>
					<li className="flex items-center gap-2">
						<span className="text-blue-500 text-xl">✔</span> Python
					</li>
					<li className="flex items-center gap-2">
						<span className="text-blue-500 text-xl">✔</span> C++
					</li>
					<li className="flex items-center gap-2">
						<span className="text-blue-500 text-xl">✔</span> Java
					</li>
					<li className="flex items-center gap-2">
						<span className="text-blue-500 text-xl">✔</span> PHP
					</li>
				</ul>

				{/* Tools */}
				<h4 className="text-xl mt-6 font-semibold">Tools</h4>
				<ul className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2 text-gray-700 dark:text-gray-400">
					<li className="flex items-center gap-2">
						<span className="text-blue-500 text-xl">✔</span> Git &
						GitHub
					</li>
					<li className="flex items-center gap-2">
						<span className="text-blue-500 text-xl">✔</span> MySQL
					</li>
				</ul>
			</div>
		</section>
	);
}
export default About;

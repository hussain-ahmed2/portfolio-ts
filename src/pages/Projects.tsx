
const PROJECTS = [
	{
		title: "Project 1",
		description: "Description for Project 1",
		link: "#",
		image: "https://placehold.co/400",
	},
	{
		title: "Project 2",
		description: "Description for Project 2",
		link: "#",
		image: "https://placehold.co/400",
	},
	{
		title: "Project 3",
		description: "Description for Project 3",
		link: "#",
		image: "https://placehold.co/400",
	},
];

function Projects() {

	return (
		<section id="projects" className="section p-4">
			<h1 className="text-4xl md:text-5xl font-bold text-center my-6">Projects</h1>
			<div className="flex flex-wrap gap-4 h-full items-center justify-center">
				{PROJECTS.map((project) => (
					<div key={project.title} className="flex flex-col group bg-white dark:bg-neutral-700 shadow-lg rounded-lg overflow-hidden hover:bg-blue-100 dark:hover:bg-neutral-600 transition duration-300">
						<div className="aspect-square overflow-hidden">
              <img className="group-hover:scale-110 transition duration-300" src={project.image} alt={`Project ${project.title}`} />
            </div>
						<div className="p-4">
							<h2 className="text-2xl font-semibold line-clamp-1">{project.title}</h2>
							<p className="line-clamp-1">{project.description}</p>
							<a href={project.link} className="mt-2 inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition duration-300">View Project</a>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
export default Projects;

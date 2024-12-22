
function Contact() {
  return (
		<section id="contact" className="section flex felx-col items-center">
			<div className="max-w-4xl mx-auto px-4 text-center">
				<h2 className="text-3xl font-bold mb-6">
					Get in Touch
				</h2>
				<p className="mb-8">
					Have questions or want to work together? Feel free to reach
					out!
				</p>
				<form
					action="#"
					className="bg-white dark:bg-neutral-700 shadow-lg rounded-lg p-6 space-y-4"
				>
					<div className="flex flex-col md:flex-row gap-4">
						<input
							type="text"
							placeholder="Your Name"
							className="w-full md:w-1/2 border border-gray-300 dark:border-gray-600 dark:bg-neutral-600 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
							required
						/>
						<input
							type="email"
							placeholder="Your Email"
							className="w-full md:w-1/2 border border-gray-300 dark:border-gray-600 dark:bg-neutral-600 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
							required
						/>
					</div>
					<textarea
						placeholder="Your Message"
						className="w-full border border-gray-300 dark:border-gray-600 dark:bg-neutral-600 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
						rows={6}
						required
					></textarea>
					<button
						type="submit"
						className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition duration-300"
					>
						Send Message
					</button>
				</form>
				<p className="text-sm text-gray-500 dark:text-gray-300 mt-6">
					Or email us directly at{" "}
					<a
						href="mailto:contact@example.com"
						className="text-blue-600 underline"
					>
						contact@example.com
					</a>
				</p>
			</div>
		</section>
  );
}
export default Contact
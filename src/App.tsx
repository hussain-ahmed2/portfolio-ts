import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
	return (
		<div className="font-mono bg-slate-100 text-neutral-800 dark:bg-neutral-800 dark:text-slate-100">
			<Header />
			<div className="max-w-screen-xl mx-auto flex flex-col gap-2">
				<Home />
				<About />
				<Projects />
				<Contact />
			</div>
			<Footer />
		</div>
	);
}

export default App;

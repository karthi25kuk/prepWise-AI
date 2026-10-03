import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

function Home() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <main className="w-full">
        <Hero />
      </main>
    </div>
  );
}

export default Home;


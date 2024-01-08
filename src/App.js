import "./App.css";
import Navbar from "./components/navbar";
import OverviewSection from "./components/overviewSection";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-col bg-color-background w-3/4">
        <Navbar />
        <section className="p-8">
          <OverviewSection />
        </section>
      </main>
    </div>
  );
}

export default App;

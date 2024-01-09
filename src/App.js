import "./App.css";
import Navbar from "./components/navbar";
import OverviewSection from "./components/overviewSection";
import Sidebar from "./components/sidebar";
import TransactionSection from "./components/transactionSection";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-col bg-color-background w-5/6">
        <Navbar />
        <section className="p-8">
          <OverviewSection />
          <TransactionSection />
        </section>
      </main>
    </div>
  );
}

export default App;

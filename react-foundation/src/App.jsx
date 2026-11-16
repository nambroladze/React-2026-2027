import { CORE_CONCEPTS } from "./data";
import CoreConcept from "./components/CoreConcept";
import Header from "./components/Header";
import TabButton from "./components/TabButton";

function App() {
  let selectedTopic = "Please Choose A Topic";

  function handleClick(value) {
    selectedTopic = value;
    console.log(selectedTopic);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleClick("Components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleClick("JSX")}>JSX</TabButton>
            <TabButton onSelect={() => handleClick("Props")}>Props</TabButton>
            <TabButton onSelect={() => handleClick("State")}> State</TabButton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;

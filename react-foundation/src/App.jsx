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
            <TabButton onSelect={() => handleClick("components")}>
              components
            </TabButton>
            <TabButton onSelect={() => handleClick("jsx")}>jsx</TabButton>
            <TabButton onSelect={() => handleClick("props")}>props</TabButton>
            <TabButton onSelect={() => handleClick("state")}>state</TabButton>
          </menu>
        </section>
        {selectedTopic}
      </main>
    </div>
  );
}

export default App;

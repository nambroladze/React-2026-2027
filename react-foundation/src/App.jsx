import reactCoreConcepts from "./assets/react-core-concepts.png";
import { CORE_CONCEPTS } from "./data";

const titles = ["Fundamentals", "Crucial", "Core"];

function getRandomInt() {
  return Math.floor(Math.random() * titles.length);
}

function Header() {
  return (
    <header>
      <img src={reactCoreConcepts} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {titles[getRandomInt()]} React concepts you will need for almost any app
        you are going to build!
      </p>
    </header>
  );
}

function CoreConcept(props, id) {
  console.log(id);
  return (
    <li>
      <img src={props.image} alt={props.imageAlt} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
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
      </main>
    </div>
  );
}

export default App;

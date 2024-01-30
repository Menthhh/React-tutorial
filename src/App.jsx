import Header from "./components/Header/Header.jsx";
import {useState} from "react";
import { CORE_CONCEPTS } from "./data.js";
import {EXAMPLES} from "./data.js";
import CoreConcepts from "./components/CoreConcepts.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  const [topic, setTopic] = useState("components");
  function handleClick(SelectedTopic) {
    setTopic(SelectedTopic);
    console.log(SelectedTopic);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concept</h2>
          <ul>
            {CORE_CONCEPTS.map(CoreConcepts)}
            <CoreConcepts {...CORE_CONCEPTS[0]} />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            {CORE_CONCEPTS
              .filter((item) => {
                return item.title === "JSX";
              })
              .map(CoreConcepts)}
          </ul>
        </section>

      <section id="examples">
        <menu>
        <TabButton onSelect={() => {handleClick("components")}}>Components</TabButton>
        <TabButton onSelect={() => {handleClick("jsx")}}>JSX</TabButton>
        <TabButton onSelect={() => {handleClick("props")}}>Props</TabButton>
        <TabButton onSelect={() => {handleClick("state")}}>State</TabButton>
      </menu>
        <div id="tab-content">
          <h2>{EXAMPLES[topic].title}</h2>
          <p>{EXAMPLES[topic].description}</p>
          <pre>
            <code>  
              {EXAMPLES[topic].code}
            </code>
          </pre>
        </div>
      </section>
      </main>
    </div>
  );
}

export default App;

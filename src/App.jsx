import Header from "./components/Header/Header.jsx";
import {useState} from "react";
import { CORE_CONCEPTS } from "./data.js";
import {EXAMPLES} from "./data.js";
import CoreConcepts from "./components/CoreConcepts.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  const [topic, setTopic] = useState('');

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
            {CORE_CONCEPTS.map((concepItem) => (
              <CoreConcepts {...concepItem} />
            ))}
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
        <TabButton isSelected={topic === 'components'} onSelect={() => {handleClick("components")}}>Components</TabButton>
        <TabButton isSelected={topic === 'jsx'} onSelect={() => {handleClick("jsx")}}>JSX</TabButton>
        <TabButton isSelected={topic === 'props'} onSelect={() => {handleClick("props")}}>Props</TabButton>
        <TabButton isSelected={topic === 'state'} onSelect={() => {handleClick("state")}}>State</TabButton>
        </menu>
        
          {/* {!topic ? 
          (<p>Please select a topic</p>)
          : 
          (<div id="tab-content">
          <h2>{EXAMPLES[topic].title}</h2>
          <p>{EXAMPLES[topic].description}</p>
          <pre>
            <code>  
              {EXAMPLES[topic].code}
            </code>
          </pre>
        </div> )} */}
        {!topic && <p>Please select a Topic.</p>}
        {topic &&
          <div id="tab-content">
          <h2>{EXAMPLES[topic].title}</h2>
          <p>{EXAMPLES[topic].description}</p>
          <pre>
            <code>  
              {EXAMPLES[topic].code}
            </code>
          </pre>
        </div>
        }

      </section>
      </main>
    </div>
  );
}

export default App;

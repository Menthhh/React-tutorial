import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import Section from "./Section"
import Tabs from "./Tabs"

export default function Example() {
  const [topic, setTopic] = useState("");

  function handleClick(SelectedTopic) {
    setTopic(SelectedTopic);
    console.log(SelectedTopic);
  }


  return (
    <Section id="examples" title="Examples">
    <Tabs 
    ButtonContainer = "menu"
    buttons = {
        <>
        <TabButton
          isSelected={topic === "components"}
          onClick={() => {
            handleClick("components");
          }}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={topic === "jsx"}
          onClick={() => {
            handleClick("jsx");
          }}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={topic === "props"}
          onClick={() => {
            handleClick("props");
          }}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={topic === "state"}
          onClick={() => {
            handleClick("state");
          }}
        >
          State
        </TabButton>
        </>
    } >
    
    {!topic ? 
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
    </div> )} 
    </Tabs>
    </Section>
  );
}

import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConceprt.jsx";

import TabButton from "./components/TabButton.jsx";
import { useState } from "react";
import TabContent from "./components/TabContent.jsx";
import { CORE_CONCEPTS1 } from "./data.js";

function App() {
  const [selectedTopics, setSelectedTopcis] = useState(null);

  function handleClick(event) {
    setSelectedTopcis(event);
    console.log(selectedTopics);
  }

  return (

    
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {CORE_CONCEPTS.map((concept, index) => (
              <CoreConcepts key={index} {...concept} />
            ))}
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <p>
            Here are some examples of how to use the core concepts in your own
            projects.
          </p>
          <menu>
            <TabButton onSelect={() => handleClick("components")} isActive={selectedTopics === "components"}>
              Component
            </TabButton>
            <TabButton onSelect={() => handleClick("jsx")} isActive={selectedTopics === "jsx"}> JSX</TabButton>
            <TabButton onSelect={() => handleClick("props")} isActive={selectedTopics === "props"}> Props</TabButton>
            <TabButton onSelect={() => handleClick("state")} isActive={selectedTopics === "state"}> State</TabButton>
          </menu>
          {!selectedTopics ? (
            <p>"Please select a topic"</p>
          ) : (
            <TabContent
              code={CORE_CONCEPTS1[selectedTopics]?.code}
              title={CORE_CONCEPTS1[selectedTopics]?.title}
              description={CORE_CONCEPTS1[selectedTopics]?.description}
            />
          )}
        </section>
      </main>
    </div>
  );
}

export default App;

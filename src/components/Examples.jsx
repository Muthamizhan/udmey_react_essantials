import { useState } from "react";
import { CORE_CONCEPTS1 } from "../data";
import TabContent from "./TabContent";
import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {
  const [selectedTopics, setSelectedTopcis] = useState(null);

  function handleClick(event) {
    setSelectedTopcis(event);
    console.log(selectedTopics);
  }

  return (
    <Section id="examples" title="Examples">
      <p>
        Here are some examples of how to use the core concepts in your own
        projects.
      </p>
      <Tabs>
        <TabButton
          onClick={() => handleClick("components")}
          className={selectedTopics === "components" ? "active" : undefined}
        >
          Component
        </TabButton>
        <TabButton
          onClick={() => handleClick("jsx")}
          className={selectedTopics === "jsx" ? "active" : undefined}
        >
          JSX
        </TabButton>
        <TabButton
          onClick={() => handleClick("props")}
          className={selectedTopics === "props" ? "active" : undefined}
        >
          Props
        </TabButton>
        <TabButton
          onClick={() => handleClick("state")}
          className={selectedTopics === "state" ? "active" : undefined}
        >
          State
        </TabButton>
      </Tabs>
      {!selectedTopics ? (
        <p>"Please select a topic"</p>
      ) : (
        <TabContent
          code={CORE_CONCEPTS1[selectedTopics]?.code}
          title={CORE_CONCEPTS1[selectedTopics]?.title}
          description={CORE_CONCEPTS1[selectedTopics]?.description}
        />
      )}
    </Section>
  );
}

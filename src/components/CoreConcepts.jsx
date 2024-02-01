import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";

export default function CoreConcepts(){
    return(
        <section id="core-concepts">
            <h2>Core Concept</h2>
            <ul>
                {CORE_CONCEPTS.map(CoreConcept)}
                {CORE_CONCEPTS.map((concepItem) => (<CoreConcept {...concepItem} />))}
                <CoreConcept {...CORE_CONCEPTS[0]} />
                <CoreConcept {...CORE_CONCEPTS[1]} />
                <CoreConcept {...CORE_CONCEPTS[2]} />
                {CORE_CONCEPTS
                .filter((item) => {
                    return item.title === "JSX";
                })
                .map(CoreConcept)}
            </ul>
        </section>
    )
}
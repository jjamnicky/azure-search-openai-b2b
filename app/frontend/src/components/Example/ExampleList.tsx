import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "Tell something about Slovak Telekom...",
        value: "Tell something about Slovak Telekom..."
    },
    { text: "Who is the Enterprise Segment Director in Slovak Telekom?", value: "Who is the Enterprise Segment Director in Slovak Telekom?" },
    { text: "What is Magio GO?", value: "What is Magio GO?" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};

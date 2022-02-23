import './App.css';
import Accordion from './HT5/Accordion.jsx'
import accordionData from './HT5/accordionData';


function App() {

    return (
        <>
            {accordionData.map(({ header, content }) =>
                <Accordion>
                    <Accordion.Header>{header}</Accordion.Header>
                    <Accordion.Content>{content}</Accordion.Content>
                </Accordion>
            )}
        </>
    );
};


export default App;
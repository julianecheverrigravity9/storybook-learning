import { useEffect, useState } from 'react';
import './App.css';
import Dropdown from './components/dropdown';
import SelectedFilterList from './components/selectedFilterList';
import { data } from "./data";

function App() {
  const [topicsState, setTopics] = useState(data.topics);
  const [anotherTopicsState, setAnotherTopics] = useState(data.anotherTopics);
  const [itemsSelected, setItemsSelected] = useState([]);

  useEffect(() => {
    let topicsSelected = topicsState?.filter(x => x.selected);
    let anotherTopicsSelected = anotherTopicsState?.filter(x => x.selected);

    setItemsSelected([...topicsSelected, ...anotherTopicsSelected]);

  }, [topicsState, anotherTopicsState]);

  return (
    <div className='main-container'>
      <div className='dropdown'>
        <Dropdown placeHolder={"Topic"} setData={setTopics} options={topicsState} />
        <Dropdown placeHolder={"Another topics"} setData={setAnotherTopics} options={anotherTopicsState} />
        <div className='filters'>
          <SelectedFilterList data={itemsSelected} />
        </div>
      </div>
      <div className='results'>
        <p>Some text, Some text, Some text, Some text, Some text, Some text, Some text, Some text, Some text, Some text</p>
      </div>
    </div>
  );
}

export default App;

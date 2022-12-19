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
    const topicsSelected = topicsState?.filter(x => x.selected);
    if (topicsSelected.length > 0) {
      updateItemsSelected(topicsSelected);
    }
  }, [topicsState]);

  useEffect(() => {
    const anotherTopicsSelected = anotherTopicsState?.filter(x => x.selected);
    if (anotherTopicsSelected.length > 0) {
      updateItemsSelected(anotherTopicsSelected);
    }
  }, [anotherTopicsState]);

  const updateItemsSelected = (items) => {
    let selected = itemsSelected.concat(items);
    selected = [...new Set([...itemsSelected, ...items])]
    setItemsSelected(selected);
  }

  return (
    <div className='main-container'>
      <div className='dropdown'>
        <Dropdown placeHolder={"Topic"} setData={setTopics} options={topicsState} />
        <Dropdown placeHolder={"Another topics"} setData={setAnotherTopics} options={anotherTopicsState} />
        <div className='filters'>
          <SelectedFilterList data={itemsSelected.filter(x => x.selected)} setData={setItemsSelected} />
        </div>
      </div>
      <div className='results'>
        <p>Some text, Some text, Some text, Some text, Some text, Some text, Some text, Some text, Some text, Some text</p>
      </div>
    </div>
  );
}

export default App;

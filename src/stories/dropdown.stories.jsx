import React from 'react';
import { useState } from 'react';

import Dropdown  from '../components/dropdown';
import { data } from "../data";

export default {
  title: 'Example/Dropdown',
  component: Dropdown 
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => {
    const [topicsState, setTopics] = useState(data.topics);
    
    return <Dropdown options={topicsState} setData={setTopics} {...args} />;
};

export const FullData = Template.bind({});

FullData.args = {
    placeHolder: 'Topics',
    options: data.topics
};
  

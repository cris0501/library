import React from 'react'
import Equation from '../components/Equation/Equation'
import Note from '../components/Note/Note'
import Block from '../components/Block/Block';
import CustomBlockMath from '../components/CustomBlockMath/CustomBlockMath';

const RenderContent = ({ item }) => {
  switch (item.type) {
    case 'new_line':
      return <><br /><br /></>;
    case 'text':
      return <p style={{ display: 'inline' }}>{item.content}</p>;
    case 'equation':
      return <Equation content={item.content.content} />;
    case 'note':
      return <Note title={item.title.content} content={item.content.content} />;
    case 'block':
      return <Block items={item.items} />;
    case 'block_math':
      return <CustomBlockMath content={item.content[0].content} />;
    default:
      return null;
  }
}

export default RenderContent

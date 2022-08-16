import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Task from './task';

/*Note:

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

is the same as

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

*/

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
`;

export default class Column extends React.Component {
    render() {
      return (
        <Container>
          <Title>{this.props.column.title}</Title>
          <Droppable droppableId={this.props.column.id}>
            {provided => (
              <TaskList innerRef={provided.innerRef} {...provided.droppableProps}>
                {this.props.tasks.map((task, index) => (
                  <Task key={task.id} task={task} index={index} />
                ))}
                {provided.placeholder}
              </TaskList>
            )}
          </Droppable>
        </Container>
      );
    }
  }


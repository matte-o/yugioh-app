import React from "react";
import { DragDropContext, Droppable} from "react-beautiful-dnd";
import Card from './components/Card';

function App(){

  function handleOnDragEnd(result){

    return 1;

  }

  return(

    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="cards">
        {(provided) => (
          <Card ref={provided.innerRef} {...provided.droppableProps}>
            {provided.placeholder}
          </Card>
        )}
      </Droppable>
    </DragDropContext>

  );

}

export default App;
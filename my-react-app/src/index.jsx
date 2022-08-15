import React from 'react'
import ReactDOM from 'react-dom'
import initialData from './initial-data';
import Column from './components/column';

//cdreates an inheritence to Reac.tcomponent, and gives your component access to React.Components fuinctions.
class App extends React.Component{

  state = initialData;

  render(){

    return this.state.columnOrder.map(columnID => {
      const column = this.state.columns[columnID];
      const tasks = column.taskIds.map(taskID => this.state.tasks[taskID]);

      return <Column key={column.id} column={column} tasks={tasks} />;

    });
  }

}


ReactDOM.render(<App/>, document.getElementById('root'))
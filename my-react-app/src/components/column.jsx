import React from 'react';

const Container = styled.div``;
const Title = styled.h3``;
const TaskList = styled.div``;

export default class Column extends React.Component {

    render() {

        return (

            <Container>
                <Title>{this.props.column.title}</Title>
                <TaskList>{this.props.tasks.map()}</TaskList>
            </Container>

        )this.props.column.title;

    }

}
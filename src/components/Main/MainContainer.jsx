import React from 'react'
import { connect } from 'react-redux';
import Main from './Main'
import { compose } from 'redux';
import { getNewTaskText, getTasks, getPageSize, getTotalTasksCount, getPage} from '../../Redux/tasks-selector';
import { addTaskAC, addTask, deleteTask} from '../../Redux/main-reducer'
import {getTasksAC, setTasksAfterChange} from '../../Redux/main-reducer'

class MainContainer extends React.Component {

    componentDidMount() {
        // this.props.getTasks2()
        let {page, pageSize} = this.props
        this.props.getTasksAC(page, pageSize)
    }

    onPageChanged = (pageNumber) => {
        let {pageSize} = this.props
        this.props.getTasksAC(pageNumber, pageSize);
    }

    componentDidUpdate() {
        this.props.setTasksAfterChange()
    }

    render() {
        return <>
            <Main 
                tasks={this.props.tasks} 
                newTaskText={this.props.newTaskText}
                addTask={this.props.addTask}
                deleteTask={this.props.deleteTask}
                pageSize={this.props.pageSize}
                page={this.props.page}
                totalTasksCount={this.props.totalTasksCount}
                onPageChanged={this.onPageChanged}
            />
        </>
    }

}

let mapStateToProps = (state) => {
    return {
        tasks: getTasks(state),
        newTaskText: getNewTaskText(state),
        pageSize: getPageSize(state),
        totalTasksCount: getTotalTasksCount(state),
        page: getPage(state),
    }
}




export default compose(
    connect(mapStateToProps, { getTasksAC, addTask, deleteTask, setTasksAfterChange}),
)(MainContainer)
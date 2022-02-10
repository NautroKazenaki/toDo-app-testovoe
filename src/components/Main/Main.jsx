import React from 'react'
import Task from '../Task'
import { Field, reduxForm } from 'redux-form';
import {Textarea} from '../common/FormsControl'
import Paginator from '../common/Paginator/Paginator';


const Main = React.memo( ({tasks, newTaskText, addTask, deleteTask, pageSize, page, totalTasksCount, onPageChanged}) => {

    

    let sendTask = (values) => {
        addTask(values.newTaskText);
        values.newTaskText = ""
    }
    return (
        <div className="main-wrapper">
            <div className="content-wrapper">
                <Paginator page={page} onPageChanged={onPageChanged} totalTasksCount={totalTasksCount} pageSize={pageSize} />
                <div>
                    <AddTaskReduxForm onSubmit={sendTask} />
                </div>
                {tasks.map( t => <Task 
                    task={t}
                    key={t.id}
                    id={t.id}
                    deleteTask={deleteTask}
                        />
                    )
                }
            </div>
        </div>
    )
})

const AddTaskForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
    <div> 
        <Field component={Textarea} name='newTaskText' placeholder='write new task' />
        
    </div>
    <div>
        <button>
            send
        </button>
    </div>
</form>
}

const AddTaskReduxForm = reduxForm({
    form: "addTaskForm"
})(AddTaskForm)
export default Main

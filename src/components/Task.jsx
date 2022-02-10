import React from 'react'
import { Card, CardActions, CardContent, Typography, FormGroup, FormControlLabel, Checkbox, Grid } from '@material-ui/core'


const Task = ({ task, deleteTask }) => {

    let removeTask = (e) => {
        e.target.closest('.task-wrapper').remove()
    }

    let destroyTask = (e) =>{
        
        let id = e.target.closest('.task-wrapper').id
        deleteTask(Number(id))
    }

    return (
        <div className="tasks-wrapper">
            <Card sx={{ minWidth: 275 }} className="task-wrapper" id={task.id}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Task #{task.id}
                            </Typography>
                            <Typography variant="h5" component="div">
                                {task.title}
                            </Typography>
                        </CardContent>
                    </Grid>
                    <Grid item xs={8}>
                        <CardActions>
                            <FormGroup style={{ justifyContent: "flex-end" }}>
                                <FormControlLabel control={<Checkbox defaultChecked={task.completed} />} label="Done" />
                            </FormGroup>
                        </CardActions>
                        {/* <button onClick={removeTask}>delete task</button> */}
                        <button onClick={destroyTask}>delete task</button>
                    </Grid>
                </Grid>
            </Card>
        </div>
    )
}

export default Task

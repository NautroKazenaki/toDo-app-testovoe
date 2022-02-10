
import React from 'react'
import { Route,  Routes,  } from 'react-router-dom'
import { Grid,  } from '@material-ui/core'
import Description from './components/Description'

import Navbar from './components/Navbar'

import MainContainer from './components/Main/MainContainer'

const App = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={2}>
                <Navbar /> 
            </Grid>
            <Grid item xs={10}>
                    <div className="app-wrapper-content">
                        <Routes>
                            <Route exact path='/' element={<Description />} />
                            <Route path='/description' element={<Description />} />
                            <Route path='/todo' element={<MainContainer />} />
                        </Routes>
                    </div>
            </Grid>
      </Grid>
    )
}

export default App

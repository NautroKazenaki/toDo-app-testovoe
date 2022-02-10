import React from 'react'
import PropTypes from 'prop-types';
import { Box, Tab, Tabs, Typography } from '@material-ui/core'
import { NavLink } from 'react-router-dom';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function VerticalTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
        >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                // sx={{ borderRight: 1, borderColor: 'divider' }}
            >
                <NavLink to="/description" style={{textDecoration: "none"}}>
                    <Tab label="Description" {...a11yProps(0)} />
                </NavLink>
                <NavLink to="/todo"  style={{textDecoration: "none"}}>
                    <Tab label="ToDo" {...a11yProps(1)} />
                </NavLink>
            </Tabs>
            <TabPanel value={value} index={0}>
                
            </TabPanel>
            <TabPanel value={value} index={1}>
                
            </TabPanel>
        </Box>
    );
}
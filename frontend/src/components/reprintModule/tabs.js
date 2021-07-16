import React from 'react';
import PropTypes from 'prop-types';

// css
import { makeStyles } from '@material-ui/core/styles';

// material
import Grid from "@material-ui/core/Grid";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div role="tabpanel" hidden={value !== index} id={`nav-tabpanel-${index}`} aria-labelledby={`nav-tab-${index}`} {...other}>
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `nav-tab-${index}`,
        'aria-controls': `nav-tabpanel-${index}`,
    };
}

function LinkTab(props) {
    return (
        <Tab component="a" onClick={(event) => { event.preventDefault(); }} {...props} />
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function NavTabs({ embozos, domicilioEmbozo, domicilioCategoria, exteriorCategoria, exteriorEmbozo }) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs variant="fullWidth" value={value} onChange={handleChange} aria-label="nav tabs example">
                    <LinkTab label="Domicilio" href="/drafts" {...a11yProps(0)} />
                    <LinkTab label="Sucursal" href="/trash" {...a11yProps(1)} />
                    <LinkTab label="Exterior" href="/spam" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Grid container spacing={3}>
                    <Grid item lg={2}>
                        <Typography variant="caption" display="block" gutterBottom>
                            Domicilio
                          </Typography>
                        <Typography className={classes.pos} color="textSecondary">

                        </Typography>
                    </Grid>
                    <Grid item lg={2}>
                        <Typography variant="caption" display="block" gutterBottom>
                            Embozo
                          </Typography>
                        {
                            embozos.filter(embozo => embozo.destino === 'Domicilio').map(fEmbozo => (
                                <Typography key="domicilioEmbozo" ref={domicilioEmbozo} className={classes.pos} color="textSecondary">
                                    {fEmbozo.embozo}
                                </Typography>))
                        }
                    </Grid>
                    <Grid item lg={2}>
                        <Typography variant="caption" display="block" gutterBottom>
                            Categoría
                          </Typography>
                        {
                            embozos.filter(embozo => embozo.destino === 'Domicilio').map(fEmbozo => (
                                <Typography key="domicilioCategoria" ref={domicilioCategoria} className={classes.pos} color="textSecondary">{fEmbozo.categoria}</Typography>))
                        }
                    </Grid>
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
                Page Two
      </TabPanel>
            <TabPanel value={value} index={2}>
                <Grid container spacing={3}>
                    <Grid item lg={2}>
                        <Typography variant="caption" display="block" gutterBottom>
                            Exterior
                          </Typography>
                        <Typography className={classes.pos} color="textSecondary">

                        </Typography>
                    </Grid>
                    <Grid item lg={2}>
                        <Typography variant="caption" display="block" gutterBottom>
                            Embozo
                          </Typography>
                        {
                            embozos.filter(embozo => embozo.destino === 'Exterior').map(fEmbozo => (
                                <Typography key="exteriorEmbozo" ref={exteriorEmbozo} className={classes.pos} color="textSecondary">{fEmbozo.embozo}</Typography>))
                        }
                    </Grid>
                    <Grid item lg={2}>
                        <Typography variant="caption" display="block" gutterBottom>
                            Categoría
                          </Typography>
                        {
                            embozos.filter(embozo => embozo.destino === 'Exterior').map(fEmbozo => (
                                <Typography key="exteriorCategoria" ref={exteriorCategoria} className={classes.pos} color="textSecondary">{fEmbozo.categoria}</Typography>))
                        }
                    </Grid>
                </Grid>
            </TabPanel>
        </div>
    );
}

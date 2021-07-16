import React from "react";
import Files from 'react-files'

// material
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

// icons
import QueueIcon from '@material-ui/icons/Queue';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import DeleteIcon from '@material-ui/icons/Delete';

// import css
import { makeStyles } from "@material-ui/core/styles";

// start css
const useStyles = makeStyles((theme) => ({

    root: { flexGrow: 1, borderRadius: 0 },
    text: { marginBottom: 0, padding: 0, margin: 0 },
    arrow: { paddingRight: 15, paddingLeft: 15, width: 10, verticalAlign: 'bottom' },
    alignItems: { alignItems: 'center' },
    filesListItem: { display: 'flex', alignItems: 'center' },
    fontSize: { fontSize: '0.75rem', margin: 0 },
    fontBlue: { fontSize: '0.75rem', margin: 0, color: 'blue' },
    fontRed: { fontSize: '0.75rem', margin: 0, color: 'red' }

}));
// end css

export default function UploadFile({ relation }) {

    //   // Style variables
    const classes = useStyles();

    //   // State variables
    const [files, setFiles] = React.useState([]);
    const [attached, setAttached] = React.useState(false);

    const onFilesChange = (filesToAdd) => {
        setFiles([...files, ...filesToAdd]);
        setAttached(filesToAdd.length > 0);
        relation.files = [...files, ...filesToAdd];
        relation.esAddFiles = true;
    }

    const onFilesError = (error, file) => {
        console.log('error code ' + error.code + ': ' + error.message)
    }

    const filesRemoveOne = (fileToRemove) => {
        let remainingFiles = files.filter(file => file.id !== fileToRemove.currentTarget.id);
        setFiles(remainingFiles);
        relation.files = remainingFiles;
        if (remainingFiles.length === 0) {
            setAttached(false);
            relation.esAddFiles = false;
        }
    }

    return (
        <Grid container spacing={3} className={classes.alignItems}>
            <Grid item lg={4}>
                <Typography className={attached ? classes.fontBlue : classes.fontSize} color="textSecondary" variant="h6" component="h6">
                    <FiberManualRecordIcon className={classes.arrow} />
                    {relation.tipoDocumental}
                </Typography>
            </Grid>
            <Grid item lg={1}>
                <Files className='files-dropzone' onChange={onFilesChange} onError={onFilesError} accepts={['image/png', '.pdf', '.xls', '.xlsx', '.doc', '.docx', '.txt', '.tif', '.tiff', '.csv', '.msg']}
                    multiple maxFileSize={5000000} minFileSize={0} clickable>
                    <label htmlFor="raised-button-file">
                        <Tooltip title="click para seleccionar uno o más archivos">
                            <IconButton variant="contained" style={{ color: '#4caf50' }} size="large" component="span">
                                <QueueIcon />
                            </IconButton>
                        </Tooltip>
                    </label>
                </Files>
            </Grid>
            <Grid item lg={7}>
                {
                    files.length > 0
                        ? <div className='files-list'>
                            <ul variant="caption" display="block" gutterBottom className={classes.text}>
                                {files.map((file) =>
                                    <li className={classes.filesListItem} key={file.id}>
                                        <div className='files-list-item-content'>
                                            <div className='files-list-item-content-item files-list-item-content-item-1'>
                                                <p className={classes.fontBlue}>
                                                    {file.name} <strong>({file.sizeReadable})</strong>
                                                </p>
                                            </div>
                                        </div>
                                        <Tooltip title="click para eliminar archivo">
                                            <IconButton id={file.id} onClick={filesRemoveOne.bind(file)} aria-label="delete" size="small">
                                                <DeleteIcon />
                                            </IconButton>
                                        </Tooltip>
                                    </li>
                                )}
                            </ul>
                        </div>
                        : <p className={classes.fontSize}>No se han seleccionado archivos.</p>
                }
            </Grid>
        </Grid>
    )
}
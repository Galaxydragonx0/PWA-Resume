
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/dClient";
import { Grid, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, withStyles, ButtonGroup, Button } from "@material-ui/core";
import ClientForm from "./ClientForm";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { useToasts } from "react-toast-notifications";



const styles = theme => ({
    root: {
        "& .MuiTableCell-head": {
            fontSize: "1.25rem"
        }
    },
    paper: {
        margin: theme.spacing(2),
        padding: theme.spacing(2)
    }
})




const Client = ({ classes, ...props }) => {
    const [currentId, setCurrentId] = useState(0)


    // used whenever the value of the state is changed 
    useEffect(() => {
        props.fetchAllDClients()
    }, [])//componentDidMount
    
    const { addToast } = useToasts()

    const onDelete = id => {
        if (window.confirm('Are you sure to delete this record?'))
            props.deleteDClients(id,()=>addToast("Deleted successfully", { appearance: 'info' }))
    }
    
    return (
        <Paper className={classes.paper} elevation={3}>
            <Grid container>
                <Grid item xs={6}>
                    <ClientForm {...({ currentId, setCurrentId })} />
                </Grid>
                <Grid item xs={6}>
                    <TableContainer>
                        <Table>
                            <TableHead className={classes.root}>
                                <TableRow>
                                    <TableCell>First Name</TableCell>
                                    <TableCell>Last Name</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Mobile</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    props.dClientList.map((record, index) => {
                                        return (<TableRow key={index} hover>
                                            <TableCell>{record.fname}</TableCell>
                                            <TableCell>{record.lname}</TableCell>
                                            <TableCell>{record.email}</TableCell>
                                            <TableCell>{record.mobile}</TableCell>
                                            <TableCell>
                                                <ButtonGroup variant="text">
                                                    <Button><EditIcon color="primary"
                                                        onClick={() => { setCurrentId(record.id) }} /></Button>
                                                    <Button><DeleteIcon color="secondary"
                                                        onClick={() => onDelete(record.id)} /></Button>
                                                </ButtonGroup>
                                            </TableCell>
                                        </TableRow>)
                                    })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Paper>

    );
}


const mapStateToProps = state => ({
    dClientList: state.dClient.list
    // We have stored the list in the reducers DClient list 
})

const mapActionToProps = {
    fetchAllDClients: actions.fetchAll,
    deleteDClients: actions.Delete
}




export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(Client));
// export default Client;
import React from 'react'
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

function JobApplication(props) {
   
    const useStyles = makeStyles((theme) => ({
        root: {
          width: '100%',
          maxWidth: 360,
          backgroundColor: theme.palette.background.paper,
        },
    }));
      
    const ListItemLink = (props) => {
        return <ListItem button component="a" {...props} />;
    }

    const classes = useStyles();
    const [checked, setChecked] = React.useState([1]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
            if (currentIndex === -1) {
            newChecked.push(value);
            } else {
            newChecked.splice(currentIndex, 1);
            }
            setChecked(newChecked);
    };

    let id = props.jobApp.id 

    return (
        <div className={classes.root} >
            {/* <div>
                <Link to={`/job_applications/${id}`} >
                    <h3 className="jas-title" style={{color: "black"}}> 
                        { props.jobApp.application_name } 
                    </h3>
                </Link>
            </div> */}

            <List dense className={classes.root}>
                {[0].map((value) => {
                    const labelId = `checkbox-list-label-${value}`;
                    return (
                    <ListItem key={value} button>
                         <ListItemLink href={`/job_applications/${id}`}>
                        <ListItemText id={labelId} primary={props.jobApp.application_name} />
                        </ListItemLink>
                    <ListItemSecondaryAction>
                        <Checkbox edge="start" onChange={handleToggle(value)} disableRipple
                                checked={checked.indexOf(value) !== -1} tabIndex={-1}
                                inputProps={{ 'aria-labelledby': labelId }} />
                    </ListItemSecondaryAction>
                    </ListItem>
                    );
                })}
                </List>
                {/* <List dense className={classes.root}>
                    {[0].map((value) => {
                        const labelId = `checkbox-list-secondary-label-${value}`;
                        return (
                        <ListItem key={value} button>
                                <List component="nav" aria-label="secondary mailbox folders">
                                <ListItemLink href={`/job_applications/${id}`}> 
                                <ListItemText primary={ props.jobApp.application_name } />
                                    </ListItemLink>
                                </List>
                            <ListItemSecondaryAction>
                                <Checkbox edge="end" onChange={handleToggle(value)}
                                    checked={checked.indexOf(value) !== -1}
                                    inputProps={{ 'aria-labelledby': labelId }} />
                            </ListItemSecondaryAction>
                        </ListItem>
                        );
                    })}
                </List> */}
        </div>
    )
}
export default JobApplication



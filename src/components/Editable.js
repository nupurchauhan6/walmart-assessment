import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import { red } from '@mui/material/colors';
import EditIcon from '@mui/icons-material/Edit';

const EditableComponent = (props) => {

    const [body, setBody] = useState(props.text);
    const [editable, setEditable] = useState(false);

    const handleClick = () => {
        setEditable(!editable);
    }

    const update  = () => {
        setEditable(!editable);
        props.update(body, props.data.id);
    }

    const styles = {
        container: {
            margin: 10,
            width: '-webkit-fill-available'
        },
        inputArea: {
            width: '-webkit-fill-available'
        }
    }

    return (
        <div style={styles.container} className="container row">
            <div className="col-8">
                {editable ? (
                    <TextField id="standard-basic" variant="standard" style={styles.inputArea} onBlur={update} value={body} onChange={e => setBody(e.target.value)} />
                ) : (
                    <span onClick={handleClick}>{body}</span>
                )}
            </div>
            <div className="col-2">
                <IconButton sx={{ color: red[500] }} onClick={() => props.delete(props.data.id)} size="large">
                    <DeleteIcon />
                </IconButton>
            </div>
            <div className="col-2">
                <IconButton onClick={handleClick} size="large">
                    <EditIcon />
                </IconButton>
            </div>
        </div>
    )

}

export default EditableComponent
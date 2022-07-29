import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const getPhotosUrl = "https://jsonplaceholder.typicode.com/photos/?albumId=";

const UserPhotosComponent = (props) => {

    const [photos, setPhotos] = useState({});
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const styles = {
        modalStyle: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 1000,
            height: 500,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
            overflow: 'scroll'
        },
        container: {
            display: 'inline-block',
            margin: 10
        },
        image: {
            width: 285,
            height: 255
        },
        title: {
            display: 'flex',
            width: 280
        }
    };

    useEffect(() => {
        getInitialPhotos()
    }, [])

    const getInitialPhotos = async () => {
        const response = await fetch(getPhotosUrl + props.album.id);
        const jsonData = await response.json();
        setPhotos(jsonData);
    }

    return (
        <div>
            <Button onClick={handleOpen}>{props.album.title}</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={styles.modalStyle}>
                    <Typography>
                        <strong>{props.album.title}</strong>
                    </Typography>
                    <Typography>
                        {photos && photos.length && (photos).map(photo =>
                            <div key={photo.id} style={styles.container}>
                                <img src={photo.url} alt={photo.id} style={styles.image}></img>
                                <br/>
                                <span style={styles.title}>{photo.title}</span>
                            </div>
                        )}
                    </Typography>
                </Box>
            </Modal>
        </div>
    );

}

export default UserPhotosComponent
import { useState, useEffect } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import UserPhotosComponent from './UserPhotos';

const getAlbumsUrl = "https://jsonplaceholder.typicode.com/albums/?userId=";

const UserAlbumComponent = (props) => {

    const [albums, setAlbums] = useState({});

    useEffect(() => {
        getInitialAlbums();
    }, [])

    const getInitialAlbums = async () => {
        const response = await fetch(getAlbumsUrl + props.userid);
        const jsonData = await response.json();
        setAlbums(jsonData);
    }

    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Albums</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {albums && albums.length && (albums).map(album =>
                        <div key={album.id}>
                            <UserPhotosComponent album={album} />
                        </div>
                    )}
                </AccordionDetails>
            </Accordion>
        </div>
    )

}

export default UserAlbumComponent
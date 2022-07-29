import Card from 'react-bootstrap/Card';
import { useEffect } from "react";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';
import logo2 from './images/2.png';

import { useNavigate } from "react-router-dom";

const UserCardComponent = (props) => {

    const navigate = useNavigate();

    const routeChange = () => {
        let path = `users/${props.user.id}`;
        navigate(path);
    }

    const styles = {
        cardContainer: {
            display: 'inline-block',
            margin: 5
        },
        card: {
            width: 200,
            minWidth: 250,
            maxWidth: 250,
            margin: 10
        },
        image: {
            width: 100,
            marginTop: 10,
            marginLeft: 'auto',
            marginRight: 'auto',
            display: 'block'
        }
    }

    useEffect(() => {
    }, [])
    
    return (
        <div style={styles.cardContainer}>
            <Card style={styles.card}>
                <Card.Img style={styles.image} src={logo2} />
                <Card.Body>
                    <Card.Text>
                        <OverlayTrigger
                            placement="right"
                            delay={{ show: 250, hide: 400 }}
                            overlay={
                                <Tooltip>
                                    <strong>{props.user.username} <br /> {props.user.email}</strong>
                                </Tooltip>
                            }
                        >
                            <span onClick={routeChange}>{props.user.name}</span>
                        </OverlayTrigger>
                    </Card.Text>
                    <Button onClick={routeChange}>View Profile</Button>
                </Card.Body>
            </Card>
        </div>
    );

}

export default UserCardComponent
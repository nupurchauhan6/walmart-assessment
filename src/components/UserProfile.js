import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import logo from './images/6.png';

const UserProfileComponent = (props) => {

    const [profile, setProfile] = useState({});

    useEffect(() => {
        let user = JSON.parse(localStorage.getItem("userid" + props.userid));
        setProfile(user);
    }, [])

    const styles = {
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
        },
        text: {
            textAlign: 'left',
            marginLeft: 20
        }
    }

    return (
        <div>
            <Card style={styles.card}>
                <Card.Img style={styles.image} src={logo} />
                <Card.Body>
                    <Card.Text>
                        <span style={styles.text}> <strong>Name:</strong> {profile.name}</span>
                        <span style={styles.text}> <strong>Username:</strong> {profile.username}</span>
                        <span style={styles.text}> <strong>Email:</strong> {profile.email}</span>
                        <span style={styles.text}> <strong>Website:</strong> {profile.website}</span>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default UserProfileComponent



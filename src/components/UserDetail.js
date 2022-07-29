import { useParams } from 'react-router-dom';
import UserPostComponent from "./UserPost";
import UserAlbumComponent from "./UserAlbum";
import UserProfileComponent from "./UserProfile"

const UserDetailComponent = () => {

    const { userid } = useParams()

    const styles = {
        body: {
            marginTop: 50,
            textAlign: '-webkit-center'
        },
        container: {
            margin: 10
        },
        h1: {
            textAlign: '-webkit-center',
            fontFamily: 'system-ui'
        }
    }

    return (
        <div style={styles.body} >
            <div>
                <h1>User Details</h1>
            </div>
            <div style={styles.container}>
                <UserProfileComponent userid={userid} />
            </div>
            <div style={styles.container}>
                <UserPostComponent userid={userid} />
            </div>
            <div style={styles.container}>
                <UserAlbumComponent userid={userid} />
            </div>
        </div>
    )
}

export default UserDetailComponent
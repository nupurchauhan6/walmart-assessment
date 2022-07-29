import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PostCommentComponent from './PostComment';
import EditableComponent from './Editable';
import { useState, useEffect } from "react";
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';

const getPostsUrl = "https://jsonplaceholder.typicode.com/posts/?userId=";

const UserPostComponent = (props) => {

    const [posts, setPosts] = useState({});
    const [expand, setExpand] = useState(false);
    const [filtered, setFiltered] = useState();

    const toggleAcordion = () => {
        setExpand((prev) => !prev);
    };

    useEffect(() => {
        getInitialPostsData();
    }, [])

    const getInitialPostsData = async () => {
        const response = await fetch(getPostsUrl + props.userid);
        const jsonData = await response.json();
        setPosts(jsonData);
        setFiltered(jsonData);
    }

    const styles = {
        postBody: {
            margin: 10
        },
        editor: {
            backgroundColor: 'aliceblue'
        }
    }

    const delPost = (postId) => {
        const tmp = posts.filter(p => {
            return p.id !== postId
        });
        setPosts(tmp)
        setFiltered(tmp);
    }

    const updatePost = (body, updatedPost) => {
        setPosts(
            posts.map(p => {
                if (p.id === updatedPost.id) {
                    p.body = body
                }
                return p
            })
        )
        setFiltered(posts);
    }

    const handleFiltering = (event) => {
        let val = event.target.value;
        const filteredData = posts.filter((el) => {
            if (val === '') {
                return el;
            }
            else {
                return el.title.toLowerCase().includes(val)
            }
        })
        setFiltered(filteredData);
    }

    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>Posts</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <>
                    <TextField sx={{ m: 1, width: '60ch'}} id="outlined-basic" label="Search" variant="outlined" onChange={handleFiltering} />
                    {filtered && filtered.length && (filtered).map(post =>
                        <Accordion key={post.id} style={styles.postBody} expanded={expand}>
                            <AccordionSummary>
                                <IconButton onClick={toggleAcordion} size="large">
                                    <ExpandCircleDownIcon />
                                </IconButton>
                                <EditableComponent
                                    data={post}
                                    text={post.title}
                                    key={post.id}
                                    delete={delPost}
                                    update={updatePost} />
                            </AccordionSummary>
                            <AccordionDetails style={styles.editor}>
                                <PostCommentComponent post={post}/>
                            </AccordionDetails>
                        </Accordion>
                    )}
                </>
            </AccordionDetails>
        </Accordion>
    )
}

export default UserPostComponent
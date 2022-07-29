import { useState, useEffect } from "react";
import EditableComponent from './Editable';
import Button from '@mui/material/Button';
import { v4 as uuidv4 } from "uuid";

const getCommentsUrl = "https://jsonplaceholder.typicode.com/comments/?postId=";

const PostCommentComponent = (props) => {
    const [comments, setComments] = useState({})

    useEffect(() => {
        getInitialComments();
    }, [])

    const getInitialComments = async () => {
        const response = await fetch(getCommentsUrl + props.post.id);
        const jsonData = await response.json();
        setComments(jsonData);
    }

    const delComment = (commentId) => {
        setComments([
            ...comments.filter(c => {
                return c.id !== commentId
            }),
        ])
    }

    const updateComment = (body, comment) => {
        setComments(
            comments.map(c => {
                if (c.id === comment.id) {
                    c.body = body
                }
                return c
            })
        )
    }

    const addComment = () => {
        let newState = [...comments];
        let newComment = {
            postId: props.post.id,
            id: uuidv4(),
            email: "",
            name: "",
            body: "Default data"
        };
        newState.push(newComment);
        setComments(newState);
    }

    return (
        <div>
            <Button variant="outlined" onClick={() => addComment()}>Add New Comment</Button>
            {comments && comments.length > 0 && comments.map(comment =>
                <EditableComponent data={comment}
                    text={comment.body}
                    key={comment.id}
                    delete={delComment}
                    update={updateComment} />
            )}
        </div>
    );
}

export default PostCommentComponent
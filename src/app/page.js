"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Post from "./components/post";
import {
    Spinner,
    Heading,
    AbsoluteCenter,
    Divider,
    Box,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "./store/store";
import { setPosts, getPostsState } from "./store/slices/postsSlice";

const Home = () => {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const posts = useSelector(getPostsState);

    const getPosts = async () => {
        try {
            const res = await axios.get(
                "https://jsonplaceholder.typicode.com/posts"
            );
            if (res) {
                dispatch(setPosts(res.data));
            }
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (loading) getPosts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {loading && <Spinner />}
            {!loading && (
                <>
                    <Box position='relative' padding='10' mt={10}>
                        <Divider />
                        <AbsoluteCenter bg='white' px='4'>
                            <Heading>Posts</Heading>
                        </AbsoluteCenter>
                    </Box>
                    {posts.length !== 0 ? (
                        <>
                            {posts.map((post) => (
                                <Post key={post.id} post={post} />
                            ))}
                        </>
                    ) : (
                        <Heading>No Posts!</Heading>
                    )}
                </>
            )}
        </>
    );
};

export default Home;

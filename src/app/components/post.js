import {
    Card,
    CardHeader,
    CardBody,
    Heading,
    Stack,
    StackDivider,
    Text,
    Box,
} from "@chakra-ui/react";
import Link from "next/link";
import { useDispatch } from "../store/store";
import { setPost } from "../store/slices/postSlice";

const Post = ({ post }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setPost(post));
    };

    return (
        <Link href={`/posts/${post.id}`}>
            <Card
                variant='outline'
                onClick={handleClick}
                my={10}
                bg='#f9f9f9'
                borderColor='#eee'
                boxShadow='lg'
                transition='all 0.25s ease-in-out'
                _hover={{ transform: "translateY(-5px)", borderColor: "#bbb" }}
            >
                <CardHeader>
                    <Heading fontSize={22} textTransform='capitalize'>
                        {post.title}
                    </Heading>
                </CardHeader>
            </Card>
        </Link>
    );
};

export default Post;

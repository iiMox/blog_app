import { useSelector } from "../store/store";
import { getPostState } from "../store/slices/postSlice";
import {
    Heading,
    Text,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Divider,
    Image,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

const PostPage = () => {
    const post = useSelector(getPostState);
    return (
        <>
            <Breadcrumb
                spacing='8px'
                separator={<ChevronRightIcon color='gray.500' />}
                mt={5}
                mb={10}
            >
                <BreadcrumbItem>
                    <BreadcrumbLink href='/'>Posts</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink href='' isCurrentPage>
                        {post.title}
                    </BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>

            <Heading fontSize={40} mb={10}>
                {post.title}
            </Heading>
            <Image
                mb={5}
                src='https://via.placeholder.com/600/92c952'
                alt='article Image'
                width='100%'
                maxHeight='500px'
                objectFit='cover'
            />
            <Divider />
            <Text fontSize={18} mt={10}>
                {post.body}
            </Text>
        </>
    );
};

export default PostPage;

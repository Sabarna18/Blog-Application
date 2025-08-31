import React, { useState, useEffect } from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";
import { useDispatch, useSelector } from 'react-redux';
import { setPosts as setPostSlice } from '../store/postSlice';

function AllPosts() {
    const [posts, setPosts] = useState([]);
    const dispatch = useDispatch();
    // const [user, setUser] = useState(null);
    // const user = useSelector((state) => state.auth.userData.email)
    


    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            if (posts) {
                console.log(posts.documents);
                setPosts(posts.documents);
                // dispatch(setPostSlice(posts.documents))    post slice in state
            }
        })
    }, [])
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts
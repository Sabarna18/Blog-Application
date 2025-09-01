import React, { use, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container, Logo } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const [isAuthor, setIsauthor] = useState(false);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);


    useEffect(() => {

        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPost(post);
                    setIsauthor(post && userData ? post.userId === userData.$id : false)
                } else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/all-posts");
            }
        });
    };

    return post ? (
        <div className="p-3">
            <Container className={`bg-pink-200 rounded-2xl p-4 m-2`}>
                <div className="w-full p-6 bg-slate-900 flex justify-center mb-4 relative border rounded-xl">
                    <img
                        src={`${appwriteService.getFilePreview(post.featuredImage)}&mode=admin`}
                        alt={post.title}
                        className="rounded-xl w-full h-150 object-cover"
                    />

                    {isAuthor && (
                        <div className="absolute p-4 right-6 top-6">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-700" className="mr-3 border-transparent border-2  transition duration-300 hover:border-slate-900 hover:bg-green-900 cursor-pointer">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-700" className="mr-3 cursor-pointer  border-transparent border-2  transition duration-300 hover:border-slate-900 hover:bg-red-900" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                <div className="w-full mb-6">
                    <h1 className="text-2xl font-bold">{post.title}</h1>
                </div>
                <div className="browser-css">
                    {parse(post.content)}
                    <h3 className=' bg-slate-500 cursor-pointer inline-block hover:bg-slate-300 transition duration-300
                    hover:border-black border-2 border-transparent rounded-md m-4 p-2 text-black'> posted by: {post.createdBy}</h3>

                </div>
                <Logo />
            </Container>
        </div>
    ) : null;
}

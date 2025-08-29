import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config";
import { Container, PostCard } from '../components'

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
        })
    }, [])

    // if (posts) {
    //     if (posts.length === 0) {
    //         return (
    //             <div className="w-full bg-[url('https://media.istockphoto.com/id/1570132128/vector/abstract-gradient-black-and-gray-stripe-lines-decorative-artwork-overalpping-with-luxury.jpg?s=612x612&w=0&k=20&c=3mgA_9c28y1-8es4nj-O3z4u0CWkr_jGAXfOXYwyWfg=')] py-8 mt-4 text-center">
    //                 <Container>
    //                     <div className="flex flex-wrap">
    //                         <div className="p-2 w-full">
    //                             <div className="w-full bg-white/80 border border-black/10 rounded-xl p-10">
    //                                 <h2 className="text-2xl font-bold mb-4">Welcome to the CORE</h2>
    //                                 <p className="text-black/60">This is a space where ideas, stories, and knowledge come together. Whether you’re here to learn something new, explore fresh perspectives, or simply enjoy good writing, you’ll find content crafted with clarity and purpose.

    //                                     Our blog is designed to be simple, distraction-free, and reader-friendly—because we believe words should speak louder than clutter. Each post is curated to bring value, whether it’s a quick tip, a deep dive, or a personal reflection.

    //                                     Stay tuned for regular updates, share your thoughts in the comments, and be part of a growing community of curious minds.</p>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </Container>
    //             </div>
    //         )
    //     }
    // }
    // return (
    //     <div className='w-full py-8'>
    //         <Container>
    //             <div className='flex flex-wrap'>
    //                 {posts.map((post) => (
    //                     <div key={post.$id} className='p-2 w-1/4'>
    //                         <PostCard {...post} />
    //                     </div>
    //                 ))}
    //             </div>
    //             <div>Welcomee to core world</div>
    //         </Container>
    //     </div>
    // )

    return (
        <div className="w-full bg-[url('https://media.istockphoto.com/id/1570132128/vector/abstract-gradient-black-and-gray-stripe-lines-decorative-artwork-overalpping-with-luxury.jpg?s=612x612&w=0&k=20&c=3mgA_9c28y1-8es4nj-O3z4u0CWkr_jGAXfOXYwyWfg=')] py-8 mt-4 text-center">
            <Container>
                <div className="flex flex-wrap">
                    <div className="p-2 w-full">
                        <div className="w-full bg-white/80 border border-black/10 rounded-xl p-10">
                            <h2 className="text-2xl font-bold mb-4">Welcome to the CORE</h2>
                            <p className="text-black/60">This is a space where ideas, stories, and knowledge come together. Whether you’re here to learn something new, explore fresh perspectives, or simply enjoy good writing, you’ll find content crafted with clarity and purpose.

                                Our blog is designed to be simple, distraction-free, and reader-friendly—because we believe words should speak louder than clutter. Each post is curated to bring value, whether it’s a quick tip, a deep dive, or a personal reflection.

                                Stay tuned for regular updates, share your thoughts in the comments, and be part of a growing community of curious minds.</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Home
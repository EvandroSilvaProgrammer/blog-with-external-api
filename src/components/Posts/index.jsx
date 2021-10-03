import './styles.css';

import { PostCard } from "../PostCard";

export const Posts = ( { posts } ) => (
    <div className="posts">
        {posts.map(post => (
            <PostCard
                key={post.id}
                id={post.id}
                cover={post.cover}
                title={post.title}
                body={post.body}
            //post={post} //Usado para pegar tudo que está sendo passado pelo array
            />
        ))}
    </div>
);

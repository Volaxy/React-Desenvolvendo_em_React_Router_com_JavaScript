import { Route, Routes, useParams } from "react-router-dom";

import "./assets/css/post.css";
import styles from "./assets/css/post.module.css";

import posts from "assets/json/posts.json";
import ModelPost from "components/ModelPost/ModelPost";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import NotFound from "pages/NotFound/NotFound";
import DefaultPage from "components/DefaultPage/DefaultPage";
import PostCard from "components/PostCard/PostCard";

export default function Post() {
    // The "useParams()" return a object with the parameters sends by the URL of the browser
    const parameters = useParams();

    const post = posts.find(post => post.id === Number(parameters.id));

    if(!post) {
        return (
            <NotFound />
        )
    }

    return (
        <Routes>
            <Route path="*" element={<DefaultPage />}>
                <Route index element={
                    <ModelPost
                        coverPhoto={`/assets/posts/${post.id}/capa.png`}
                        title={post.titulo}
                    >
                        {/* The text is created dynamically, so the styles is puted based on a father tag of the text */}
                        <div className="post-markdown-container">
                            {/* This is a tag where the markdown text is converted in HTML tags */}
                            <ReactMarkdown>
                                {post.texto}
                            </ReactMarkdown>
                        </div>

                        <aside>
                            <h2 className={styles.otherPostsTitle}>Other posts you might like</h2>

                            <ul className={styles.recomendedPosts}>
                                {posts.filter(post => post.id !== Number(parameters.id))
                                    .sort((a, b) => 0.5 - Math.random())
                                    .slice(0, 4)
                                    .map(post => (
                                        <li key={post.id}>
                                            <PostCard post={post} />
                                        </li>
                                    ))}
                            </ul>
                        </aside>
                    </ModelPost>
                } />
            </Route>
        </Routes>
    )
}

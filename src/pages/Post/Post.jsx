import { useParams } from "react-router-dom";

import "./assets/css/post.css";

import posts from "assets/json/posts.json";
import ModelPost from "components/ModelPost/ModelPost";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function Post() {
    // The "useParams()" return a object with the parameters sends by the URL of the browser
    const parameters = useParams();

    const post = posts.find(post => post.id === Number(parameters.id));

    if(!post) {
        return (
            <h1>Page not found!</h1>
        )
    }

    return (
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
        </ModelPost>
    )
}

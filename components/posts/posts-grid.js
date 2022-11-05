import classes from "./posts-gird.module.css";
import PostItem from "./post-item";


function PostGrid(props) {

  const { posts } = props;
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem  key={post.slug} post={post} />
      ))}
    </ul>
  );
}

export default PostGrid;

const BlogItem = ({ image, title, content }) => {
  return (
    <div className="blog_list">
      <img src={image} />
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};
export default BlogItem;

import React, { useState } from 'react';
import './Comments.css';

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState('');

  const commentsStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${process.env.PUBLIC_URL}/images/comment.jpeg)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (commentInput.trim()) {
      setComments([...comments, commentInput]);
      setCommentInput('');
    }
  };

  const handleDelete = (index) => {
    setComments(comments.filter((_, i) => i !== index));
  };

  return (
    <div style={commentsStyle}>
      <section className="content">
        <h1>Comments</h1>
        <p>We value your feedback! Share Your Thoughts</p>

        <form className="comment-form" onSubmit={handleSubmit}>
          <textarea
            rows="5"
            placeholder="Write your comment here..."
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>
        
        <div className="comments-list">
          <h2>User Comments:</h2>
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>
                <span>{comment}</span>
                <button className="trash-icon" onClick={() => handleDelete(index)}>🗑️</button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Comments;

import React, { useState, useEffect } from "react";
import "./Comments.css";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const commentsStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${process.env.PUBLIC_URL}/images/comment.jpeg)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/comments");
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.error("Error fetching comments:", error);
      setError("Unable to load comments. Please try again later.");
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    // Check if both fields are empty
    if (!commentInput.trim() && !image) {
      setError("Please provide a comment or an image.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ comment: commentInput || null, image: image || null }),
      });
      const result = await response.json();

      if (result.success) {
        setSuccess("Comment added successfully!");
        setCommentInput("");
        setImage(null);
        fetchComments(); // Refresh comments list
      } else {
        setError(result.message || "Failed to add comment.");
      }
    } catch (err) {
      console.error("Error submitting comment:", err);
      setError("An error occurred. Please try again.");
    }
  };

  const handleDelete = async (id) => {
    setError("");
    setSuccess("");

    try {
      const response = await fetch(`http://localhost:3001/api/comments/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete the comment.");
      }

      const result = await response.json();

      if (result.success) {
        setSuccess("Comment deleted successfully!");
        fetchComments(); // Refresh comments list
      } else {
        setError(result.message || "Failed to delete the comment.");
      }
    } catch (err) {
      console.error("Error deleting comment:", err);
      setError("An error occurred while deleting the comment. Please try again.");
    }
  };

  return (
    <div style={commentsStyle}>
      <section className="content">
        <h1>Comments</h1>
        <p>Share Your Thoughts and Photos with other Madridistas</p>

        <form className="comment-form" onSubmit={handleSubmit}>
          <textarea
            rows="5"
            placeholder="Write your comment here..."
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
          ></textarea>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          <button type="submit">Submit</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {success && <p style={{ color: "green" }}>{success}</p>}
        </form>

        <div className="comments-list">
          <h2>User Comments:</h2>
          <ul>
            {comments.map((comment) => (
              <li key={comment.id}>
                <div>
                  {comment.comment && <p>{comment.comment}</p>}
                  {comment.image && (
                    <img
                      src={comment.image}
                      alt="User Upload"
                      style={{ width: "100px", height: "100px" }}
                    />
                  )}
                </div>
                <button
                  className="trash-icon"
                  onClick={() => handleDelete(comment.id)}
                >
                  🗑️
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Comments;

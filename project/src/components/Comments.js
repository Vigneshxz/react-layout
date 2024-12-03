import React, { useState, useEffect } from "react";
import "./Comments.css";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [editCommentId, setEditCommentId] = useState(null); // ID of the comment being edited

  const BACKEND_URL = "https://real-madrid-api.onrender.com";

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
      const response = await fetch(`${BACKEND_URL}/api/comments`);
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

    const trimmedComment = commentInput ? commentInput.trim() : null;

    // Check if both fields are empty
    if (!trimmedComment && !image) {
      setError("Please provide a comment or an image.");
      return;
    }

    if (editCommentId) {
      // Update existing comment
      try {
        const response = await fetch(`${BACKEND_URL}/api/comments/${editCommentId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ comment: trimmedComment, image: image || null }),
        });
        const result = await response.json();

        if (result.success) {
          setSuccess("Comment updated successfully!");
          setCommentInput("");
          setImage(null);
          setEditCommentId(null);
          fetchComments();
        } else {
          setError(result.message || "Failed to update comment.");
        }
      } catch (err) {
        console.error("Error updating comment:", err);
        setError("An error occurred. Please try again.");
      }
    } else {
      // Add a new comment
      try {
        const response = await fetch(`${BACKEND_URL}/api/comments`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ comment: trimmedComment, image: image || null }),
        });
        const result = await response.json();

        if (result.success) {
          setSuccess("Comment added successfully!");
          setCommentInput("");
          setImage(null);
          fetchComments();
        } else {
          setError(result.message || "Failed to add comment.");
        }
      } catch (err) {
        console.error("Error submitting comment:", err);
        setError("An error occurred. Please try again.");
      }
    }
  };

  const handleEdit = (id, currentComment, currentImage) => {
    setEditCommentId(id);
    setCommentInput(currentComment || "");
    setImage(currentImage || null);
  };

  const handleDelete = async (id) => {
    setError("");
    setSuccess("");

    try {
      const response = await fetch(`${BACKEND_URL}/api/comments/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete the comment.");
      }

      const result = await response.json();

      if (result.success) {
        setSuccess("Comment deleted successfully!");
        fetchComments();
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
          <button type="submit">{editCommentId ? "Update Comment" : "Submit"}</button>
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
                  className="edit-icon"
                  onClick={() => handleEdit(comment.id, comment.comment, comment.image)}
                >
                  ✏️ Edit
                </button>
                <button
                  className="trash-icon"
                  onClick={() => handleDelete(comment.id)}
                >
                  🗑️ Delete
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

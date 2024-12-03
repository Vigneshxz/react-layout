import React, { useState, useEffect } from "react";
import "./Comments.css";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [editingComment, setEditingComment] = useState(null);
  const [editInput, setEditInput] = useState("");
  const [editImage, setEditImage] = useState(null);

  const BACKEND_URL = "http://localhost:3001"; // Update this to your Render backend URL for deployment

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

  const handleImageChange = (e, setImageCallback) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImageCallback(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    if (!commentInput.trim() && !image) {
      setError("Please provide a comment or an image.");
      return;
    }

    try {
      const response = await fetch(`${BACKEND_URL}/api/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ comment: commentInput || null, image: image || null }),
      });

      if (response.ok) {
        const result = await response.json();
        setSuccess("Comment added successfully!");
        setCommentInput("");
        setImage(null);
        fetchComments();
      } else {
        const result = await response.json();
        setError(result.message || "Failed to add comment.");
      }
    } catch (err) {
      console.error("Error submitting comment:", err);
      setError("An error occurred. Please try again.");
    }
  };

  const handleEdit = async (id) => {
    setError("");
    setSuccess("");

    if (!editInput.trim() && !editImage) {
      setError("Please provide updated text or an image.");
      return;
    }

    try {
      const response = await fetch(`${BACKEND_URL}/api/comments/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ comment: editInput || null, image: editImage || null }),
      });

      if (response.ok) {
        const result = await response.json();
        setSuccess("Comment updated successfully!");
        setEditingComment(null);
        fetchComments();
      } else {
        const result = await response.json();
        setError(result.message || "Failed to update the comment.");
      }
    } catch (err) {
      console.error("Error editing comment:", err);
      setError("An error occurred. Please try again.");
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${BACKEND_URL}/api/comments/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setSuccess("Comment deleted successfully!");
        fetchComments();
      } else {
        const result = await response.json();
        setError(result.message || "Failed to delete the comment.");
      }
    } catch (err) {
      console.error("Error deleting comment:", err);
      setError("An error occurred while deleting the comment.");
    }
  };

  return (
    <div className="comments-page">
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
            onChange={(e) => handleImageChange(e, setImage)}
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
                {comment.image && (
                  <img
                    src={comment.image}
                    alt="User Upload"
                    className="comment-image"
                  />
                )}
                <div className="text">
                  {comment.comment && <p>{comment.comment}</p>}
                </div>
                {editingComment === comment.id ? (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleEdit(comment.id);
                    }}
                  >
                    <textarea
                      rows="5"
                      value={editInput}
                      placeholder="Update your comment..."
                      onChange={(e) => setEditInput(e.target.value)}
                    ></textarea>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageChange(e, setEditImage)}
                    />
                    <button type="submit">Save</button>
                    <button onClick={() => setEditingComment(null)}>Cancel</button>
                  </form>
                ) : (
                  <>
                    <button onClick={() => setEditingComment(comment.id)}>Edit</button>
                    <button onClick={() => handleDelete(comment.id)}>Delete</button>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Comments;

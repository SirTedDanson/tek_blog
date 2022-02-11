async function commentFormHandler(event) {
  event.preventDefault();

  const comment_text = document.getElementById("comment").value.trim();
  const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  console.log("TEXT: ",comment_text)
  console.log("ID: ", post_id)

  if (comment_text) {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({
        post_id,
        comment_text,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

document
  .getElementById("comment-btn")
  .addEventListener("click", commentFormHandler);

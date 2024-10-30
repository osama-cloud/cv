// script.js

// Function to handle sharing
function sharePost(postTitle) {
    if (navigator.share) {
        navigator.share({
            title: postTitle,
            url: window.location.href, // Use the specific post URL if needed
        })
        .then(() => console.log('Post shared successfully'))
        .catch(error => console.error('Error sharing:', error));
    } else {
        alert("Sharing not supported on this browser.");
    }
}

// Function to copy the current URL to clipboard
function copyLink() {
    navigator.clipboard.writeText(window.location.href)
        .then(() => {
            alert('Link copied to clipboard!');
        })
        .catch(err => {
            console.error('Could not copy text: ', err);
        });
}

// Function to handle bookmarking
function bookmarkPost(postTitle) {
    // Placeholder for bookmarking functionality
    alert(`Bookmarking post: ${postTitle}`);
}

// Add event listeners to icons and buttons
document.querySelectorAll('.post-item').forEach((postItem) => {
    const postTitle = postItem.querySelector('h3').innerText;

    // Get the icons and Read More button
    const shareIcon = postItem.querySelector('.bx-share');
    const linkAltIcon = postItem.querySelector('.bx-link-alt');
    const copyIcon = postItem.querySelector('.bx-copy');
    const bookmarkIcon = postItem.querySelector('.bx-bookmark-plus');
    const readMoreButton = postItem.querySelector('button');

    // Share icon click event
    if (shareIcon) {
        shareIcon.addEventListener('click', () => sharePost(postTitle));
    }

    // Copy link icon click event
    if (copyIcon) {
        copyIcon.addEventListener('click', copyLink);
    }

    // Bookmark icon click event
    if (bookmarkIcon) {
        bookmarkIcon.addEventListener('click', () => bookmarkPost(postTitle));
    }

    // Read More button click event
    if (readMoreButton) {
        readMoreButton.addEventListener('click', () => {
            alert(`Redirecting to read more about: ${postTitle}`);
            // Redirect to the actual post page here, e.g.:
            // window.location.href = `post-${postTitle}.html`; // Update with the correct URL
        });
    }

    // Link Alt icon click event
    if (linkAltIcon) {
        linkAltIcon.addEventListener('click', () => {
            // Open the post link in a new tab or copy the link
            alert(`Post URL: ${window.location.href}`); // Modify to use specific post URL if needed
            // Example: window.open(`post-${postTitle}.html`, '_blank'); // Change this to the actual URL
        });
    }
});

let selectedButton = null; // Track the currently selected button

function filterPosts(tag) {
    document.querySelectorAll('.post').forEach(post => {
        const tags = post.dataset.tags.split(",");

        if (!tag || tags.includes(tag)) {
            post.style.display = "block";
        } else {
            post.style.display = "none";
        }

    })
}

// TODO - Add filtering of posts
document.querySelectorAll('.tags button').forEach(button => {
    button.addEventListener('click', function () {
        // update color of selected/deselected tags
        if (this === selectedButton) {
            this.style.backgroundColor = 'var(--accent-color)';
            selectedButton = null;
        } else {
            if (selectedButton) {
                selectedButton.style.backgroundColor = 'var(--accent-color)';
            }
            this.style.backgroundColor = 'var(--background-color)';
            selectedButton = this;
        }
        // update visibility of posts to just selectedButton tag
        const tag = (selectedButton) ? selectedButton.dataset.tag : null; 
        filterPosts(tag);
    });
});
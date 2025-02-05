let selectedButton = null; // Track the currently selected button

function filterPosts(tag) {
    console.log('sup')
    document.querySelectorAll('.post').forEach(post => {
        const tags = post.dataset.tags.split(",");
        console.log(tags)

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
        if (this === selectedButton) {
            this.style.backgroundColor = "#000000";
            selectedButton = null;
        } else {
            if (selectedButton) {
                selectedButton.style.backgroundColor = "#000000";
            }
            this.style.backgroundColor = "#8e2740";
            selectedButton = this;
        }
        // update visibility to just selectedButton tag
        const tag = (selectedButton) ? selectedButton.dataset.tag : null; 
        filterPosts(tag);
    });
});
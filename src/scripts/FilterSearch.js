function filterPosts(tag) {
    document.querySelectorAll('.post').forEach(post => {
        const tags = post.dataset.tags.split(",");
        const desc = post.dataset.context.split(" ");
        const title = post.dataset.title.split(" ");
        let allContent = [...tags, ...desc, ...title];

        for (let i = 0; i < allContent.length; i++) {
            if (!tag || allContent[i].toLowerCase().includes(tag.toLowerCase())) {
                post.style.display = "block";
                break;
                
            } else {
                post.style.display = "none";
            }
        }
    })
}

function clearButtons() {
    document.querySelectorAll('.tags button').forEach(button => {
        button.style.backgroundColor = 'var(--accent-color)';
    })
}

document.getElementById('inputField')
    .addEventListener("input", (event) =>
    {
        const inputValue = event.target.value;
        filterPosts(inputValue);
        clearButtons();
    }
)
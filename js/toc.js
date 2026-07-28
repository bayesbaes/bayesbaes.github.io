document.addEventListener("DOMContentLoaded", function() {
  const postContent = document.querySelector('.post-content');
  const tocList = document.getElementById('toc-list');
  
  if (!postContent || !tocList) return;

  // Find all H2 and H3 headings inside the post
  const headings = postContent.querySelectorAll('h2, h3');

  headings.forEach((heading, index) => {
    // Generate an ID if Jekyll hasn't automatically given it one
    if (!heading.id) {
      heading.id = heading.textContent
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
    }

    // Create the sidebar list item
    const listItem = document.createElement('li');
    listItem.style.marginBottom = '10px';
    
    // Indent H3 items slightly for hierarchy
    if (heading.tagName === 'H3') {
      listItem.style.paddingLeft = '15px';
      listItem.style.fontSize = '0.9em';
    }

    // Create the anchor link
    const link = document.createElement('a');
    link.href = `#${heading.id}`;
    link.textContent = heading.textContent;
    link.style.textDecoration = 'none';
    link.style.color = '#0366d6'; // GitHub blue

    listItem.appendChild(link);
    tocList.appendChild(listItem);
  });
});

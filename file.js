<script>
    document.getElementById("searchForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting (page reload)
        
        let query = document.getElementById("searchQuery").value.toLowerCase(); // Get the search query and convert to lowercase
        let results = ""; // This will hold the search results

        // Example data of poems (replace with your actual data source)
        let poems = [
            { title: "Ablaze Affections", author: "Cornelius", excerpt: "Two hearts burn as our skin ignites..." },
            { title: "Whispering Winds", author: "Diana", excerpt: "The wind whispers secrets across the sky..." },
            // Add more poems here
        ];

        // Search through the poems array
        poems.forEach(function(poem) {
            if (poem.title.toLowerCase().includes(query) || poem.author.toLowerCase().includes(query)) {
                results += `
                    <div class="poem-result">
                        <h3>${poem.title}</h3>
                        <p><strong>Author:</strong> ${poem.author}</p>
                        <p>${poem.excerpt}</p>
                    </div>
                `;
            }
        });

        // Display the search results
        document.getElementById("searchResults").innerHTML = results || "<p>No results found.</p>";
    });
</script>

axios.get('djs_public.json')
  .then(function(response) {
    // Define the DJ names and their corresponding URLs
    const djs = response.data;

	// Define a function that returns an array of fuzzy search results
	function fuzzySearch(query) {
	  const results = [];
	  for (const dj of djs) {
		if (dj.name.toLowerCase().includes(query.toLowerCase())) {
		  const urlWithPrefix = `rtspt://stream.vrcdn.live/live/${dj.url}`;
		  results.push({ name: dj.name, url: urlWithPrefix });
		}
	  }
	  if(query.length == 0){
		  return [];
	  }

	  return results;
	}
	
	
	$(()=>{
		var su = false;
		$("#signups").hide();
		$("#signupsbtn").click(function(){
			if(!su){
				$("#signups").show();
				$("#signupsbtn").val("Close signup form");
				su= true;
			}else{
				$("#signups").remove();
				$("#signupsbtn").remove();
				su= false;
			}
				
		});
	});

    // Define a function that copies a text to the clipboard
    function copyTextToClipboard(text) {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }

    // Handle key presses in the search input field
    $("#dj-search-input").on("input", function() {
      const query = $(this).val();
      const results = fuzzySearch(query);
      const searchResultsDiv = $("#search-results");
      searchResultsDiv.empty();
      results.forEach(function(result) {
		  const cardDiv = $("<div>").addClass("card");
		  const nameSpan = $("<span>").addClass("dj-name").text(result.name);
		  const urlSpan = $("<span>").addClass("dj-url").text(result.url);
		  const copyButton = $("<button>").addClass("copy-button").html('<i class="fas fa-copy mr-2"></i> Copy to clipboard');
		  const copyDiv = $("<div>").append(copyButton);
		  const djInfoDiv = $("<div>").addClass("dj-info").append(nameSpan).append(urlSpan);
		  cardDiv.append(djInfoDiv).append(copyDiv);
		  copyButton.click(function() {
			copyTextToClipboard(result.url);
			copyButton.html('<i class="fas fa-check mr-2"></i> Copied to clipboard');
			setTimeout(function() {
			  copyButton.html('<i class="fas fa-copy mr-2"></i> Copy to clipboard');
			}, 2000);
		  });
		  searchResultsDiv.append(cardDiv);
		});
    });
  })
  .catch(function(error) {
    console.error('Error loading DJ data:', error);
  });

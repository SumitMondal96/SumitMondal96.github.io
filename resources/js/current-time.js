    // Create a function to get the current time.
    function getCurrentTime() {
      // Create a new Date object.
      var date = new Date();

      // Get the current hour, minute, and second.
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var seconds = date.getSeconds();

      // Format the time string.
      var timeString = hours + ":" + minutes + ":" + seconds;

      // Return the time string.
      return timeString;
    }

    // Set the interval to update the time every second.
    setInterval(function() {
      // Get the current time.
      var timeString = getCurrentTime();

      // Update the HTML element with the current time.
      document.getElementById("present-time").innerHTML = timeString;
    }, 1000);
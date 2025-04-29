(function() {
  Array.prototype.forEach.call(
    document.getElementsByClassName("input"),
    (input) => {
      input.timeout = null;
      var current = input.getElementsByClassName("current")[0];
      input.history = parseInt(current.value);
      var clickHandler = function (operation) {
        return function (event) {
          current.value = parseInt(current.value) + operation;
          clearTimeout(input.timeout);
          input.timeout = setTimeout(() => {
            var newEntry = document.createElement("li");
            if (input.history == parseInt(current.value)) {
              return;
            }
            newEntry.innerText = input.history;
            input.history = parseInt(current.value);
            input.parentElement
              .getElementsByClassName("history")[0]
              .append(newEntry);
            newEntry.scrollIntoView({
              behavior: "smooth",
              block: "end",
              inline: "nearest",
            });
          }, 750);
        };
      };

      input.getElementsByClassName("up")[0].onclick = clickHandler(1);
      input.getElementsByClassName("down")[0].onclick = clickHandler(-1);
    },
  );
})();

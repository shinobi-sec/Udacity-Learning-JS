var umbrella = {
    color: "pink",
    isOpen: false,
    open: () => {
        if (umbrella.isOpen === true) {
            return "The umbrella is already opened!";
        } else {
            umbrella.isOpen = true;
            return "Julia opens the umbrella!";
        }
    },
    close: () => {
        if (umbrella.isOpen === false) {
            return "The umbrella is already closed!"
        } else {
            umbrella.isOpen = false;
            return "Julia closed the umbrella!";
        }
    }
}
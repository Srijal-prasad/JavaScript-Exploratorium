// Example state comparison
const prevState = {
    user: {
        name: "Sri",
        details: {
            age: 30,
            location: "India"
        }
    }
};

const currState = {
    user: {
        name: "Sri",
        details: {
            age: 31,
            location: "India"
        }
    }
};

if (!deepEqual(prevState, currState)) {
    console.log("State has changed, re-render the component");
}

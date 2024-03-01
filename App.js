const heading = React.createElement("h1", {id: "heading", xyz: "hey"}, "Hello World From React!");

const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement("div", {id: "parent"}, 
    React.createElement("div", {id: "child"}, 
    React.createElement("h1", {}, "I am an H1 tag")
));

const parentWithSiblings = React.createElement("div", {id: "parent"}, 
    React.createElement("div", {id: "child"}, 
    [
        React.createElement("h1", {}, "I am an H1 tag"),
        React.createElement("h2", {}, "Hey, I am h2 tag")
    ]
));

root.render(parentWithSiblings);
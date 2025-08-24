// const heading = React.createElement("h1", {id:"header"}, "Hello World From React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

/*  <div id="parent">
 *     <div id="child">
 *       <h1>IAm h1</h1>
 *        <h2>IAm h2</h2>
 *      </div>
 *  <div id="child2">
 *       <h1>IAm h1</h1>
 *        <h2>IAm h2</h2>
 *      </div>
 *   </div>
 */

const head = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Iam h1 tag"),
    React.createElement("h2", {}, "Iam h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Iam h1 tag"),
    React.createElement("h2", {}, "Iam h2 tag"),
  ]),
]);
console.log(head);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(head);

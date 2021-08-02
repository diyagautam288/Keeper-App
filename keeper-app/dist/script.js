function App() {
  const [notes, setNotes] = React.useState([]);//array of note

  function addNotes(n)
  {
    setNotes(preNote => {
      return [...preNote, n];//append n(new note) to the array
    });
  }

  function deleteNotes(id)
  {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {//filtering all those note in array of note where index is not equal to id
        return index !== id;
      });
    });
  }

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/
  React.createElement(Header, null), /*#__PURE__*/
  React.createElement(CreateArea, { onAdd: addNotes }),
  notes.map((i, index) => {
    return /*#__PURE__*/(
      React.createElement(Note, { key: index, id: index, title: i.title, content: i.content, onDelete: deleteNotes }));

  }), /*#__PURE__*/
  React.createElement(Footer, null));


}
function CreateArea(props) {

  const [note, setNote] = React.useState({
    title: "",
    content: "" });


  function handleChange(e)
  {
    const { name, value } = e.target;
    setNote(preVal => {
      return {
        ...preVal, //adding pre value to the object
        [name]: value //only Changing the value of name
      };
    });
  }

  function addNote(e)
  {
    props.onAdd(note);
    setNote({
      title: "",
      content: "" });

    e.preventDefault();
  }

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/
  React.createElement("form", null, /*#__PURE__*/
  React.createElement("input", { name: "title", onChange: handleChange, value: note.title, placeholder: "Title" }), /*#__PURE__*/
  React.createElement("textarea", { name: "content", onChange: handleChange, value: note.content, placeholder: "Take a note...", rows: "3" }), /*#__PURE__*/
  React.createElement("button", { onClick: addNote }, "Add")));



}
class Header extends React.Component {
  render()
  {
    return /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("h1", null, "Keeper"));
  }}


function Note(props) {
  function handleClick()
  {
    props.onDelete(props.id);
  }
  return /*#__PURE__*/React.createElement("div", { className: "note" }, /*#__PURE__*/
  React.createElement("h1", null, props.title), /*#__PURE__*/
  React.createElement("p", null, props.content), /*#__PURE__*/
  React.createElement("button", { onClick: handleClick }, "DELETE"));


}
class Footer extends React.Component {

  render()
  {
    return /*#__PURE__*/React.createElement("footer", null, /*#__PURE__*/React.createElement("p", null, "copyright ", new Date().getFullYear()));
  }}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));

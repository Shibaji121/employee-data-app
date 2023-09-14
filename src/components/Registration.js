import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default function Registration() {
  const [content, setContent] = useState("");
  return (
    <div className="reg-container">
      <h1>Employee Registration Form</h1>
      <div className="form-container">
        <div className="name">
          <div className="col-flex">
            <label>First Name*</label>
            <input type="text" placeholder="Enter your name" required />
          </div>
          <div className="col-flex">
            <label>Last Name*</label>
            <input type="text" placeholder="Enter your name" required />
          </div>
        </div>
        <div className="dob col-flex">
          <label>DOB</label>
          <input className="fl-input" type="date" placeholder="fbe" />
        </div>
        <div className="study col-flex">
          <label>Study</label>
          <select>
            <option>B.E</option>
            <option>B.SC</option>
          </select>
        </div>
        <div className="dates">
          <div className="col-flex">
            <label>Start Date</label>
            <input type="date" />
          </div>
          <div className="col-flex">
            <label>End Date</label>
            <input type="date" />
          </div>
        </div>
        <div className="salary col-flex">
          <label>Current Salary</label>
          <input className="fl-input" type="number" placeholder="e.g. 300000" />
        </div>
        <div className="description col-flex">
          <label>Description</label>
          <Editor
            editorState={content}
            onEditorStateChange={(editorState) => setContent(editorState)}
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            placeholder="Write The Description here..."
          />
        </div>
        <div className="submit">
          <button className="cancel">Cancel</button>
          <button className="save">Save</button>
        </div>
      </div>
    </div>
  );
}

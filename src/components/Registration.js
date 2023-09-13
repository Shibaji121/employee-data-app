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
          <div>
            <label>First Name*</label>
            <input type="text" placeholder="Enter your name" required />
          </div>
          <div>
            <label>Last Name*</label>
            <input type="text" placeholder="Enter your name" required />
          </div>
        </div>
        <div className="dob">
          <label>DOB</label>
          <input type="date" placeholder="fbe" />
        </div>
        <div className="study">
          <label>Study</label>
          <select>
            <option>B.E</option>
            <option>B.SC</option>
          </select>
        </div>
        <div className="dates">
          <div>
            <label>Start Date</label>
            <input type="date" />
          </div>
          <div>
            <label>End Date</label>
            <input type="date" />
          </div>
        </div>
        <div className="salary">
          <label>Current Salary</label>
          <input type="number" placeholder="e.g. 300000" />
        </div>
        <div className="description">
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

import { useState, useEffect } from "react";
import * as yup from "yup";

const Form = () => {
  const [message, setMessage] = useState("");
  const [checkValidation, setCheckValidation] = useState("");

  let schema = yup.object().shape({
    name: yup.string().required("Plese enter your name").min(2),
    email: yup.string().email("Please enter correct Email").required(),
    message: yup.string().required("Please enter your message").min(2),
  });

  async function sendData(evt) {
    evt.preventDefault();
    let email = evt.target.elements.email.value;
    let name = evt.target.elements.name.value;
    let message = evt.target.elements.message.value;

    console.log(email, name, message);

    schema
      .validate({
        name,
        email,
        message,
      })
      .then(async function () {
        const res = await fetch("/api/hello", {
          method: "POST",
          body: JSON.stringify({
            email,
            name,
            message,
          }),
        });

        const data = await res.json();
        const { messageFromServer, error } = data;
        console.log(messageFromServer);
        console.log(error);
        setMessage(messageFromServer);

        if (message) {
          setCheckValidation("");
        }

        evt.target.reset();
      })
      .catch((err) => {
        console.log(err.name);
        console.log(err.errors[0]);
        setCheckValidation(err.errors[0]);
        setMessage("");
      });
  }

  return (
    <div className="userForm" id="contact">
      <form onSubmit={sendData} className="userForm__theForm">
        <h2>Contact</h2>
        <p>Feel free to send a message</p>

        {checkValidation ? (
          <span className="validationCheck">{checkValidation}</span>
        ) : null}
        {message ? <span className="getMessage">{message}</span> : null}
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          minLength={2}
        />
        <input type="email" name="email" placeholder="Email" required />
        <textarea
          name="message"
          placeholder="Write your text here"
          cols={5}
          rows={8}
          required
          minLength={2}
        ></textarea>
        <button type="submit" className="userForm__theForm--btn">
          Send
        </button>
      </form>
    </div>
  );
};

export default Form;

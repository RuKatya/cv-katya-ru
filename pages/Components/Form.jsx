import { useState, useEffect } from "react";
const Form = () => {
  const [message, setMessage] = useState();
  const [checkValidation, setCheckValidation] = useState("");

  async function sendData(evt) {
    evt.preventDefault();
    let email = evt.target.elements.email.value;
    let name = evt.target.elements.name.value;
    let message = evt.target.elements.message.value;

    console.log(email, name, message);

    let res = await fetch("http://localhost:3000/api/hello", {
      method: "POST",
      body: JSON.stringify({
        email,
        name,
        message,
      }),
    });

    res = await res.json();

    // await axios.post("/sendUserData", { email, name, message }).then((res) => {
    //   console.log(res);
    //   console.log(res.data);
    //   const { errors } = res.data;
    //   const { message } = res.data;

    //   if (message) {
    //     console.log(message);
    //     setMessage(message);
    //   } else if (errors) {
    //     console.log(errors);
    //     setCheckValidation(errors);
    //   }
    // });

    // evt.target.reset();
  }

  useEffect(() => {
    if (message) {
      setCheckValidation("");
    }
  }, [message]);
  return (
    <div>
      <form onSubmit={sendData} className="userForm__theForm">
        <h2>Contact</h2>
        <p>Feel free to send a message</p>

        {checkValidation ? <span>{checkValidation}</span> : null}
        <input
          type="text"
          name="name"
          placeholder="Name"
          //   required
          //   minLength={2}
          //   onInvalid={() => {
          //     setCheckValidation("Please enter your full name");
          //   }}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          //   required
          //   onInvalid={() => {
          //     setCheckValidation("Please enter your correct email");
          //   }}
        />
        <textarea
          name="message"
          placeholder="Write your text here"
          cols={5}
          rows={8}
          //   required
          //   minLength={1}
          //   onInvalid={() => {
          //     setCheckValidation(
          //       "Please enter about what you want to speak about"
          //     );
          //   }}
        ></textarea>
        <button type="submit">Send</button>
        {/* {message ? <span>{message}</span> : null} */}
      </form>
    </div>
  );
};

export default Form;

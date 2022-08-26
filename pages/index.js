import Head from "next/head";
import { useRef } from "react";

export default function Home() {
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();

    enteredEmail = emailInputRef.current.value;
    enteredFeedback = feedbackInputRef.current.value;
  };

  return (
    <div>
      <Head>
        <title>Next Api Routes</title>
      </Head>
      <div className="text-center">
        <h1> Api Routes Practice</h1>
        <form onSubmit={submitFormHandler}>
          <div>
            <label htmlFor="email"> Your Email Address</label>
            <input type="email" id="email" ref={emailInputRef} />
          </div>
          <div>
            <label htmlFor="feedback"> Your Feedback</label>
            <textarea id="feedback" rows={5} ref={feedbackInputRef}></textarea>
          </div>
          <button>Send Feedback</button>
        </form>
      </div>
    </div>
  );
}

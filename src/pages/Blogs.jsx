import React from "react";
import Pdf from "react-to-pdf";
// import "./styles.css";

const Blogs = () => {

    const ref = React.createRef();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:w-10/12 mx-auto p-5 my-10">
      <div className="shadow-2xl p-5 rounded">
        <h3 className="text-xl font-semibold px-5 my-2 text-amber-500">
          What is differences between uncontrolled and controlled componen?
        </h3>
        <p className="p-5">
          <span className="font-bold">Controlled components</span> refer to
          components that have their state and behavior controlled by the parent
          component. These components rely on props passed down from the parent
          component to update their state and behavior. <br />{" "}
          <span className="font-bold">Uncontrolled components</span> refer to
          components that manage their own state internally.
        </p>
      </div>
      <div className="shadow-2xl p-5 rounded">
        <h3 className="text-xl font-semibold px-5 my-2 text-amber-500">
          How to validate React props using PropTypes?
        </h3>
        <p className="p-5">
          Installing the prop-types Library and Basic Usage. <br /> And we
          validate them by setting the propTypes property of the FooComponent
          component to an object that has the names of the props to validate as
          the keys. And the corresponding values are the data type of the props.
        </p>
      </div>
      <div className="shadow-2xl p-5 rounded">
        <h3 className="text-xl font-semibold px-5 my-2 text-amber-500">
          What is difference between nodejs and express js?
        </h3>
        <p className="p-5">
          <span className="font-bold">Node.js</span> is a platform for building
          the applications which are server-side event-driven and made using
          JavaScript. <br />
          <span className="font-bold"> Express.js </span> is a framework based
          on Node.js which is used for building web-application using approaches
          and principles of Node.js event-driven architecture.
        </p>
      </div>
      <div className="shadow-2xl p-5 rounded">
        <h3 className="text-xl font-semibold px-5 my-2 text-amber-500">
          What is a custom hook, and why will you create a custom hook?
        </h3>
        <p className="p-5">
          Custom React JS hooks offer reusability as when a custom hook is
          created, it can be reused easily, which makes the code cleaner and
          reduces the time to write the code. It also enhances the rendering
          speed of the code as a custom hook does not need to be rendered again
          and again while rendering the whole code.
        </p>
      </div>
      <div>
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf} className="btn-primary">Generate Pdf</button>}
      </Pdf>
      <div ref={ref} className="w-full p-8"></div>
    </div>
    </div>
  );
};

export default Blogs;

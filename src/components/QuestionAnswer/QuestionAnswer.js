import React from 'react'

const QuestionAnswer = () => {
    return (
        <div>
            <h1 className="text-center m-5 mb-4">
                Question <span className="text-warning"> and Answer</span>
            </h1>
            <section className="container px-5 row mb-5 ">
                <article className="w-50 mx-4 p-5 border mb-3 col col-mb-6 rounded">
                    <h4>How react works?</h4>
                    <p className="mt-3 text-justify">
                        React is a javascript library, not framework. It creates
                        user interfaces in a predictable way with components and
                        handle only user interfaces. It is a declarative,
                        efficient, and flexible JavaScript library for building
                        user interfaces. First,the JSX gets converted to
                        react.creatElement function calls. Then each of them
                        returns the appropriate object. All react does is creat
                        a tree of elements. This warks very fast.
                    </p>
                </article>

                <article className="w-50 mx-4 p-5 border mb-3 col col-mb-6 rounded">
                    <h4>What is the Differences between props and state?</h4>
                    <p className="mt-3">
                        Props are used for communication with other components.
                        But We can't access state in child components. Props are
                        read-only property. We can't change the value of props.
                        But State is both read and write it can be changed
                        asynchronously. Props are immutable. The State is
                        mutable.Props are allow to pass data from on component
                        to another components as argument. But State holds
                        information about the state of the component
                    </p>
                </article>
            </section>
        </div>
    )
}

export default QuestionAnswer

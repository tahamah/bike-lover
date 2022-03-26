import React from 'react'

const QuestionAnswer = () => {
    return (
        <div>
            <h1 className="text-center m-5 mb-4">
                Question <span className="text-warning"> and Answer</span>
            </h1>
            <section className="container px-5 d-flex mb-5 justify-content-between">
                <article className="w-50 mx-4 p-5 border rounded">
                    <h4>
                        What is the difference between local storage vs
                        secretion storage?
                    </h4>
                    <p className="mt-3 text-justify">
                        Local Storage and Session Storage are almost the same.
                        They store data on the client side. But, the most
                        difference is here- <br />
                        Local Storage can store a max of 10MB of data and
                        Secction Storage can store a max of 5MB of data.And the
                        Other difference is Local Storage can save data after
                        reload.But Section Storage can't. The data of session
                        storage delete automatically but The data of local
                        storage doesn't delete automatically.
                    </p>
                </article>

                <article className="w-50 mx-4 p-5 border rounded">
                    <h4>How does javascript event loop work?</h4>
                    <p className="mt-3 text-justify">
                        Javascript event loop and Javascript basic for loop are
                        almost the same. There are three main things in the
                        event loop, they are - Stack, Queue, and Heap. Stack
                        works first. After that Queue. Stack works sequentially
                        one by one. And Queue works after finishing Stack's
                        works. It works asynchronously. And Heap works on memory
                        issues.
                    </p>
                </article>
            </section>
        </div>
    )
}

export default QuestionAnswer

import React from 'react'

function Qa() {
    return (
        <div>
            <div className="container">
                <div className="row py-5 justify-content-center">
                    <h2>Frequently Asked Question's</h2>
                    <div className="col-sm-10 ">
                        <p>
                            <button class="btn btn-info" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
                            <i class="fa-sharp fa-solid fa-arrow-down "></i>  What Are Your Educational Qualifications ?
                            </button>
                        </p>
                        <div class="collapse" id="collapseExample2">
                            <div class="card p-3">
                                Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-10 my-3">
                        <p>

                            <button class="btn btn-info" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            <i class="fa-sharp fa-solid fa-arrow-down"></i>  Why We Choose ?
                            </button>
                        </p>
                        <div class="collapse" id="collapseExample">
                            <div class="card p-3">
                                Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-10 ">
                        <p>
                            <button class="btn btn-info" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample">
                            <i class="fa-sharp fa-solid fa-arrow-down"></i> What is Affiliation ?
                            </button>
                        </p>
                        <div class="collapse" id="collapseExample1">
                            <div class="card p-3">
                                Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Qa

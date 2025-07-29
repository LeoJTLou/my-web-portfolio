export default function Resume() {
    return (
        <section id="resume">
            <div className="container my-5">
                <h2 className="text-center mb-4">My Resume</h2>
                <p className="text-center mb-5">You can view and download my resume below.</p>
                <div class="accordion" id="myAccordion">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#myAccordion">
                            <div class="accordion-body">
                                <strong>This is the first item's accordion body.</strong> You can add any HTML content here.
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#myAccordion">
                            <div class="accordion-body">
                                <strong>This is the second item's accordion body.</strong> You can add any HTML content here.
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#myAccordion">
                            <div class="accordion-body">
                                This is the third item's accordion body.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
class Card extends HTMLElement {
    connectedCallback (){
        this.innerHTML = `
          <aside id="colorlib-hero">
            <div class="flexslider">
                <ul class="slides">
                    <li style="background-image: url(images/library.jpg);">
                        <div class="overlay"></div>
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-8 col-sm-12 col-md-offset-2 slider-text">
                                    <div class="slider-text-inner text-center" style="margin-top:150px;">
                                        <h2>Providing Project Evaluation and Monitoring</h2>
                                        <h1>we monitor and evaluate your projects</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li style="background-image: url(images/data.jpg);">
                        <div class="overlay"></div>
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-8 col-sm-12 col-md-offset-2 slider-text">
                                    <div class="slider-text-inner text-center" style="margin-top:150px;">
                                        <h2>Data collection</h2>
                                        <h1>We collect data relevant to your services</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li style="background-image: url(images/room.jpg);">
                        <div class="overlay"></div>
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-8 col-sm-12 col-md-offset-2 slider-text">
                                    <div class="slider-text-inner text-center" style="margin-top:150px;">
                                        <h2>Management Consulting</h2>
                                        <h1>We provide the best management consultancy</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li style="background-image: url(images/lib.jpg);">
                        <div class="overlay"></div>
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-8 col-sm-12 col-md-offset-2 slider-text">
                                    <div class="slider-text-inner text-center" style="margin-top:150px;">
                                        <h2>Capacity Building in Research</h2>
                                        <h1>We provide capacity building in research, analysis and design</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </aside> 
        `
    }
}
customElements.define('my-card', Card);
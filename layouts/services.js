class MyService extends HTMLElement {
    connectedCallback () {
        this.innerHTML = `
         <div id="colorlib-services">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 animate-box">
                        <div class="services">
                            <span class="icon">
                                <i class="fas fa-chart-line" style="color: rgb(119, 112, 112);"></i>
                            </span>
                            <div class="desc">
                                <h3>Project Monitoring and Evaluation</h3>
                                <p>Struggling with your project? We track your project progress,<br/>
                                assess its effectiveness, and identify areas for improvement.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 animate-box">
                        <div class="services">
                            <span class="icon">
                                <i class="fas fa-university" style="color: rgb(119, 112, 112);"></i>
                            </span>
                            <div class="desc">
                                <h3>Capacity Building in Research, Policy Analysis and Design</h3>
                                <p>You need a skilled team. We provide training and development<br/>
                                programs aimed to enhance skills and knowledge in areas like<br/>
                                research methodologies, policy analysis techniques, design principles.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 animate-box">
                        <div class="services">
                            <span class="icon">
                                <i class="fas fa-pen-square" style="color: rgb(119, 112, 112);"></i>
                            </span>
                            <div class="desc">
                                <h3>Data Collection</h3>
                                <p>Data Alt. Ltd offers you comprehensive data collection services,<br/>
                                including survey design and implementation, field data collection,<br/>
                                data entry and management, and qualitative and quantitative data analysis.<br/>
                                And also reporting and visualization to ensure clear and actionable insights.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 animate-box">
                        <div class="services">
                            <span class="icon">
                                <i class="fas fa-tasks" style="color: rgb(119, 112, 112);"></i>
                            </span>
                            <div class="desc">
                                <h3>Impact Assessment and Evaluation</h3>
                                <p>Wonder about your project's effects? We assist you in tracking and<br/>
                                assessing the project's performance and outcomes, analyzing relevant<br/>
                                data, and measuring the effects and effectiveness of your projects and programs.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 animate-box">
                        <div class="services">
                            <span class="icon">
                                <i class="fas fa-briefcase" style="color: rgb(119, 112, 112);"></i>
                            </span>
                            <div class="desc">
                                <h3>Management Consulting</h3>
                                <p>Our team is here to assist you with consultancy in fields like:<br/>
                                strategy development, operational improvement, financial advisory,<br/>
                                organizational changes, performance management, and risk management.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}

customElements.define('my-service', MyService);
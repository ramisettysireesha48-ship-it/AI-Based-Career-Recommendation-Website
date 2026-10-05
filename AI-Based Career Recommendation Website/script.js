function recommendCareer() {

    let interest = document.getElementById("interest").value;
    let skill = document.getElementById("skill").value;
    let work = document.getElementById("work").value;
    let subject = document.getElementById("subject").value;

    let result = document.getElementById("result");

    if (interest === "" || skill === "" || work === "" || subject === "") {

        result.innerHTML = `
            <div class="result-card">
                <h3>Please complete the assessment</h3>
                <p>
                    Select an option for all four questions to get your
                    career recommendation.
                </p>
            </div>
        `;

        return;
    }

    let careers = {
        software: {
            name: "Software Developer",
            description:
                "You may be suitable for software development because you show interest in programming, coding and building software applications."
        },

        data: {
            name: "Data Scientist / Data Analyst",
            description:
                "Your interest in data, mathematics and analytical problem solving makes data-related careers a good option for you."
        },

        design: {
            name: "UI/UX Designer",
            description:
                "Your creativity and interest in visual design indicate that UI/UX design could be a suitable career path."
        },

        security: {
            name: "Cyber Security Analyst",
            description:
                "Your interest in security, networks and system protection makes cyber security a promising career option."
        },

        business: {
            name: "Business Analyst",
            description:
                "Your communication, management and problem-solving interests indicate that business analysis may suit you."
        }
    };

    let selectedCareer;

    if (interest === "programming" ||
        skill === "coding" ||
        work === "software" ||
        subject === "computer") {

        selectedCareer = careers.software;
    }

    else if (interest === "data" ||
             skill === "analysis" ||
             work === "analytics" ||
             subject === "math") {

        selectedCareer = careers.data;
    }

    else if (interest === "design" ||
             skill === "creative" ||
             work === "visual" ||
             subject === "art") {

        selectedCareer = careers.design;
    }

    else if (interest === "security" ||
             skill === "security" ||
             work === "protection" ||
             subject === "network") {

        selectedCareer = careers.security;
    }

    else {

        selectedCareer = careers.business;
    }

    let score = Math.floor(Math.random() * 11) + 90;

    result.innerHTML = `
        <div class="result-card">
            <h3>Recommended Career</h3>

            <h3>${selectedCareer.name}</h3>

            <p>
                ${selectedCareer.description}
            </p>

            <p class="score">
                Career Match Score: ${score}%
            </p>
        </div>
    `;

    result.scrollIntoView({
        behavior: "smooth"
    });
}
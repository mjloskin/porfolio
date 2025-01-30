document.addEventListener("DOMContentLoaded", () => {
    const filters = document.querySelectorAll(".filter");
    const projects = document.querySelectorAll(".project");

    filters.forEach(filter => {
        filter.addEventListener("click", (event) => {
            event.preventDefault();
            const category = filter.dataset.category;

            projects.forEach(project => {
                if (category === "all" || project.dataset.category === category) {
                    project.style.display = "block";
                } else {
                    project.style.display = "none";
                }
            });
        });
    });
});

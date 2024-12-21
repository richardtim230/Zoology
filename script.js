// script.js

document.querySelectorAll('.course-link').forEach(link => {

  link.addEventListener('click', (event) => {

    event.preventDefault();

    // Hide all course details

    document.querySelectorAll('.course-details').forEach(detail => {

      detail.classList.add('hidden');

    });

    // Toggle the selected course's details

    const courseId = event.target.closest('.course-link').dataset.course;

    const courseDetails = document.getElementById(courseId);

    if (courseDetails) {

      courseDetails.classList.toggle('hidden');

    }

  });

});
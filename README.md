
The three key feature of my website is:

1.user can choose various courses for them.

2.they are bound to finish there 20 credit-hours before adding more.

3.if there credit limit crossed they will not be able to add more.

The way i have managed my states:

bookMarks State:


1.In the Courses component, i used the useState hook to initialize a state variable called courses. This state variable holds an array of course data retrieved from an external JSON file.


2.i used the useEffect hook to fetch course data from a JSON file named 'course.json' when the component mounts ([] empty dependency array ensures it runs once).

3.bookMarks: An array of bookmarked courses.
totalHour: A variable storing the total credit hours of bookmarked courses.
remainingHour: A variable representing the remaining credit hours.
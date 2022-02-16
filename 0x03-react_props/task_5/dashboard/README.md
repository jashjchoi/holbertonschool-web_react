## 5. Shapes, Loops, and Keys

### Create the courses array

1) Create a new Shape named `CourseShape` containing:
- id (number, required)
- name (string, required)
- credit (number, required)

2) Modify `CourseList.js`:
- Add a propType `listCourses` that will take an array of the shape you created.
- Ensure if `listCourses` is not passed by the parent component the propType defaults to an empty array.
- When `listCourses` is empty, display a row showing `No course available yet`,
- When `listCourses` contains at least one element, display a row for each element showing the name of the course and the number of credits.
- Make sure to add a key to help React optimize rendering.

3) Modify `CourseListRow.js`:
- Make sure the property `textSecondCell` can accept either a `string` or `number`.

4) Modify the `App.js` to create a new array named listCourses. It should contains three elements:
- `id`: 1, name: ‘ES6’, credit: 60
- `id`: 2, name: ‘Webpack’, credit: 20
- `id`: 3, name: ‘React’, credit: 40

5) Add a `listCourses` property to the `CourseList` component in `App`,



### Create the notifications array

1) Inside the `Notifications` directory, create a new Shape named `NotificationItemShape` containing:
- `id` (number, required)
- `html` (object of { `\_\_html`: string })
- `type` (string, required)
- `value` (string)

2) Modify Notifications.js:
- Add a proptype `listNotifications` that will take an array of the shape you just created.
- When `listNotifications` is empty, display a row showing `No new notification for now`.
- When `listNotifications` contains at least one element, display a `NotificationItem` for each element of the array.

3) Modify the `App` to create a new array named `listNotifications`.
- It should contains all the previous elements we used to have in Notifications elements. Add an `id` for each element.
- Add the property `listNotifications` to the `Notifications` component in `App`.


### Update the tests

1) Modify `Notifications.test.js`:
- Add a new test to verify that `Notifications` renders correctly if you pass an empty array or if you don’t pass the `listNotification`s property.
- Add a new test to verify that when you pass a list of `notifications`, the component renders it correctly and with the right number of `NotificationItem`.
- Add a new test to verify that when `listNotifications` is empty the message `Here is the list of notifications` is not displayed, but `No new notification for now` is.

2) Modify `CourseList.test.js`:
- Add a new test to verify that `CourseList` renders correctly if you pass an empty array or if you don’t pass the `listCourses` property.
- Add a new test to verify that when you pass a list of courses, the component renders it correctly.

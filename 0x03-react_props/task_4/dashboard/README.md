### 4. Props types & Default props & Shapes

1) Create a `CourseListRow` component.
- Create a new folder CourseList and a new component with the name CourseListRow.The component accepts three props:
    - `isHeader` (bool, default: false)
    - `textFirstCell` (string, required)
    - `textSecondCell` (string, default: null)

2) Create a `CourseList` component. In the folder CourseList, create a new component named `CourseList`:
- Returns a table element with an id CourseList
- Contains a `thead` element
    - includes a `CourseListRow` with the props `textFirstCell="Available courses"` and `isHeader=true`
    - includes a `CourseListRow` with the props `textFirstCell="Course name"`, `textSecondCell="Credit"`, and `isHeader=true`
- Contains a `tbody` element
    - includes a `CourseListRow` with the props `textFirstCell="ES6"`, `textSecondCell="60"`, and `isHeader=false`
    - includes a `CourseListRow` with the props `textFirstCell="Webpack"`, `textSecondCell="20"`, and `isHeader=false`
    - includes a `CourseListRow` with the props `textFirstCell="React"`, `textSecondCell="40"`, and `isHeader=false`

3) Modify the App component

4) Modify the NotificationItem component

5) Modify the Notifications component

CREATE DATABASE Project_db;

 USE project_db;

 -- CREATE TABLES user,students,courses,videos

  CREATE TABLE users(
     email VARCHAR(50),
     password VARCHAR(50),
     role ENUM("student","admin")
     );

   CREATE TABLE students(
     reg_no INT PRIMARY KEY AUTO_INCREMENT,
     name VARCHAR(50),
     email VARCHAR(50),
     course_id INT,
     mobile_no INT,
     profile_pic BLOB,
     FOREIGN KEY (course_id) REFERENCES courses(course_id)
     );

   CREATE TABLE courses(
    course_id INT PRIMARY KEY AUTO_INCREMENT,
    course_name VARCHAR(50),
    description VARCHAR(100),
    fees DOUBLE,
    start_date DATE,
    end_date DATE,
    video_expire_days INT
);

CREATE TABLE videos(
     video_id INT PRIMARY KEY AUTO_INCREMENT,
     course_id INT,
     title VARCHAR(100),
     description VARCHAR(100),
     youtube_url VARCHAR(100),
     added_at DATE DEFAULT(CURRENT_DATE),
     FOREIGN KEY (course_id) REFERENCES courses(course_id)
     );

     INSERT INTO users (email, password, role) VALUES
    -> ('student1@gmail.com', 'pass123', 'student'),
    -> ('student2@gmail.com', 'pass456', 'student'),
    -> ('admin@gmail.com', 'admin123', 'admin');

     INSERT INTO courses (course_name, description, fees, start_date, end_date, video_expire_days) VALUES
    -> ('Full Stack Web Development', 'MERN stack course', 15000, '2025-01-01', '2025-06-01', 90),
    -> ('Java Programming', 'Core + Advanced Java', 12000, '2025-02-01', '2025-05-01', 60),
    -> ('Data Science', 'Python + ML + AI', 20000, '2025-03-01', '2025-08-01', 120);

     INSERT INTO students(name,email,course_id,mobile_no,profile_pic)VALUES
    -> ("Priya Kulkarni", "student2@gmail.com", 9, 9123456780, NULL),
    -> ("Rahul Patil", "student1@gmail.com", 8, 9876543210, NULL),
    -> ("pratik Patil", 'student2@gmail.com',7, 8944864670, NULL);

    INSERT INTO videos (course_id, title, description, youtube_url) VALUES
(7, 'HTML Basics', 'Introduction to HTML', 'https://youtu.be/html123'),
(7, 'CSS Basics', 'Introduction to CSS', 'https://youtu.be/css123'),
(8, 'Java OOP Concepts', 'Understanding classes & objects', 'https://youtu.be/javaoop123'),
(9, 'Intro to Machine Learning', 'Basics of ML algorithms', 'https://youtu.be/mlintro123');


--Q1. Write a Sql query that will fetch all upcoming courses.
SELECT * FROM courses
WHERE start_date > CURRENT_DATE;

--Q2. Write a Sql query that will fetch all the registered students along with course name


 SELECT s.reg_no,s.name,s.email,s.mobile_no,c.course_name FROM  students s
INNER JOIN courses c
ON s.course_id=c.course_id;

--Q3. Write an SQL query to fetch the complete details of a student (based on their email) along with the details
--of the course they are enrolled in.

SELECT s.reg_no,s.name,s.email,s.mobile_no,c.course_id,c.description,c.fees,c.start_date,c.end_date,c.video_expire_days
FROM students s
INNER JOIN courses c
ON s.course_id=c.course_id
WHERE s.email="student1@gmail.com";

--Q4. Write an SQL query to retrieve the course details and the list of non-expired videos for a specific student
--using their email address. A video is considered active (not expired) if its added_at date plus the course’s
--video_expire_days has not yet passed compared to the current date.

SELECT c.course_id,c.course_name,c.start_date,c.end_date,c.video_expire_days,v.video_id,v.title,v.added_at FROM students s 
INNER JOIN courses c ON s.course_id=c.course_id
INNER JOIN videos v ON  v.course_id=c.course_id
WHERE s.email="student1@gmail.com" AND
v.added_at + INTERVAL c.video_expire_days DAY >= CURRENT_DATE;



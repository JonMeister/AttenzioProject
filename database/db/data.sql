-- Inserción en la tabla role (sin cambios en los IDs)
INSERT INTO role (role_id, name) VALUES
(1, 'Administrator'),
(2, 'Teacher'),
(3, 'Teaching Staff'),
(4, 'Student');

-- Inserción en la tabla user
INSERT INTO "user" (user_id, name, last_name, email, password, picture, address, cc, phone_number, proof_of_registration, professional_license_number, role_id) VALUES
(1001, 'Alice', 'Johnson', 'alice@example.com', 'password1', 'alice.jpg', '123 Main St', '123456789', '123-456-7890', 'proof1.pdf', 'PL1234', 1), -- Administrator
(1002, 'Bob', 'Smith', 'bob@example.com', 'password2', 'bob.jpg', '456 Elm St', '987654321', '234-567-8901', 'proof2.pdf', 'PL5678', 2), -- Teacher
(1003, 'Charlie', 'Brown', 'charlie@example.com', 'password3', 'charlie.jpg', '789 Pine St', '111222333', '345-678-9012', 'proof3.pdf', 'PL9012', 3), -- Teaching Staff
(1004, 'Diana', 'Prince', 'diana@example.com', 'password4', 'diana.jpg', '101 Oak St', '444555666', '456-789-0123', 'proof4.pdf', NULL, 4), -- Student
(1005, 'Eve', 'Adams', 'eve@example.com', 'password5', 'eve.jpg', '102 Maple St', '777888999', '567-890-1234', 'proof5.pdf', NULL, 4), -- Student
(1006, 'Frank', 'Lee', 'frank@example.com', 'password6', 'frank.jpg', '103 Birch St', '222333444', '678-901-2345', 'proof6.pdf', NULL, 4); -- Student

-- Inserción en la tabla course
INSERT INTO course (course_id, name) VALUES
(1001, 'Mathematics'),
(1002, 'Physics'),
(1003, 'Chemistry');

-- Inserción en la tabla user_course
INSERT INTO user_course (usercourse_id ,user_id, course_id) VALUES
(1001 ,1004, 1001), -- Diana enrolled in Mathematics
(1002, 1005, 1001), -- Eve enrolled in Mathematics
(1003, 1006, 1002), -- Frank enrolled in Physics
(1004, 1004, 1003), -- Diana enrolled in Chemistry
(1005, 1005, 1003); -- Eve enrolled in Chemistry

-- Inserción en la tabla clazz
INSERT INTO clazz (clazz_id, method, date, topic, course_id) VALUES
(1001, 'Online', '2024-01-10', 'Introduction to Algebra', 1001),
(1002, 'In-person', '2024-02-15', 'Newtonian Mechanics', 1002),
(1003, 'Online', '2024-03-20', 'Organic Chemistry Basics', 1003);

-- Inserción en la tabla student_class_attendance
INSERT INTO student_class_attendance (attendance_id,location, is_valid, date, user_id, clazz_id) VALUES
(1001,'B13', TRUE, '2024-01-10', 1004, 1001), -- Diana attended Algebra
(1002, 'B13', TRUE, '2024-01-10', 1005, 1001), -- Eve attended Algebra
(1003, 'E20', TRUE, '2024-02-15', 1006, 1002), -- Frank attended Mechanics
(1004, 'E20', FALSE, '2024-03-20', 1004, 1003), -- Diana missed Chemistry
(1005, 'E20', TRUE, '2024-03-20', 1005, 1003); -- Eve attended Chemistry

-- Inserción en la tabla class_material
INSERT INTO class_material (name, type, source, date, clazz_id) VALUES
('Algebra Notes', 'PDF', 'algebra_notes.pdf', '2024-01-10', 1001),
('Mechanics Slides', 'PPT', 'mechanics_slides.pptx', '2024-02-15', 1002),
('Chemistry Handbook', 'PDF', 'chemistry_handbook.pdf', '2024-03-20', 1003);

-- Inserción en la tabla option
INSERT INTO option (option_id, is_correct, content) VALUES
(1001, TRUE, '4'),
(1002, FALSE, '5'),
(1003, TRUE, 'H2O'),
(1004, FALSE, 'CO2'),
(1005, TRUE, 'Force equals mass times acceleration.');

-- Inserción en la tabla question
INSERT INTO question (question_id, type, content, difficulty, option_id, clazz_id) VALUES
(1001, 'Multiple Choice', 'What is 2+2?', 'Easy', 1001, 1001),
(1002, 'Multiple Choice', 'What is the chemical formula of water?', 'Easy', 1003, 1003),
(1003, 'True/False', 'Force equals mass times acceleration.', 'Medium', 1005, 1002);

-- Inserción en la tabla answer
INSERT INTO answer (answer_id, content, option_id, user_id) VALUES
(1001, '4', 1001, 1004), -- Diana answered correctly for Question 1
(1002, 'H2O', 1003, 1005), -- Eve answered correctly for Question 2
(1003, 'Force equals mass times acceleration.', 1005, 1006); -- Frank answered correctly for Question 3

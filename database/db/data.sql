INSERT INTO role (role_id, name) VALUES
(1, 'Administrator'),
(2, 'Teacher'),
(3, 'Teaching Staff'),
(4, 'Student');

INSERT INTO "user" (user_id, name, last_name, email, password, picture, address, cc, phone_number, proof_of_registration, professional_license_number, role_id) VALUES
(1, 'Alice', 'Johnson', 'alice@example.com', 'password1', 'alice.jpg', '123 Main St', '123456789', '123-456-7890', 'proof1.pdf', 'PL1234', 1), -- Administrator
(2, 'Bob', 'Smith', 'bob@example.com', 'password2', 'bob.jpg', '456 Elm St', '987654321', '234-567-8901', 'proof2.pdf', 'PL5678', 2), -- Teacher
(3, 'Charlie', 'Brown', 'charlie@example.com', 'password3', 'charlie.jpg', '789 Pine St', '111222333', '345-678-9012', 'proof3.pdf', 'PL9012', 3), -- Teaching Staff
(4, 'Diana', 'Prince', 'diana@example.com', 'password4', 'diana.jpg', '101 Oak St', '444555666', '456-789-0123', 'proof4.pdf', NULL, 4), -- Student
(5, 'Eve', 'Adams', 'eve@example.com', 'password5', 'eve.jpg', '102 Maple St', '777888999', '567-890-1234', 'proof5.pdf', NULL, 4), -- Student
(6, 'Frank', 'Lee', 'frank@example.com', 'password6', 'frank.jpg', '103 Birch St', '222333444', '678-901-2345', 'proof6.pdf', NULL, 4); -- Student

INSERT INTO course (course_id, name) VALUES
(1, 'Mathematics'),
(2, 'Physics'),
(3, 'Chemistry');

INSERT INTO user_course (usercourse_id ,user_id, course_id) VALUES
(1001 ,4, 1), -- Diana enrolled in Mathematics
(1002, 5, 1), -- Eve enrolled in Mathematics
(1003, 6, 2), -- Frank enrolled in Physics
(1004, 4, 3), -- Diana enrolled in Chemistry
(1005, 5, 3); -- Eve enrolled in Chemistry

INSERT INTO clazz (clazz_id, method, date, topic, course_id) VALUES
(1, 'Online', '2024-01-10', 'Introduction to Algebra', 1),
(2, 'In-person', '2024-02-15', 'Newtonian Mechanics', 2),
(3, 'Online', '2024-03-20', 'Organic Chemistry Basics', 3);

INSERT INTO student_class_attendance (attendance_id,location, is_valid, date, user_id, clazz_id) VALUES
(101,'B13', TRUE, '2024-01-10', 4, 1), -- Diana attended Algebra
(102, 'B13', TRUE, '2024-01-10', 5, 1), -- Eve attended Algebra
(103, 'E20', TRUE, '2024-02-15', 6, 2), -- Frank attended Mechanics
(104, 'E20', FALSE, '2024-03-20', 4, 3), -- Diana missed Chemistry
(105, 'E20', TRUE, '2024-03-20', 5, 3); -- Eve attended Chemistry

INSERT INTO class_material (name, type, source, date, clazz_id) VALUES
('Algebra Notes', 'PDF', 'algebra_notes.pdf', '2024-01-10', 1),
('Mechanics Slides', 'PPT', 'mechanics_slides.pptx', '2024-02-15', 2),
('Chemistry Handbook', 'PDF', 'chemistry_handbook.pdf', '2024-03-20', 3);

INSERT INTO option (option_id, is_correct, content) VALUES
(1, TRUE, '4'),
(2, FALSE, '5'),
(3, TRUE, 'H2O'),
(4, FALSE, 'CO2'),
(5, TRUE, 'Force equals mass times acceleration.');

INSERT INTO question (question_id, type, content, difficulty, option_id, clazz_id) VALUES
(1, 'Multiple Choice', 'What is 2+2?', 'Easy', 1, 1),
(2, 'Multiple Choice', 'What is the chemical formula of water?', 'Easy', 3, 3),
(3, 'True/False', 'Force equals mass times acceleration.', 'Medium', 5, 2);

INSERT INTO answer (answer_id, content, option_id, user_id) VALUES
(1, '4', 1, 4), -- Diana answered correctly for Question 1
(2, 'H2O', 3, 5), -- Eve answered correctly for Question 2
(3, 'Force equals mass times acceleration.', 5, 6); -- Frank answered correctly for Question 3

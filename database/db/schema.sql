CREATE TABLE role (
    role_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE "user" (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255),
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    picture VARCHAR(500),
    address VARCHAR(500),
    cc VARCHAR(20),
    phone_number VARCHAR(20),
    proof_of_registration VARCHAR(500),
    professional_license_number VARCHAR(100),
    role_id INT NOT NULL,
    FOREIGN KEY (role_id) REFERENCES role(role_id) ON DELETE CASCADE
);

CREATE TABLE course (
    course_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE user_course (
    usercourse_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    course_id INT NOT NULL,
    --PRIMARY KEY (user_id, course_id),
    FOREIGN KEY (user_id) REFERENCES "user"(user_id) ON DELETE CASCADE,
    FOREIGN KEY (course_id) REFERENCES course(course_id) ON DELETE CASCADE
);

CREATE TABLE clazz (
    clazz_id SERIAL PRIMARY KEY,
    method VARCHAR(255),
    date DATE NOT NULL,
    topic VARCHAR(255),
    course_id INT NOT NULL,
    FOREIGN KEY (course_id) REFERENCES course(course_id) ON DELETE CASCADE
);

CREATE TABLE student_class_attendance (
    attendance_id SERIAL PRIMARY KEY,
    location VARCHAR(255),
    is_valid BOOLEAN DEFAULT FALSE,
    date DATE NOT NULL,
    user_id INT NOT NULL,
    clazz_id INT NOT NULL,
    --PRIMARY KEY (attendance_id, user_id, clazz_id, date), -- Evita duplicados por estudiante/clase/fecha
    FOREIGN KEY (user_id) REFERENCES "user"(user_id) ON DELETE CASCADE,
    FOREIGN KEY (clazz_id) REFERENCES clazz(clazz_id) ON DELETE CASCADE
);

CREATE TABLE class_material (
    material_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(255),
    source VARCHAR(500),
    date DATE,
    clazz_id INT NOT NULL,
    FOREIGN KEY (clazz_id) REFERENCES clazz(clazz_id) ON DELETE CASCADE
);

CREATE TABLE option (
    option_id SERIAL PRIMARY KEY,
    is_correct BOOLEAN DEFAULT FALSE,
    content VARCHAR(255)
);

CREATE TABLE question (
    question_id SERIAL PRIMARY KEY,
    type VARCHAR(255),
    content VARCHAR(500),
    difficulty VARCHAR(50),
    option_id INT,
    clazz_id INT NOT NULL,
    FOREIGN KEY (option_id) REFERENCES option(option_id) ON DELETE SET NULL,
    FOREIGN KEY (clazz_id) REFERENCES clazz(clazz_id) ON DELETE CASCADE
);

CREATE TABLE answer (
    answer_id SERIAL PRIMARY KEY,
    content VARCHAR(500),
    option_id INT,
    user_id INT NOT NULL,
    FOREIGN KEY (option_id) REFERENCES option(option_id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES "user"(user_id) ON DELETE CASCADE
);

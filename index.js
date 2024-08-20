// course information
const CourseInfo = {
    id: 666,
    name: "Introduction to World Domination",
    //total_points: 1000
};

// assignment group
const AssignmentGroup = {
    id: 911911,
    name: "Fundamentals in Evil",
    course_id: 666,
    group_weight :25,
    assignments: [
        {
            id: 1,
            name: "Finding Perfect SuperVillain Name",
            due_at: "2023-10-10",
            points_possible: 100

        },
        {
            id: 2,
            name: "Hiring and Training Henchmen",
            due_at: "2023-11-11",
            points_possible: 150
        },
        {
            id: 3,
            name: "Designing Evil Lair",
            due_at: "2023-12-12",
            points_possible: 250
        },
        {
            id: 4,
            name: "Defeating Superheroes",
            due_at: "2024-02-22",
            points_possible: 500
        },    
        
    ]

};

// Learner submission date and score
const LearnerSubmissions = [
    {
        learner_id :101,
        assignment_id: 1,
        submission: {
            submitted_at: "2023-10-08",
            score : 92
        }    
    },

    {
        learner_id :101,
        assignment_id: 2,
        submission: {
            submitted_at: "2023-11-06",
            score : 141
        }    
    },

    {
        learner_id :101,
        assignment_id: 3,
        submission: {
            submitted_at: "2023-12-07",
            score : 241
        }    
    },

    {
        learner_id :102,
        assignment_id: 4,
        submission: {
            submitted_at: "2024-02-01",
            score : 500
        }    
    },

    {
        learner_id :102,
        assignment_id: 1,
        submission: {
            submitted_at: "2023-10-08",
            score : 71
        }    
    },

    {
        learner_id :102,
        assignment_id: 2,
        submission: {
            submitted_at: "2023-11-06",
            score : 120
        }    
    },

    {
        learner_id :102,
        assignment_id: 3,
        submission: {
            submitted_at: "2023-12-07",
            score : 188
        }    
    },

    {
        learner_id :102,
        assignment_id: 4,
        submission: {
            submitted_at: "2024-02-01",
            score : 390
        }    
    },

    {
        learner_id :103,
        assignment_id: 1,
        submission: {
            submitted_at: "2023-10-08",
            score : 32
        }    
    },

    {
        learner_id :103,
        assignment_id: 2,
        submission: {
            submitted_at: "2023-11-06",
            score : 55
        }    
    },

    {
        learner_id :103,
        assignment_id: 3,
        submission: {
            submitted_at: "2023-12-07",
            score : 100
        }    
    },

    {
        learner_id :103,
        assignment_id: 4,
        submission: {
            submitted_at: "2024-02-01",
            score : 35
        }    
    },

    {
        learner_id :104,
        assignment_id: 1,
        submission: {
            submitted_at: "2023-10-08",
            score : 82
        }    
    },

    {
        learner_id :104,
        assignment_id: 2,
        submission: {
            submitted_at: "2023-11-06",
            score : 136
        }    
    },

    {
        learner_id :104,
        assignment_id: 3,
        submission: {
            submitted_at: "2023-12-07",
            score : 220
        }    
    },

    {
        learner_id :104,
        assignment_id: 4,
        submission: {
            submitted_at: "2024-02-01",
            score : 400
        }    
    }
];

// total points possible for the Course
const CourseTotalScore = 1000

// function for averages
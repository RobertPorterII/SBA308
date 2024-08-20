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
        learner_id :101,
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
            submitted_at: "2023-10-03",
            score : 71
        }    
    },

    {
        learner_id :102,
        assignment_id: 2,
        submission: {
            submitted_at: "2023-11-05",
            score : 120
        }    
    },

    {
        learner_id :102,
        assignment_id: 3,
        submission: {
            submitted_at: "2023-12-09",
            score : 188
        }    
    },

    {
        learner_id :102,
        assignment_id: 4,
        submission: {
            submitted_at: "2024-02-16",
            score : 390
        }    
    },

    {
        learner_id :103,
        assignment_id: 1,
        submission: {
            submitted_at: "2023-10-01",
            score : 32
        }    
    },

    {
        learner_id :103,
        assignment_id: 2,
        submission: {
            submitted_at: "2023-11-09",
            score : 55
        }    
    },

    {
        learner_id :103,
        assignment_id: 3,
        submission: {
            submitted_at: "2023-12-21",
            score : 100
        }    
    },

    {
        learner_id :103,
        assignment_id: 4,
        submission: {
            submitted_at: "2024-02-06",
            score : 35
        }    
    },

    {
        learner_id :104,
        assignment_id: 1,
        submission: {
            submitted_at: "2023-10-03",
            score : 82
        }    
    },

    {
        learner_id :104,
        assignment_id: 2,
        submission: {
            submitted_at: "2023-11-01",
            score : 136
        }    
    },

    {
        learner_id :104,
        assignment_id: 3,
        submission: {
            submitted_at: "2023-12-11",
            score : 220
        }    
    },

    {
        learner_id :104,
        assignment_id: 4,
        submission: {
            submitted_at: "2024-02-12",
            score : 400
        }    
    }
];
// test function below to make sure math is working then comment it out
// function computeArea(point_possible ,CourseTotalScore) {
//     let area = point_possible * CourseTotalScore
//     console.log(`The area of a rectangle with a width of ${point_possible} and height of ${CoureTotalScore} is ${area} square units`);
//     return area
    
//   }
//   computeArea(5,6);
//   computeArea(12,6)
// function for Weighted Average
const CourseTotalScore = 1000
function ComputeAverage(total , points_possible) 
{
    
    let average = total / points_possible
    console.log(`An assignment worth a total of ${points_possible} points against the Course's total score possible of ${total} points, is worth ${average}% of your final grade`);
    return average

}

ComputeAverage(1000,100);
ComputeAverage(1000,150);
ComputeAverage(1000,250);
ComputeAverage(1000,500)

// function for  Assignment Average of score
const average = (score, total_points) => console.log((score + total_points) / 2);
console.log("Score Averages for Learner 101");
average(92,100);
average(141,150);
average(241,250);
average(500,500);
console.log("Score Averages for Learner 102");
average(71,100);
average(120,150);
average(188,250);
average(390,500);
console.log("Score Averages for Learner 103");
average(32,100);
average(55,150);
average(100,250);
average(35,500);
console.log("Score Averages for Learner 104");
average(82,100);
average(136,150);
average(220,250);
average(400,500);

// function for total average
 const TotalAverage = (total_score, max_points) => console.log(total_score / max_points);
 console.log("The total Average for Learner 101 is");
 TotalAverage(974,1000); // output .974
 
 console.log("The total Average for Learner 102 is");
 TotalAverage(769,1000); // output .769
 
 console.log("The total Average for Learner 103 is");
 TotalAverage(222,1000); // output .222
 
 console.log("The total Average for Learner 104 is");
 TotalAverage(838,1000); // output .838
 
 // Now retrieving Learner into to get lab result

 function getLearnerData(course, ag, submissions) {
  
    const result = [
      {
        id: 101,
        avg: 0.974,
        1: 96, 
        2: 145.5, 
        3:245.5,
        4:500
      },
      {
        id: 102,
        avg: 0.769, 
        1: 85.5, 
        2: 135, 
        3: 219,
        4: 445
      },
      {
        id: 103,
        avg: 0.222, 
        1: 66, 
        2:  102.5,
        3: 175,
        4: 267.5
      },
      {
        id: 104,
        avg: 0.838, 
        1: 91, 
        2: 143, 
        3: 235,
        4: 450,
      }
    ];
  
    return result;
  }
  
  const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  
  console.log(result);

  // To See Final grade just input the student's total average round the total average percent to whole value

  function getGrade(value) {
    if (value > 90) return 'A';
    else if (value > 80) return 'B';
    else if (value > 70) return 'C';
    else if (value > 60) return 'D';
    else return 'F'
  }
console.log("Learner 101 got "+ getGrade(97));
console.log("Learner 102 got "+ getGrade(76));
console.log("Learner 103 got "+ getGrade(22));
console.log("Learner 104 got "+ getGrade(83));

  
 
 




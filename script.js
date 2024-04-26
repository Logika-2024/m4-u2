let question_field = document.querySelector('.question')
let answer_buttons = document.querySelectorAll('.answer')



class Question {
  constructor() {
        this.a = this.randint(1,30)
        this.b = this.randint(1,30)
        this.question = `${this.a} + ${this.b}`
        this.correct = this.a + this.b
        this.answers = [
            this.randint(this.correct - 15, this.correct - 1),
            this.randint(this.correct - 15, this.correct - 1),
            this.correct,
            this.randint(this.correct - 15, this.correct - 1),
            this.randint(this.correct - 15, this.correct - 1),
        ]
    }

    randint (min, max) {
      return (Math.round(Math.random() * (max - min) + min))
    }
  
    display () {
        question_field.innerHTML = this.question
       
        for (let i = 0; i < this.answers.length; i += 1) {
            answer_buttons[i].innerHTML = this.answers[i]
        }
    }
}


let current_questions = [
  new Question(),
  new Question(),
  new Question(),
  new Question(),
  new Question()
]
// console.log('current_questions: ', current_questions)

let total_answers_given = 0

let current_question = current_questions[total_answers_given]

current_question.display()


for (let i = 0; i < answer_buttons.length; i += 1) {
    answer_buttons[i].addEventListener('click', function() {
        if (answer_buttons[i].innerHTML == current_question.correct) {
            console.log("Правильно")
        } else {
            console.log("Неправильно")
        }


        total_answers_given += 1
        current_question = current_questions[total_answers_given]
        current_question.display()
    })
}









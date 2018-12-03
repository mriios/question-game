(function() {
  var q1 = new Question('What color is the grass?', ['Red', 'Blue', 'Green'], 2);
  var q2 = new Question('Is this quiz fun?', ['Yes!', 'No.'], 0);
  var q3 = new Question('Who\'s the president of the USA?', ['Obama', 'Trump', 'Bush'], 1);

  var questions = [q1, q2, q3];

  function Question(question, answers, correct) {
      this.question = question;
      this.answers = answers;
      this.correct = correct;
  }

  Question.prototype.displayQuestion = function() {
      console.log(this.question);

      for (var i = 0; i < this.answers.length; i++) {
          console.log(i + ': ' + this.answers[i]);
      }
  }

  Question.prototype.checkAnswer = function(ans, callback) {
      var sc;

      if (ans === this.correct) {
          console.log('Correct answer!');
          sc = callback(true);
      } else {
          console.log('Wrong answer. Try again :)');
          sc = callback(false);
      }

      console.log('Your current score is: ' + sc);
      console.log('------------------------------');
  }

  function score() {
      var sc = 0;
      return function(correct) {
          if (correct) {
              sc++;
          }
          return sc;
      }
  }
  var keepScore = score();

  function nextQuestion() {
      var n = Math.floor(Math.random() * questions.length);

      questions[n].displayQuestion();

      var answer = prompt('Please select the correct answer.');

      if(answer !== 'exit') {
          questions[n].checkAnswer(parseInt(answer), keepScore);

          nextQuestion();
      }
  }

  nextQuestion();

})();

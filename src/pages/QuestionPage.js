import React, { useState,useEffect } from 'react'
import { useLocation } from 'react-router'
import ThankYou from '../components/ThankYou';
import Question from '../components/Question';


export default function QuestionPage() {


  const { search } = useLocation();
  const name = new URLSearchParams(search).get('name');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [guess, setGuess] = useState('');
  const [setbackGuess, setSetbackGuess] = useState('');
  const [showSetback, setShowSetback] = useState(false);
  const [currentSetbackIndex, setCurrentSetbackIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [clue, setClue] = useState('');
        
        useEffect(() => {
    const initialQuestionIndex = +sessionStorage.getItem('currentQuestionIndex') || 0;
    const initialSetbackQuestionIndex = +sessionStorage.getItem('currentSetbackIndex') || 0;
    const initialScore = +sessionStorage.getItem('score') || 0;
    setCurrentQuestionIndex(initialQuestionIndex);
    setCurrentSetbackIndex(initialSetbackQuestionIndex);
    setScore(initialScore);
  }, []);


  useEffect(() => {
    sessionStorage.setItem('currentQuestionIndex', currentQuestionIndex);
  }, [currentQuestionIndex]);


  useEffect(() => {
    sessionStorage.setItem('currentSetbackIndex', currentSetbackIndex);
  }, [currentSetbackIndex]);


  useEffect(() => {
    sessionStorage.setItem('score', score);
  }, [score]);




  const validateAnswer = (answer, clue) => {
    if (guess === answer) {
      setScore(score + 10);
      setClue(clue);
    } else {
      setShowSetback(true);
      setClue('');
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  }


  const validateSetBackAnswer = (answer) => {
    if (setbackGuess === answer) {
      setScore(score + 5);
    }
    setShowSetback(false);
    setCurrentSetbackIndex(currentSetbackIndex + 1);
  }


  const checkRadioBtnChange = (event) => {
    setGuess(event.target.value);
  }


  const checkSetbackRadioBtnChange = (event) => {
    setSetbackGuess(event.target.value);
  }


  return (
    <div className="container-fluid p-4 content disableselect">
      {currentQuestionIndex === questions.length ? <ThankYou score={score} name={name} /> : <>
        <div>
          Hello {name}.Welcome to Trivia the major event by DOT club for TRISHNA, the annual cultural fest of IBS Hyderabad. All the Best...!!!
        </div>
        <div>Score: {score}</div>
        {!!clue && <div style={{color:'green',fontSize:'20px',fontWeight:'bold'}}>Clue: {clue}</div>}
        <div className="row no-gutters">
          {showSetback
            && (
              Setback_Questions.map((setbackQuestion, i) => i === currentSetbackIndex && (
                <div>
                  <div style={{color:'red',fontSize:'20px',fontWeight:'bold'}}>Setback Question</div>
                  <Question
                    type="setback"
                    question={setbackQuestion}
                    id={i}
                    option={Setback_Options}
                    timerCount={300}
                    onOptionSelection={(event) => checkSetbackRadioBtnChange(event)}
                    onAnswerSubmit={() => validateSetBackAnswer(setbackQuestion.answer)}
                    onTimerEnd={() => validateSetBackAnswer(null)}
                  />
                </div>
              ))
            )}
          {!showSetback && (
            questions.map((question, i) => i === currentQuestionIndex && (
              <Question
                type="question"
                question={question}
                id={i}
                option={options}
                timerCount={300}
                onOptionSelection={(event) => checkRadioBtnChange(event)}
                onAnswerSubmit={() => validateAnswer(question.answer, question.clue)}
                onTimerEnd={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
              />
            ))
          )}
        </div>
      </>}
    </div>
  )
}








const questions = [
  { "question": "Salaries of alien1 and alien2 for there work of hunting people, are in the ratio 2 : 3. If the salary of each is increased by Rs. 4000, the new ratio becomes 40 : 57. What is alien2’s salary?", "answer": "D", "clue": "1st alphabet always stays 1st" },
  { "question": "Alien Amna goes from A to B at a speed of 20 kmph and comes back to A at a speed of 30 kmph. Find his average speed for the entire journey?", "answer": "B", "clue": "P,R can be good friends when R is not inbetween" },
  { "question": "Alien pintu is in the East of alien Tom and Tom is in the North of alien Jaadu. Alien Mittu is in the South of Jaadu then in which direction of Pintu is Mittu?", "answer": "B", "clue": "C is next to Q and R" },
  { "question": "A alien sells his spaceship at a profit of 10%. If he had purchased it at 20% less and sells it at rupees 10 more, he had a gain of 40%. Find the C.P of the goods.", "answer": "A", "clue": "Goodluck not always lies odd" },
  { "question": "LOGICAL REASONING <br> Sparta planet organized a seminar. He invited 3 female alien guests A B and C. He also called 3 male alien guests P Q and R. But by mistake he arranged 9 chairs in a single row and numbered them 1-9 from left to right. <br> 1) None of the females are sitting next to each other<br> 2) A and B are not sitting next to any other guests <br> 4) B, P and R are not at the end of the row <br> 5) P is sitting next to a chair at the end of the row <br> How many guests are sitting next to an empty chair?", "answer": "c", "clue": "" },


  { "question": "Siora and Garrus have met at a Guest lecture conducted by IBS-Hyderabad. Introducing Siora, Garrus says, 'She is the wife of the only nephew of the only brother of my mother.' How is Siora related to Garrus ? ", "answer": "B", "clue": "High strength in communication" },
  { "question": "A two-digit number is assigned to a spaceship. The difference between a two-digit number and the number obtained by interchanging the positions of its digits is 45. What is the difference between the two digits of that number? ", "answer": "A", "clue": "Triggering can be effective at times" },
  { "question": "What should be the next spaceship number in below series?<br>3, 8, 15, 24, 35……..", "answer": "C", "clue": "Technology can never be wasted" },
  { "question": "The angle of elevation of the sun, when the length of the shadow of a tree is √3 times the height of the tree, is:", "answer": "A", "clue": "Launch pads might not be a solution for all" },
  { "question": "PARA SUMMARY <br> Space probes cost enormously as the launching rockets cannot be recovered and used again. In India, the space program was formerly launched in 1972, with the setting up of the Space Commission and the Department of Space. Advancement in areas of communication, meteorology, resources survey & management, developing satellites, launch vehicles & associated ground systems were the initial objectives. Since then, India has made impressive progress in this field. <br>The passage best supports the statement that: ", "answer": "A", "clue": "" },


]


const options = [
  ["A. 17,000", "B. 20,000", "C. 25,500", "D. 38,000"],
  ["A. 20 kmph", "B. 24 kmph", "C.28 kmph", "D.32 kmph"],
  ["A.South-east", "B.South-west", "C.South", "D.North-east"],
  ["A.500", "B.600", "C.400", "D.200"],
  ["A.1", "B. 5", "C.4", "D.3"],


  ["A. Sister", "B. Wife", "C. Sister-in-law", "D. Aunt"],
  ["A. 5", "B. 7", "C. 6", "D. None of these"],  
  ["A.44", "B.47", "C.48", "D.49"],  
  ["A.  30 degrees", "B.  45 degrees", "C.  60 degrees", "D.  90 degrees"],
  ["A.Satellite technology has strengthened all Communication Media as well as gives trigger to various fields", "B. Satellite technology has wasted the most spoiled generation", "C.India plans to have a new launchpad to undertake its proposed human space flight manned mission", "D.India is not a novice to the field of communications satellites"],
]


const Setback_Questions = [
  { "question": "Which of the following part of the Sun is visible to humans?", "answer": "A" },
  { "question": "What is the time taken by the light of the Sun to reach the Earth?", "answer": "B" },
  { "question": " On the Full Moon Day when the Sun is in Scorpio the moon is called", "answer": "A" },
  { "question": "When the luminous Moon looks exactly like a semi-cirlce, she is said to be", "answer": "A" },
  { "question": "Which of the following is the nearest galaxy to the Milky way?", "answer": "A" },    


  { "question": "Which Is the Hottest Planet in the solar system?", "answer": "B" },
  { "question": " Most widely spoken language in the world is?", "answer": "B" },
  { "question": "Coral reefs in India can be found in", "answer": "B" },
  { "question": "How many  Planets Have Rings around Them?", "answer": "B" }, 
  { "question": "Which planet has the most volcanoes?", "answer": "A" }, 


]


const Setback_Options = [
["A. Photosphere", "B. Corona"],
["A. 8 Minutes", "B. 8 Minutes 20 secs"],
["A.Hunters moon", "B. full moon"],
["A. Crescent", "B. Quadrature"],
["A. Andromeda", "B.Whirlpool galaxy"],


["A.Jupiter", "B.Venus"],
["A. English", "B. Large Mandarin"],
["A. the coast of Orissa", "B.Rameshwaram"],
["A.3", "B.4"],
["A.Venus", "B.Neptune"],


]
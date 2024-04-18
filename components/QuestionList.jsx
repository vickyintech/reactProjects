import React, { useEffect } from 'react';

const QUESTIONS_API_BASE_URL = 'https://api.frontendexpert.io/api/fe/questions';
const SUBMISSIONS_API_BASE_URL = 'https://api.frontendexpert.io/api/fe/submissions';

export default function QuestionList() {
  // request data from apis 
  // use custom hooks 
  const [ question, submissions] = useQuestionsAndSubmissions()

  return (
    <>
      {/* Write your code here. */}
    </>
  );
}

// Create an custom hook to handle fetching data from API

function useQuestionsAndSubmissions() {
    [questions, setQuestions] = useState()
    [submissions, setSubmissions] = useState()

    useEffect(()=>{
        const fetchData = async () => {
            const[questionRes, submissionsRes] = await Promise.all([
                fetch(QUESTIONS_API_BASE_URL),
                fetch(SUBMISSIONS_API_BASE_URL)
            ])
            // .json() return result is taking the JSON res as input and parsing it to produce a js obj
            const [questions, submissions] = await Promise.all([
                questionRes.json(),
                submissions.json()
            ])
            setQuestions(questions)
            setSubmissions(submissions)
        }
        fetchData()
    }, [])
    return [questions, submissions]
}
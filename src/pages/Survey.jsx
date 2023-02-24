import React from 'react';
import { useParams } from 'react-router-dom';

function Survey(){
    const { questionNumber } = useParams()

        return (
            <div>
                <h1>Salut Survey</h1>
                <h2>Question N°: {questionNumber}</h2>
            </div>
        );
   
}

export default Survey;
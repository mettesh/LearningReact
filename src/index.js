// import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App = () =>{
    return ( 
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>
                        Warning!
                    </h4>
                    Sikker på at du vil dette?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                        author="Sam" 
                        timeAgo="12:00" 
                        comment="Cool!" 
                        avatar={faker.image.avatar()}
                    />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="Hans" 
                    timeAgo="14:00"
                    comment="Heeeey!" 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="June" 
                    timeAgo="15:00" 
                    comment="Wazzuppp!" 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>


        </div>
    )
};


// Take the react component and show it on the screen
ReactDOM.render(
    // Komponenten man ønsker fremvist
    <App />,
    // Referanse til DOM-elementet i html-filen hvor den skal fremvises.
    document.querySelector('#root')
);
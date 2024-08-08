import React from 'react';
import BalonFinalOutComent from './artefatos/BalonFinalOutComent';
import BalonFinalPreOutComent from './artefatos/BalonFinalPreOutComent';
import OutBalon from './artefatos/OutBalon';
import './ContentionsChat.css'; // Importa o CSS

const getRandomPosition = () => {
  let top;
  do {
    top = Math.random() * 100;
  } while ((top > 24 && top < 60) || top > 84);

  const left = Math.random() * 77; // Valor entre 0% e 77%
  return { top: `${top}%`, left: `${left}%` };
};

const comments = [
  {
    avatar: 'https://via.placeholder.com/40',
    username: 'John Doe',
    message: 'Great service!',
    opinion: 'excellent',
    date: '2024-08-18',
    time: '10:00'
  },
  {
    avatar: 'https://via.placeholder.com/40',
    username: 'Jane Smith',
    message: 'Needs improvement.',
    opinion: 'dissatisfaction',
    date: '2024-08-08',
    time: '11:00'
  },
  {
    avatar: 'https://via.placeholder.com/40',
    username: 'Alex Johnson',
    message: 'Okay experience.',
    opinion: 'good',
    date: '2024-08-08',
    time: '13:00'
  },
  {
    avatar: 'https://via.placeholder.com/40',
    username: 'Alex Whiller',
    message: 'Okay experience.',
    opinion: 'good',
    date: '2024-08-08',
    time: '12:40'
  },
  {
    avatar: 'https://via.placeholder.com/40',
    username: 'Mack Johnson',
    message: 'Okay experience.',
    opinion: 'good',
    date: '2024-08-28',
    time: '12:30'
  },
  {
    avatar: 'https://via.placeholder.com/40',
    username: 'Johnson Smitt',
    message: 'Okay experience.',
    opinion: 'good',
    date: '2024-08-08',
    time: '12:05'
  },
  {
    avatar: 'https://via.placeholder.com/40',
    username: 'Alex Johnson',
    message: 'Okay experience.',
    opinion: 'good',
    date: '2024-08-08',
    time: '12:00'
  },
  {
    avatar: 'https://via.placeholder.com/40',
    username: 'Alex Johnson',
    message: 'Okay experience.',
    opinion: 'good',
    date: '2024-08-08',
    time: '12:00'
  },
  {
    avatar: 'https://via.placeholder.com/40',
    username: 'Johnson Smitt',
    message: 'Okay experience.',
    opinion: 'good',
    date: '2024-08-08',
    time: '12:05'
  },
  {
    avatar: 'https://via.placeholder.com/40',
    username: 'Alex Johnson',
    message: 'Okay experience.',
    opinion: 'good',
    date: '2024-08-08',
    time: '12:00'
  },
  {
    avatar: 'https://via.placeholder.com/40',
    username: 'Alex Johnson',
    message: 'Okay experience.',
    opinion: 'good',
    date: '2024-08-08',
    time: '12:00'
  },
];

// Função para converter data e hora em timestamp para comparação
const toTimestamp = (date, time) => new Date(`${date}T${time}`).getTime();

const sortedComments = comments
  .sort((a, b) => toTimestamp(b.date, b.time) - toTimestamp(a.date, a.time));

const categorizedComments = {
  'final-out': null,
  'pre-out': null,
  'out': []
};

// Classificar os comentários conforme a regra
if (sortedComments.length > 0) {
  categorizedComments['final-out'] = sortedComments[0];
}

if (sortedComments.length > 1) {
  categorizedComments['pre-out'] = sortedComments[1];
}

if (sortedComments.length > 2) {
  categorizedComments['out'] = sortedComments.slice(2, 7); // Limita a 5 instâncias
}

const ContentionsChat = () => {
  return (
    <div className="contentions-chat">
      {categorizedComments['final-out'] && (
        <BalonFinalOutComent
          key="final-out"
          username={categorizedComments['final-out'].username}
          avatar={categorizedComments['final-out'].avatar}
          message={categorizedComments['final-out'].message}
          opinion={categorizedComments['final-out'].opinion}
          date={categorizedComments['final-out'].date}
          time={categorizedComments['final-out'].time}
        />
      )}
      {categorizedComments['pre-out'] && (
        <BalonFinalPreOutComent
          key="pre-out"
          username={categorizedComments['pre-out'].username}
          avatar={categorizedComments['pre-out'].avatar}
          message={categorizedComments['pre-out'].message}
          opinion={categorizedComments['pre-out'].opinion}
          date={categorizedComments['pre-out'].date}
          time={categorizedComments['pre-out'].time}
          style={getRandomPosition()} // Aplica a posição aleatória
        />
      )}
      {categorizedComments['out'].map((comment, index) => (
        <OutBalon
          key={index} // Chave única para cada OutBalon
          username={comment.username}
          message={comment.message}
          opinion={comment.opinion}
          date={comment.date}
          time={comment.time}
        />
      ))}
    </div>
  );
};

export default ContentionsChat;

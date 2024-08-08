import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import BalonOutList from './artefatos/BalonOutList';
import './ScrollListComent.css'; // Importa o CSS

// Função para converter data e hora em timestamp para comparação
const toTimestamp = (date, time) => new Date(`${date}T${time}`).getTime();

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

const ScrollListComent = ({ reguaColor }) => {
  // Ordena os comentários pela data e hora mais recentes
  const sortedComments = comments.sort(
    (a, b) => toTimestamp(b.date, b.time) - toTimestamp(a.date, a.time)
  );

  // UseEffect para logar a cor da régua no console
  useEffect(() => {
    console.log('Cor da régua:', reguaColor);
  }, [reguaColor]);

  // Define a cor adicional para o gradiente
  const additionalColor = '#f0f0f0'; // Pode ser qualquer cor clara ou neutra

  return (
    <div
      className="scroll-list-comment"
      style={{
        background: `linear-gradient(to bottom, ${reguaColor}, ${additionalColor})`,
      }}
    >
      {sortedComments.map((comment, index) => (
        <BalonOutList
          key={index} // Chave única para cada comentário
          username={comment.username}
          avatar={comment.avatar}
          message={comment.message}
          opinion={comment.opinion}
          date={comment.date}
          time={comment.time}
        />
      ))}
    </div>
  );
};

// Validação das props
ScrollListComent.propTypes = {
  reguaColor: PropTypes.string.isRequired,
};

export default ScrollListComent;
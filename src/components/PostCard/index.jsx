import P from 'prop-types';
import './styles.css';

export const PostCard = ({ title, cover, body, id }) => (
  <div className="post">
    <img src={cover} alt={title} />
    <div className="post-content">
      <h2>
        {title} {id}
      </h2>
      <p>{body}</p>
    </div>
  </div>
);

PostCard.propTypes = {
  title: P.string.isRequired,
  cover: P.string.isRequired,
  body: P.string.isRequired,
  id: P.number.isRequired,
};
// Mantemos o return com as chaves da arrow function caso tenhamos alguma lógica "js" dentro do escopo, caso contrário podem sair
// export const PostCard = ({ id, cover, title, body}) => {
//     return (
//         <div className="post">
//             <img src={cover} alt={title} />
//             <div className="post-content">
//                 <h1>{title}</h1>
//                 <p>{body}</p>
//             </div>
//         </div>
//     )
// }

// Estes métodos só funcionam quando passo um objeto dentro de outro objeto lá no App.js post={post}
// export const PostCard = ({post}) => {
//     return (
//         <div className="post">
//             <img src={post.cover} alt={post.title} />
//             <div className="post-content">
//                 <h1>{post.title}</h1>
//                 <p>{post.body}</p>
//             </div>
//         </div>
//     )
// }

// Estes métodos só funcionam quando passo um objeto dentro de outro objeto lá no App.js post={post}
// export const PostCard = (props) => {
//     const post = props.post //Método convencional
//     const { post } = props; // Via de desestrutaração

//     return (
//         <div className="post">
//             <img src={post.cover} alt={post.title} />
//             <div key={post.id} className="post-content">
//                 <h1>{post.title}</h1>
//                 <p>{post.body}</p>
//             </div>
//         </div>
//     )
// }

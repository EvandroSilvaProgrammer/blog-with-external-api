import './styles.css';

import { useEffect, useState, useCallback } from 'react';

import { loadPosts } from '../../utils/load-posts';
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';

export const Home = () => {

  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postPerPage] = useState(5);
  const [searchValue, setSearchValue] = useState('');

  const noMorePosts = page + postPerPage >= allPosts.length;

  const filteredPosts = !!searchValue ? allPosts.filter(post => {
    return post.title.toLowerCase().includes(
      searchValue.toLowerCase()
    );
  }) : posts;

  const HandleLoadPosts = useCallback(async (page, postPerPage) => {
    const postsAndPhotos = await loadPosts();

    setPosts(postsAndPhotos.slice(page, postPerPage));
    setAllPosts(postsAndPhotos);
  }, [])

  useEffect(() => {
    console.log('oi');
    HandleLoadPosts(0, postPerPage);
  }, [HandleLoadPosts, page, postPerPage]);

  const loadMorePosts = () => {

    const nextPage = page + postPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postPerPage);

    posts.push(...nextPosts); //Spread operator

    setPosts(posts);
    setPage(nextPage);
  }

  const handleChange = (e) => {
    const { value } = e.target;

    setSearchValue(value);
  }

  return (
    <section className="container">

      <section className="search-container">

        {!!searchValue && (
          <h1> Search value: {searchValue} </h1>
        )}

        <TextInput
          seacrhValue={searchValue}
          handleChange={handleChange}
        />
      </section>


      {filteredPosts.length > 0 ?
        (< Posts posts={
          filteredPosts
        } />)
        : (
          <p> Não existe nenhum post com o título:{searchValue} </p>
        )
      }

      <div className="button-container">
        {!searchValue && (
          < Button
            text="Load more posts"
            onClick={loadMorePosts}
            disabled={noMorePosts}
          />
        )}
      </div>
    </section>
  );
}

export default Home;

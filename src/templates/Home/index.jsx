import './styles.css';

import { Component } from 'react';

import { loadPosts } from '../../utils/load-posts';
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';

export class Home extends Component {

  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postPerPage: 5,
    seacrhValue: ''
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const postsAndPhotos = await loadPosts();
    const { page, postPerPage } = this.state;

    this.setState({
      posts: postsAndPhotos.slice(page, postPerPage),
      allPosts: postsAndPhotos
    });
  }

  loadMorePosts = () => {
    const {
      page,
      postPerPage,
      allPosts,
      posts
    } = this.state;

    const nextPage = page + postPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postPerPage);

    posts.push(...nextPosts); //Spread operator

    this.setState({ posts, page: nextPage })
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ seacrhValue: value })
  }

  render() {
    const { posts, page, postPerPage, allPosts, seacrhValue } = this.state;
    const noMorePosts = page + postPerPage >= allPosts.length;

    const filteredPosts = !!seacrhValue ? allPosts.filter(post => {
      return post.title.toLowerCase().includes(
        seacrhValue.toLowerCase()
      );
    })
      : posts;

    return (
      <section className="container">

        <section className="search-container">

          {!!seacrhValue && (
            <h1> Search value: {seacrhValue} </h1>
          )}

          <TextInput
            seacrhValue={seacrhValue}
            handleChange={this.handleChange}
          />
        </section>


        {filteredPosts.length > 0 ?
          (< Posts posts={
            filteredPosts
          } />)
          : (
            <p> Não existe nenhum post com o título:{seacrhValue} </p>
          )
        }


        <div className="button-container">
          {!seacrhValue && (
            < Button
              text="Load more posts"
              onClick={this.loadMorePosts}
              disabled={noMorePosts}
            />
          )}
        </div>
      </section>
    );
  }
}

export default Home;

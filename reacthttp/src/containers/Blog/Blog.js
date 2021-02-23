import React, { Component } from 'react';
//import axios from 'axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from '../../axios';

class Blog extends Component {

    state ={
        posts:[],
        selectedPostId:null,
        error:false
    }

    componentDidMount(){
        axios.get('/posts')
        .then(response=>{
            console.log(response.data);
            const posts = response.data.slice(0,4);
            const updatedPosts = posts.map(post=>{
                return{
                    ...post,
                    author:'saradha'
                }
            })
            this.setState({
                posts: updatedPosts
            })
           
        })
        .catch(err=>{
                this.setState({
                    error:true
                })
        });
    }

    handlePostClick=(id)=>{
        this.setState({
            selectedPostId:id
        })
    }
    render () {
        
        let posts=<p style={{textAlign:'center'}}> Something went wrong </p>
        if(!this.state.posts.error){
         posts = this.state.posts.map(post=>{
            return <Post key={post.id} title={post.title} author={post.author} postClicked={()=>this.handlePostClick(post.id)}/>;
        });
    }
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;
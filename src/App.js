import React, { useEffect } from 'react';
import { connect} from 'react-redux';
import * as actions from './redux/actions';
import './App.css';

function App(props) {

	useEffect(() => {

		/*props.reduxAddPost({
      title: 'foo',
      body: 'bar',
      userId: 1
    })

    setTimeout(() => {
			props.reduxUpdatePost({
	      title: 'foo',
	      body: 'bar',
	      userId: 1
	    })

	    props.reduxDeletePost({id: 101})
    }, 2000)

		props.reduxSetCity('Mexico');

		props.reduxAddCat({
			id: 1, nombre: 'Concreto'
		})

		setTimeout(() => {
			props.reduxUpdateCat({
				id: 1, nombre: 'Update Redux'
			})

			setTimeout(() => {
			props.reduxDeleteCat({
					id: 1, nombre: 'Update Redux'
				})

			props.reduxAddCat({
				id: 7, nombre: 'ff'
			})

			props.reduxGetPost();

			}, 2000)

		}, 2000)*/

	}, []);

  return (
    <div>
    	{props.city}
    	{
    		props.categorias.map((_, idx)=> (<p key={idx}>{_.nombre}</p>))
    	}
    	{
    		props.username
    	}
    	<br/>
    	<br/>
    	<br/>
    	{
    		props.post.map((_, idx)=> (<p key={idx}>{_.id}</p>))
    	}
    </div>
  );
}

const mapStateToProps = state => {
	/*return {
		city: state.city,
		categorias: state.categorias
	}*/
	let objReturn = Object.fromEntries(Object.entries(state));
	objReturn.username = 'trader1';
	return objReturn;
}

export default connect(mapStateToProps, actions)(App);
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export class RegisterPage extends Component {

  state = {
    email: '',
    password: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('Submit');
    console.log(this.state);

  }

  render() {
    return (
      <div className=" bg-gradient-to-r from-purple-700 via-blue-500 to-pink-700 h-screen w-screen relative flex justify-center items-center">
        <div className="h-500 w-500 bg-white bg-opacity-90 rounded-3xl shadow-9xl  z-2 border border-opacity-40 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm">
          <br />
          <br />
          <div className="p-10">
            <h2 className="text-center text-3xl leading-9 font-extrabold text-gray-800">
              Create your account
            </h2>
            <br />
            <br />
            <form onSubmit={this.handleSubmit}>
              <div className="flex justify-center">
                <div className="lg:w-2/3 md:w-2/3 w-full mt-8">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-8"
                    htmlFor="Name">
                    NAME
                  </label>
                  <input
                    className="mt-2 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full 
              py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
                    type='text'
                    placeholder="Enter your name"
                  />
                  <label
                    className="mt-2 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-8"
                    type="text"
                    htmlFor="Name">
                    EMAIL
                  </label>
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full 
                    py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
                    type='email'
                    name='email'
                    placeholder="Enter your email"
                  />
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-8"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full 
                    py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
                    type='password'
                    name='pwd'
                    placeholder="Enter your password"
                  />
                </div>
              </div>
              <div className="mt-4 flex justify-center">
                <button
                  className="bg-pink-400 hover:bg-pink-500 text-white font-bold py-2 px-4 border border-pink-200 rounded"
                  type="submit"
                  required onSubmit={this.handleSubmit}
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
          <div className="flex justify-center">
            <p className="mt-8">
              Have an account <Link to="/LoginPage">Log in</Link>
            </p>
          </div>
        </div>
      </div>

    )
  }
}

export default RegisterPage;

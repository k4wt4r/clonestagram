import React from 'react';
import { Link } from 'react-router-dom';

class LoginPage extends React.Component {

  state = {
    email: '',
    pwd: ''
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('Submitting');
    console.log(this.state);

  }
  render() {
    return (
      <div className=" bg-gradient-to-r from-purple-700 via-blue-500 to-pink-700 h-screen w-screen relative flex justify-center items-center">
        <div className="h-220 w-200  bg-white bg-opacity-30 rounded-2xl shadow-5xl  z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm">
          <br />
          <br />
          <div className="p-10">
            <h2 className="text-center text-3xl leading-9 font-extrabold text-gray-800">
              Sign In to your account
            </h2>
            <br />
            <br />
            <form >
              <div className="flex justify-center">
                <div className="lg:w-1/3 md:w-2/3 w-full">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="email">
                    Email
                  </label>
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full 
                      py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
                    type='email'
                    name='email'
                    placeholder='example@gmail.com'
                    required onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <div className="lg:w-1/3 md:w-2/3 w-full">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full 
                    py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
                    type='password'
                    name='pwd'
                    placeholder='**********'
                    required onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="mt-4 flex justify-center">
                <button
                  className="bg-purple-700 hover:bg-purple-900 text-white font-bold py-2 px-4 border border-blue-200 rounded"
                  type="submit"
                  onSubmit={this.handleSubmit}
                >
                  Log In
                </button>
              </div>
              <div className="flex justify-center">
                <p className="mt-8">
                  Not have an account ? <Link to="/RegisterPage" >Sign up</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

    )
  }
}

export default LoginPage;


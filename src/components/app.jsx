import React, { Component } from "react";

// import Profile from './profile'
// import MyProps from './props'
// import Bio from './profile/bio'
// import Skills from './profile/skills'

// class Child extends Component {

//     render() {
//         this.props.func(this)
//         return <h1>I am child</h1>
//     }
// }

// const ChildComponent = props => (
//     <div>

//       <h3>I am child component</h3>
//       <p>I know what to do</p>
//     {props.children}
//     </div>
// )

class App extends Component {
  // getContext(context) {
  //     console.log(context);
  // }

  state = {
    count: 10,
  };

  render() {
    //this.getContext(this)

    return (
      <div>
        <h1>State is a heart of react</h1>
        <h1>Count = {this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });

            console.log("clicked..", this.state.count);
          }}
        >
          Add +1
        </button>
      </div>

      //   <div>
      //       <h1>Pass function as props</h1>
      //       <Child func = {this.getContext} />

      //       <ChildComponent>

      //       <h2>Hello , i am from Parent</h2>
      //       <h4>I am a child of ChildComponent</h4>

      //       </ChildComponent>
      //   </div>

      // <div className = 'App'>

      // <Profile />
      // <Bio  name = 'Biswarup das' title = 'Full stack developer'/>
      // <Skills skillA = 'React' skillB= 'Express' skillC = 'Node' skillD = 'Ecmascript_6'/>

      // <div style={{marginTop: '20px' , marginBottom: '100px' ,backgroundColor: 'greenyellow' }}>
      //     <h3 style={{marginTop: '10px',marginBottom: '10px' ,padding:'20px'}}>List of Programmers</h3>

      //     <MyProps name = 'Sandip Das' />
      //     <Skills skillA = 'React' skillB= 'Express' skillC = 'Node' skillD = 'Next'/>

      //     {/* <p style={{marginTop: '10px',marginBottom: '10px' ,padding:'10px'}} >Sandip Das</p>
      //     <Skills  skillA = 'React' skillB= 'Express' skillC = 'Node' skillD = 'Next'/> */}

      //     {/* <p style={{marginTop: '10px', marginBottom: '10px' ,padding:'10px'}} >Prosenjit sardar</p>
      //     <Skills skillA = 'React' skillB= 'Express' skillC = 'Node'  skillD = 'Tensarflow'/> */}
      //     <MyProps name = 'Steve jobs' />
      //     <Skills skillA = 'Node' skillB= 'Mongodb' skillC = 'Node' skillD = 'Next'/>

      //     <MyProps name = 'Arpan Das' />
      //     <Skills skillA = 'React' skillB= 'Express' skillC = 'Node' skillD = 'Jquery'/>

      //     <MyProps name = 'Jayant Mitra' />
      //     <Skills skillA = 'React' skillB= 'Express' skillC = 'Node' skillD = 'Ecmascript_6'/>

      //     <MyProps name = 'Kishan agarwal' />
      //     <Skills skillA = 'React' skillB= 'Express' skillC = 'Node' skillD = 'Flutter'/>

      //     <MyProps name = 'Rachu' />
      //     <Skills skillA = 'React' skillB= 'Express' skillC = 'Node' skillD = 'SpringBoot'/>

      // </div>

      // </div>
    );
  }
}

export default App;
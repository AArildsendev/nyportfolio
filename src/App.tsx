import React from 'react';
import { Navigation } from './Navigation/Navigation';
import './globals/global.scss'





function App() {

  const[theme,setTheme] = React.useState("theme-default")
  React.useEffect(()=>{},[theme])


  const changeTheme = (theme : string) =>{
    const newtheme = theme
    if(newtheme === "theme-default"){
      setTheme("theme-dark")

    }else{
      setTheme("theme-default")
    }

  }



  return (
    <div className={theme}>
      <header>
        <Navigation />
      </header>
      
      <main className="section group">
        
        <div className="col span_1_of_2"><h1 className='pp'>Velkommen til min Webudvikler Portfolio</h1></div>
        <div className="col span_1_of_2"></div>
       
      </main>
    </div>
  );
}

export default App;

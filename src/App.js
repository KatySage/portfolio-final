import React from 'react';
import img from './images/topper3.png';
import './App.css';
import Devicon from './components/Devicon';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import salon from './images/salon-screenshot.png';
import memory from './images/memory-screenshot.png';
import quiz from './images/quiz-screenshot.png';
import github from './images/github.png';
import linkedin from './images/linkedin-white.png';

const App = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      textAlign: 'center',
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      background: '#2f5d50',
      elevation: 5,
    },
  }));
  const classes = useStyles();
  return (
    <div className="App">
      <header className="App-header">
        <img src={img} alt="help" />
        <h1>Katy Sage
            </h1>
            <h2><a href={`${process.env.PUBLIC_URL}/ksage_resume.pdf`}target="_blank" rel="noopener noreferrer">resume</a>
                &nbsp; &nbsp; &nbsp;
            <a href="https://github.com/katysage" target="_blank" rel="noopener noreferrer">github</a>
            &nbsp; &nbsp; &nbsp;
            <a href="https://www.linkedin.com/in/katy-sage-86502718b/" target="_blank" rel="noopener noreferrer">linkedin</a>
        </h2>
        </header>
  <h3>About Me</h3>
  type things about me.
  <h3>Languages and Frameworks</h3>
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={4} sm={3} md={2}>
          <Paper className={classes.paper} elevation={5}>
          <div className="custom-icon">
            <Devicon name="amazonwebservices" logoStyle="original" size="4em" color="#c3e1d8"/>
              aws
          </div>
          </Paper>
        </Grid>
        <Grid item xs={4} sm={3} md={2}>
          <Paper className={classes.paper} elevation={5}>
          <div className="custom-icon">
            <Devicon name="bootstrap" logoStyle="plain" size="4em" color="#c3e1d8"/>
              bootstrap
          </div>
          </Paper>
        </Grid>
        <Grid item xs={4} sm={3} md={2}>
          <Paper className={classes.paper} elevation={5}>
          <div className="custom-icon">
            <Devicon name="css3" logoStyle="plain" size="4em" color="#c3e1d8"/>
              css3
          </div>
          </Paper>
        </Grid>
        <Grid item xs={4} sm={3} md={2}>
          <Paper className={classes.paper} elevation={5}>
          <div className="custom-icon">
            <Devicon name="django" logoStyle="plain" size="4em" color="#c3e1d8"/>
              django
          </div>
          </Paper>
        </Grid>
        <Grid item xs={4} sm={3} md={2}>
          <Paper className={classes.paper} elevation={5}>
          <div className="custom-icon">
            <Devicon name="express" logoStyle="original" size="4em" color="#c3e1d8"/>
              express
          </div>
          </Paper>
        </Grid>
        <Grid item xs={4} sm={3} md={2}>
          <Paper className={classes.paper} elevation={5}>
          <div className="custom-icon">
            <Devicon name="gimp" logoStyle="plain" size="4em" color="#c3e1d8"/>
              gimp
          </div>
          </Paper>
        </Grid>
        <Grid item xs={4} sm={3} md={2}>
          <Paper className={classes.paper} elevation={5}>
          <div className="custom-icon">
            <Devicon name="git" logoStyle="plain" size="4em" color="#c3e1d8"/>
              git
          </div>
          </Paper>
        </Grid>
        <Grid item xs={4} sm={3} md={2}>
          <Paper className={classes.paper} elevation={5}>
          <div className="custom-icon">
            <Devicon name="github" logoStyle="plain" size="4em" color="#c3e1d8"/>
              github
          </div>
          </Paper>
        </Grid>
        <Grid item xs={4} sm={3} md={2}>
          <Paper className={classes.paper} elevation={5}>
          <div className="custom-icon">
            <Devicon name="html5" logoStyle="plain" size="4em" color="#c3e1d8"/>
              html5
          </div>
          </Paper>
        </Grid>
        <Grid item xs={4} sm={3} md={2}>
          <Paper className={classes.paper} elevation={5}>
          <div className="custom-icon">
            <Devicon name="javascript" logoStyle="plain" size="4em" color="#c3e1d8"/>
              javascript
          </div>
          </Paper>
        </Grid>
        <Grid item xs={4} sm={3} md={2}>
          <Paper className={classes.paper} elevation={5}>
          <div className="custom-icon">
            <Devicon name="jquery" logoStyle="plain" size="4em" color="#c3e1d8"/>
              jquery
          </div>
          </Paper>
        </Grid>
        <Grid item xs={4} sm={3} md={2}>
          <Paper className={classes.paper} elevation={5}>
          <div className="custom-icon">
            <Devicon name="nginx"logoStyle="plain" size="4em" color="#c3e1d8"/>
              nginx
          </div>
          </Paper>
        </Grid>
        <Grid item xs={4} sm={3} md={2}>
          <Paper className={classes.paper} elevation={5}>
          <div className="custom-icon">
            <Devicon name="nodejs" logoStyle="plain" size="4em" color="#c3e1d8"/>
              nodejs
          </div>
          </Paper>
        </Grid>

        <Grid item xs={4} sm={3} md={2}>
          <Paper className={classes.paper} elevation={5}>
          <div className="custom-icon">
            <Devicon name="postgresql" logoStyle="plain" size="4em" color="#c3e1d8"/>
              postgresql
          </div>
          </Paper>
        </Grid>
        <Grid item xs={4} sm={3} md={2}>
          <Paper className={classes.paper} elevation={5}>
          <div className="custom-icon">
            <Devicon name="python" logoStyle="plain" size="4em" color="#c3e1d8"/>
              python
          </div>
          </Paper>
        </Grid>
        <Grid item xs={4} sm={3} md={2}>
          <Paper className={classes.paper} elevation={5}>
          <div className="custom-icon">
            <Devicon name="react" logoStyle="plain" size="4em" color="#c3e1d8"/>
              react
          </div>
          </Paper>
        </Grid>
        <Grid item xs={4} sm={3} md={2}>
          <Paper className={classes.paper} elevation={5}>
          <div className="custom-icon">
            <Devicon name="ubuntu" logoStyle="plain" size="4em" color="#c3e1d8"/>
              ubuntu
          </div>
          </Paper>
        </Grid>
        <Grid item xs={4} sm={3} md={2}>
          <Paper className={classes.paper} elevation={5}>
          <div className="custom-icon">
            <Devicon name="visualstudio" logoStyle="plain" size="4em" color="#c3e1d8"/>
              visualstudio
          </div>
          </Paper>
        </Grid>
        </Grid>
  <h3>Featured Works</h3>
  <div className="center">
    <div className={classes.root}>
        <Grid className='big-grid' container spacing={6}>
          
          <Grid item xs={12} sm={12} md={12}>
            <Paper className={classes.paper} elevation={0}>
            <div className="feat">
              <div className="feat-inner">
              <h4>Salon</h4>
              <hr></hr>
              <div className="feat-content">
              Inspired by the French Art Salons of the 17th, 18th, and 19th centuries, Salon is an app that will let a user browse through artistic pieces and start a conversation virtually. Users can search through The Art Institute of Chicago's extensive collection, learn more about each piece, and appreciate the artwork from their home. Each user can create an account that lets them leave reviews of individual artwork, favorite artwork they love, and also comment on others reviews. This is a fullstack project that was completed as part of a four person team remotely. <br /><br></br>
              Built with Node.js, Express, & PostgreSQL.</div>
              <br></br>
              <a className="button" href='https://salon-talk.com/' target="_blank" rel="noopener noreferrer">live demo</a>
              <br></br>
              <br></br>
              <a className="button" href='https://github.com/KatySage/Salon' target="_blank" rel="noopener noreferrer">github</a>
              <br></br>
              </div>
              <img className="salon" src={salon} alt=""></img>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Paper className={classes.paper} elevation={0}>
            <div className="feat1">
              
        
              <img className="salon" src={quiz} alt=""></img><div className="feat-inner">
              <h4>Quiz Yo'self</h4>
              <hr></hr>
              <div className="feat-content">
              This game was created through the use of a RESTful trivia API to populate the selection screen and the questions with unique content for each play. The game needed to be responsive in all sizes and work well on both desktop and mobile screens. Our 4-person team wanted to highlight a strong understanding of both UI/UX design and interactive Javascript.<br /><br></br>
              Built with JavaScript ES6, HTML5, a RESTful API, & CSS3.</div>
              <br></br>
              <a className="button" href='https://www.quiz-yoself.com/' target="_blank" rel="noopener noreferrer">live demo</a>
              <br></br>
              <br></br>
              <a className="button" href='https://github.com/KatySage/Quiz-Yoself' target="_blank" rel="noopener noreferrer">github</a>
              <br></br>
              </div>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Paper className={classes.paper} elevation={0}>
            <div className="feat">
            <div className="feat-inner">
              <h4>Memory Game</h4>
              <hr></hr>
              <div className="feat-content">
              This is a simple card-based memory game. If two of the same cards are selected, they will stay flipped. If the symbols on the cards are not a match, they will flip over after a specific timeout.This game was built primarily to show an understanding of React and deployment on AWS Amplify.<br /><br></br>
              Built with React & AWS.</div>
              <br></br>
              <a className="button" href='https://master.dli501o8hqbxr.amplifyapp.com/' target="_blank" rel="noopener noreferrer">live demo</a>
              <br></br>
              <br></br>
              <a className="button" href='https://github.com/KatySage/memory-game' target="_blank" rel="noopener noreferrer">github</a>
              <br></br>
              </div>
        
              <img className="salon" src={memory} alt="a screenshot of a memory card game"></img>
              </div>
            </Paper>
          </Grid>
    </Grid>
    </div>
    </div>
    </div>
    <footer>
    <a className="link" href="#top">to top</a>
      <a className="button2" href="mailto: katysage1@gmail.com" target="_blank" rel="noopener noreferrer">hire me</a>
      <p>
      <a href="https://www.linkedin.com/in/katy-sage-86502718b/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin logo"></img>
      </a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://github.com/katysage" target="_blank" rel="noopener noreferrer"><img src={github} alt="github logo"></img>
      </a></p>
      <p>© katysage.com. 2020.</p>
              <br></br></footer>
</div>
  );
}

export default App;

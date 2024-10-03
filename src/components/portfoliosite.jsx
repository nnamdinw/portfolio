import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, useLocation } from 'react-router-dom';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Container, 
  Grid, 
  Card, 
  CardContent, 
  CardActions, 
  Button, 
  Box,
  TextField,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
  Breadcrumbs
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
const projects = [
  {
    title: "Real-time Logistics  Platform Transition",
    description: "Led the transition of a PHP-based FDA standards-compliant logistics platform to a cloud-hosted NodeJS & ReactJS application.",
    technologies: ["NodeJS", "ReactJS", "Cloud Computing","React", "State Management", "FDA Compliance"]
  },
  {
    title: "ETL Platform",
    description: "Designed and developed a fullstack bespoke ETL platform capable of extracting data from multiple sources.",
    technologies: ["Docker", "AWS", "RabbitMQ", "Win32API", "Boost", "Multithreading"]
  },
  {
    title: "Asset Management Platform",
    description: "Designed and developed a fullstack bespoke asset management platform capable of delivering custom user experiences in a FinTech enviornment.",
    technologies: ["SQL", "PHP", "Jquery", "CDN", "Authentication & Encryption", "UI/UX", "HTML/CSS","Javascript","Automation"]
  },
  {
    title: "Workforce Management Platform",
    description: "Designed and developed a bespoke fullstack Workforce Management Platform with web and mobile aspects.",
    technologies: ["React", "PHP", "RESTful APIs", "Mobile Development"]
  }
];





const Home = () => (
    <Container maxWidth="md" sx={{ mt: 8, textAlign: 'center' }}>
      <Paper elevation={3} sx={{ p: 5, backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Nnamdi Nwajagu
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom color="text.secondary">
          Fullstack Software Engineer
        </Typography>
        <Typography variant="body1" paragraph sx={{ mt: 4 }}>
          Innovating at the intersection of design and technology. With over 8 years of experience,
          I specialize in creating cutting-edge software solutions that drive business growth and enhance user experiences.
        </Typography>
      </Paper>
    </Container>
  );
  
  const Projects = () => (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        My Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
                <Box sx={{ mt: 2 }}>
                  {project.technologies.map((tech, i) => (
                    <Typography key={i} variant="caption" display="block">
                      • {tech}
                    </Typography>
                  ))}
                </Box>
              </CardContent>
              <CardActions>
                <Button size="small">View Demo</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
  
  const About = () => (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        About Me
      </Typography>
      <Typography variant="body1" paragraph>
        I'm Nnamdi Nwajagu, an innovative Fullstack Software Engineer with over 8 years of experience in designing and developing cutting-edge software solutions. I specialize in React state management, API development, and mentoring junior developers through the SDLC.
      </Typography>
      <Typography variant="body1" paragraph>
        My expertise spans a wide range of technologies including C++, PHP, JavaScript, NodeJS, ReactJS, and cloud platforms like AWS and Azure. I'm passionate about creating efficient, scalable solutions that drive business growth and improve user experiences.
      </Typography>
      <Typography variant="body1">
        Throughout my career, I've led significant projects such as transitioning legacy systems to modern cloud-based solutions, developing real-time logistics products, and creating bespoke ETL platforms. I thrive in collaborative environments and enjoy tackling complex challenges.
      </Typography>
    </Container>
  );
  
  const Contact = () => (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Contact Me
      </Typography>
      <form>
        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          margin="normal"
        />
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          margin="normal"
          type="email"
        />
        <TextField
          fullWidth
          label="Message"
          variant="outlined"
          margin="normal"
          multiline
          rows={4}
        />
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Send Message
        </Button>
      </form>
    </Container>
  );
  
  

  const Resume = () => (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Resume
      </Typography>
      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom>
          Professional Experience
        </Typography>
        <List>
          <ListItem>
            <ListItemText 
              primary="Senior Full Stack Developer" 
              secondary={
                <>
                  <Typography component="span" variant="body2" color="text.primary">
                    Elevate Solutions Group
                  </Typography>
                  {" — February 2024-August 2024"}
                </>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              secondary="• Led the transition of a PHP-based manufacturing platform to a cloud-hosted NodeJS & ReactJS application."
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              secondary="• Designed and implemented a real-time, FDA standards-compliant logistics product."
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              secondary="• Achieved a 6x improvement in throughput with the new platform."
            />
          </ListItem>
        </List>
        <Divider sx={{ my: 2 }} />
        <List>
          <ListItem>
            <ListItemText 
              primary="Senior Software Engineer" 
              secondary={
                <>
                  <Typography component="span" variant="body2" color="text.primary">
                    Bellwood Investments
                  </Typography>
                  {" — August 2016 – August 2023"}
                </>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              secondary="• Designed and developed a fullstack bespoke ETL platform."
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              secondary="• Implemented cloud computing architecture using Docker and AWS."
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              secondary="• Developed a Workforce Management Platform using React and PHP."
            />
          </ListItem>
        </List>
        <Divider sx={{ my: 2 }} />
        <List>
        <ListItem>
          <ListItemText 
            primary="Research Assistant" 
            secondary={
              <>
                <Typography component="span" variant="body2" color="text.primary">
                  TJ Watson Research Center, IBM
                </Typography>
                {" — May 2017 - August 2017"}
              </>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText 
            secondary="• Worked within IBM's Global physical analytics team to implement gesture recognition capabilities into a prototypical virtual assistant system."
          />
        </ListItem>
        <ListItem>
          <ListItemText 
            secondary="• Performed signal analysis on data from accelerometer, gyroscope, and magnetometer readings using Machine Learning practices."
          />
        </ListItem>
        <ListItem>
          <ListItemText 
            secondary="• Wrote testing tools in Java to retrieve sensor data and logs for additional analysis."
          />
        </ListItem>
        <ListItem>
          <ListItemText 
            secondary="• Learned to recognize integration drift using highpass filters and reduce it using Kalman filtering."
          />
        </ListItem>
      </List>


      </Paper>
      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom>
          Education
        </Typography>
        <List>
          <ListItem>
            <ListItemText 
              primary="Bachelor of Science in Computer Science" 
              secondary="Kennesaw State University"
            />
          </ListItem>
        </List>
      </Paper>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Skills
        </Typography>
        <Typography variant="body1">
          C++, PHP, HTML, Python, Java, JavaScript, NodeJS, ReactJS, AngularJS, Angular, ExpressJS, CSS, .NET, VB, C, Golang, R, SQL, Git, Linux, AWS, Azure, Docker, GCP, React, JSON, GraphQL, MiSys, ERP, WMS platform, C#
        </Typography>
      </Paper>
    </Container>
  );
  const NavigationBreadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);
  
    return (
      <Breadcrumbs aria-label="breadcrumb" sx={{ ml: 2 }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Home
        </Link>
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
  
          return last ? (
            <Typography color="text.primary" key={to}>
              {value.charAt(0).toUpperCase() + value.slice(1)}
            </Typography>
          ) : (
            <Link to={to} key={to}>
              {value.charAt(0).toUpperCase() + value.slice(1)}
            </Link>
          );
        })}
      </Breadcrumbs>
    );
  };

  const PortfolioSite = () => {
    return (
      <Router>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                Nnamdi Nwajagu
              </Typography>
              <Button color="inherit" component={Link} to="/">Home</Button>
              <Button color="inherit" component={Link} to="/projects">Projects</Button>
              <Button color="inherit" component={Link} to="/about">About</Button>
              <Button color="inherit" component={Link} to="/resume">Resume</Button>
              <Button color="inherit" component={Link} to="/contact">Contact</Button>
            </Toolbar>
            <NavigationBreadcrumbs />
          </AppBar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Box>
      </Router>
    );
  };
  
  export default PortfolioSite;
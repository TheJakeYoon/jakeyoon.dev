import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Resume() {
    return (
        <Box 
            id="resume" 
            sx={{ 
                py: 8,
                backgroundColor: 'background.default',
                minHeight: '100vh'
            }}
        >
            <Container maxWidth="lg">
                <Typography variant="h2" component="h1" gutterBottom align="center">
                    Resume
                </Typography>
                
                <Box sx={{ textAlign: 'center', mt: 10, mb: 4 }}>
                    <Button 
                        variant="contained" 
                        size="large"
                        onClick={() => window.open('https://drive.google.com/file/d/1-_HOpcwX9nsmvu6xTRnmdliYZyF1UGnU/view?usp=drive_link', '_blank')}
                        sx={{ fontSize: '1.1rem', px: 4, py: 2 }}
                    >
                        Access Resume
                    </Button>
                </Box>
                
                <Box sx={{ mt: 4 }}>
                    <Typography variant="h4" gutterBottom>
                        Experience
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemText 
                                primary="Software Engineer" 
                                secondary="PMY Group • 2024 - 2025"
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText 
                                primary="Software Engineer" 
                                secondary="Digital Mortar • 2022 - 2024"
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText 
                                primary="Quantitative Researcher" 
                                secondary="Kwangwoon University • 2021"
                            />
                        </ListItem>
                    </List>
                    
                    <Divider sx={{ my: 3 }} />
                    
                    <Typography variant="h4" gutterBottom>
                        Skills
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemText 
                                primary="Frontend" 
                                secondary="React, TypeScript, HTML, CSS, JavaScript"
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText 
                                primary="Backend" 
                                secondary="Python, C#, Java"
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText 
                                primary="Database" 
                                secondary="PostgreSQL, MySQL, MongoDB, TimescaleDB"
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText 
                                primary="Tools & Technologies" 
                                secondary="Linux, Git, Docker, AWS, GCP, Nginx"
                            />
                        </ListItem>
                    </List>
                </Box>
                <Box sx={{ mt: 15 }}>
                <IconButton
                        onClick={() => window.open('https://linkedin.com/in/jake-yoon', '_blank')}
                        sx={{ 
                            fontSize: '2rem',
                            color: 'primary.main',
                            '&:hover': {
                                backgroundColor: 'primary.light',
                                color: 'white'
                            }
                        }}
                    >
                        <LinkedInIcon fontSize="large" />
                    </IconButton>
                </Box>
            </Container>
        </Box>
    );
}

export default Resume;
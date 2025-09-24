import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState } from 'react';

function Contact(){
    const [emailRevealed, setEmailRevealed] = useState(false);

    const handleRevealEmail = () => {
        setEmailRevealed(true);
    };

    return (
        <Box 
            id="contact" 
            sx={{ 
                py: 8,
                backgroundColor: 'background.paper',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center'
            }}
        >
            <Container maxWidth="md">
                <Typography variant="h2" component="h1" gutterBottom align="center">
                    Get In Touch
                </Typography>
                <Typography variant="body1" align="center" sx={{ mb: 6, fontSize: '1.1rem' }}>
                    Have a project in mind or want to collaborate? I'd love to hear from you!
                </Typography>
                
                <Box sx={{ textAlign: 'center' }}>
                    {!emailRevealed ? (
                        <Button 
                            variant="contained" 
                            size="large" 
                            onClick={handleRevealEmail}
                            sx={{ fontSize: '1.1rem', px: 4, py: 2 }}
                        >
                            Reveal My Email
                        </Button>
                    ) : (
                        <Typography 
                            variant="h4" 
                            component="div"
                            sx={{ 
                                color: 'primary.main',
                                fontWeight: 'bold',
                                fontFamily: 'monospace'
                            }}
                        >
                            career@jakeyoon.dev
                        </Typography>
                    )}
                </Box>
            </Container>
        </Box>
    )
}

export default Contact
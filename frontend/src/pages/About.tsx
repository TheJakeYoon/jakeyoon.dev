import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function About(){
    return (
        <Box 
            id="about" 
            sx={{ 
                py: 8,
                backgroundColor: 'background.default',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center'
            }}
        >
            <Container maxWidth="lg">
                <Typography variant="h2" component="h1" gutterBottom>
                    About Me
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
                    I'm a passionate full-stack developer with experience in devops and taking responsibilities. 
                    I love building scalable applications and solving complex problems through clean, 
                    efficient code. When I'm not coding, you can find me playing tennis or pickeball, do some cooking, or making music.
                </Typography>
            </Container>
        </Box>
    )
}

export default About
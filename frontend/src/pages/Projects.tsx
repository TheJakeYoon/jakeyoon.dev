import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';

function Projects() {
    return (
        <Box 
            id="projects" 
            sx={{ 
                py: 8,
                backgroundColor: 'background.paper',
                minHeight: '100vh'
            }}
        >
            <Container maxWidth="lg">
                <Typography variant="h2" component="h1" gutterBottom align="center">
                    My Projects
                </Typography>
                <Typography variant="body1" align="center" sx={{ mb: 6, fontSize: '1.1rem' }}>
                    Here are some of the projects I've worked on recently
                    <br/>
                    (Most of these projects are private and source code is not available.)
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h5" component="h2" gutterBottom>
                                starlean.cloud
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                - Learning platform that allows learners to practice, and review using material provided.
                                <br/>
                                - Teaching platform that allows educators to monitor and upload material for learners.
                                <br/>
                                - Built using modern frameworks and deployed on cloud infrastructure.
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h5" component="h2" gutterBottom>
                                tradebot
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                - Built an automated trading system in Python using Alpaca, Polygon.io APIs and GCP Linux server.
                                <br/>
                                - Analyzed historical stock data to find trends and patterns using Matplotlib and Pandas library.
                                <br/>
                                - Ability to backtest different strategies using different selling and buying indicators.
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h5" component="h2" gutterBottom>
                                credit card usage alert
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                - Create custom alerts for all of your credit cards.
                                <br/>
                                - Analyze and view spending visually.
                                <br/>
                                - Used PLAID API and React to build the frontend.
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h5" component="h2" gutterBottom>
                                cryptominer
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                - Built an Ethereum mining rigs from ground up to maximize computer performance for mining using several parallel GPUs and different operating systems for diversification.
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
                    <IconButton 
                        onClick={() => window.open('https://github.com/thejakeyoon', '_blank')}
                        sx={{ 
                            color: 'text.primary',
                            '&:hover': {
                                color: 'primary.main',
                                transform: 'scale(1.1)'
                            },
                            transition: 'all 0.2s ease-in-out'
                        }}
                        aria-label="Visit GitHub profile"
                    >
                        <GitHubIcon sx={{ fontSize: '2rem' }} />
                    </IconButton>
                </Box>
            </Container>
        </Box>
    );
}

export default Projects;
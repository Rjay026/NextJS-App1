import { Grid, Container, Box, Typography } from '@mui/material';
import { MdDashboard, MdPerson, MdSettings, MdTrendingUp, MdViewList, MdNotifications, MdSecurity, MdHelp, MdExitToApp, MdReport } from 'react-icons/md';
import CardItem from '../components/CardItem';
import LeftDrawer from '../components/LeftDrawer';
import RightDrawer from '../components/RightDrawer';


const trainingData = [
    { title: 'Dashboard', description: 'Overview of all metrics', Icon: MdDashboard },
    { title: 'User Profile', description: 'Manage your profile', Icon: MdPerson },
    { title: 'Settings', description: 'Application settings', Icon: MdSettings },
];

const guidesData = [
    { title: 'Analytics', description: 'View detailed analytics', Icon: MdTrendingUp },
    { title: 'Tasks', description: 'Your task list', Icon: MdViewList },
    { title: 'Notifications', description: 'Recent notifications', Icon: MdNotifications },
];

const basicsData = [
    { title: 'Security', description: 'Security settings', Icon: MdSecurity },
    { title: 'Help', description: 'Get help and support', Icon: MdHelp },
    { title: 'Logout', description: 'Sign out of your account', Icon: MdExitToApp },
];

const coachingData = [
    { title: 'Reports', description: 'Generate reports', Icon: MdReport },
];


const Dashboard = () => {
    return (
        <>
            <Box sx={{ display: { sm: 'flex' } }}>
                <LeftDrawer />
                <Container maxWidth="xl" sx={{ margin: '0' }} >
                    <Typography variant="h5" component="h2" mt={{ xs: 10, sm: 4 }}>
                        Dashboard
                    </Typography>
                    <Box sx={{ flexGrow: 1, py: 5 }}>
                        <Grid container spacing={4} alignItems="center" pb={4}>
                            <Grid item xs={12}>
                                <Box>
                                    <Typography variant="h6" component="h2">
                                        Your next trainings
                                    </Typography>
                                    <Grid container spacing={2}>
                                        {trainingData.map((card, index) => (
                                            <Grid item xs={12} md={6} lg={4} key={index}>
                                                <CardItem {...card} height={250} />
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Box>
                            </Grid>
                            {/* <Grid item xs={12} md={4}>
                                <Box>
                                    <Typography variant="h6" component="h2">
                                        Coaching feedback
                                    </Typography>
                                    <Grid container spacing={2}>
                                        {coachingData.map((card, index) => (
                                            <Grid item xs={12} sm={6} md={12} key={index}>
                                                <CardItem {...card} />
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Box>
                            </Grid> */}
                        </Grid>

                        <Grid container spacing={4} alignItems="center" pb={4}>
                            <Grid item xs={12}>
                                <Box>
                                    <Typography variant="h6" component="h2">
                                        Popular guides
                                    </Typography>
                                    <Grid container spacing={2}>
                                        {guidesData.map((card, index) => (
                                            <Grid item xs={12} md={6} lg={4} key={index}>
                                                <CardItem {...card} height={195} />
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Box>
                            </Grid>
                            {/* <Grid item xs={12} md={4}>
                                <Box>
                                    <Grid container spacing={2}>
                                        {coachingData.map((card, index) => (
                                            <Grid item xs={12} sm={6} md={12} key={index}>
                                                <CardItem {...card} />
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Box>
                            </Grid> */}
                        </Grid>

                        <Grid container spacing={4} alignItems="center">
                            <Grid item xs={12}>
                                <Box>
                                    <Typography variant="h6" component="h2">
                                        The Basics
                                    </Typography>
                                    <Grid container spacing={2}>
                                        {basicsData.map((card, index) => (
                                            <Grid item xs={12} md={6} lg={4} key={index}>
                                                <CardItem {...card} height={195} />
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>

                <RightDrawer />

            </Box>

        </>
    );
};

export default Dashboard;

import React from "react";
import Typography from '@mui/material/Typography';
import { Grid, Box } from '@mui/material';
import ADMenu from "../components/ADMenu";
//import ADMenuButton from "../components/ADMenuButton";

// 4x icon
//import IcoADHome from '../icons/ad-home.png';
//import IcoADPin from '../icons/ad-pin.png';
//import IcoADShoppingBag from '../icons/ad-shopping-bag.png';
//import IcoADUser from '../icons/ad-user.png';

function AdminDashboard() {
    return (
        <React.Fragment>
            <Grid container>
                {/* Sidebar */}
                <Grid item xs={3}>
                    <Box
                        sx={{
                            padding: 2,
                        }}
                    >
                        <ADMenu />
                    </Box>
                </Grid>

                {/* Main Content */}
                <Grid item xs={9}>
                    <Box
                        sx={{
                            padding: 3,
                        }}
                    >
                        <Typography variant="h1" component="h1">
                            Welcome back
                        </Typography>
                        <Typography variant="h1" component="h1">
                            Stepan Klos
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={4}>
                                <Box sx={{ border: '1px solid #ddd', padding: 2, height: '100%' }}>
                                    {/* First tile content */}
                                    Tile 1
                                </Box>
                                <Box sx={{ border: '1px solid #ddd', padding: 2, marginTop: 2, height: '100%' }}>
                                    {/* Second tile content */}
                                    Tile 2
                                </Box>
                            </Grid>
                            <Grid item xs={4}>
                                <Box sx={{ border: '1px solid #ddd', padding: 2, height: '100%' }}>
                                    {/* Third tile content */}
                                    Tile 3
                                </Box>
                                <Box sx={{ border: '1px solid #ddd', padding: 2, marginTop: 2, height: '100%' }}>
                                    {/* Fourth tile content */}
                                    Tile 4
                                </Box>
                            </Grid>
                            <Grid item xs={4}>
                                <Box sx={{ border: '1px solid #ddd', padding: 2, height: '100%' }}>
                                    {/* Fifth tile content */}
                                    Tile 5
                                </Box>
                                <Box sx={{ border: '1px solid #ddd', padding: 2, marginTop: 2, height: '100%' }}>
                                    {/* Sixth tile content */}
                                    Tile 6
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default AdminDashboard;

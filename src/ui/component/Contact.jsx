import React from 'react'
import { Typography, Box, Container, TextField, Button } from '@mui/material'
import { useTheme, } from '@mui/material/styles';
import Fade from 'react-reveal/Fade';

const Contact = () => {
    const theme = useTheme();
    const color = theme.palette.mode;
    const formStyle = {
        background: "#343434",
        border: "1px solid #9C9C9C",
        borderRadius: "8px",
        padding: { md: "40px", xs: '20px' },
        width: { md: '50%', xs: '100%' }, margin: '1px auto',
        boxSizing: 'border-box',
    }
    const btnStyle = {
        fontSize: '24px', lineHeight: '24px', fontWeight: '500',
        padding: { md: '35px 112px', xs: '20px 50px' }, color: "#fff",
        borderRadius: '0',
        background: 'linear-gradient(185.98deg, #00BFF2 -13.45%, #8238D7 82.64%)'
    }
    const TextFieldStyle = {
        width: '100%',
        margin: { md: '20px auto', xs: '10px auto' },
        "& .MuiOutlinedInput-root": {
            background: color == "light" ? '#fff' : '#000',
            borderRadius: '0',
            "& fieldset": {
                borderRadius: '0',
                border: "1px solid #000000"
            },
        },
    }

    return (
        <>
            <Box sx={{ position: 'relative', zIndex: '1' }}>
                <Container fixed sx={{ paddingTop: { md: '100px', xs: '50px' }, paddingBottom: { md: '100px', xs: '50px' }, }}>
                    <Fade bottom>
                        <Box sx={{ textAlign: { md: 'center', xs: 'left' } }}>
                            <Typography sx={{ display: { md: 'block', xs: 'block' }, fontSize: { md: '60px', xs: '40px' }, lineHeight: { md: '78px', xs: '50px' }, fontWeight: '600', }} color='text.primary'>
                                Submit Request
                            </Typography>
                            <img src={require("../../new-ui/assets/bottomline.png")} alt="" style={{ marginBottom: '30px' }} />
                        </Box>
                        <br />
                    </Fade>
                    <Box sx={formStyle}>
                        <Fade bottom>
                            <TextField
                                label="Name"
                                multiline
                                rows="2"
                                sx={TextFieldStyle}
                            /><br />
                            <TextField
                                label="Telegram ID"
                                multiline
                                rows="2"
                                sx={TextFieldStyle}
                            />
                            <br />
                            <TextField
                                label="Description"
                                multiline
                                rows="4"
                                sx={TextFieldStyle}
                            />
                            <br />
                            <Box textAlign="center">
                                <Button sx={btnStyle} >
                                    Submit
                                </Button>
                            </Box>
                        </Fade>
                    </Box>
                </Container>
                <Container fixed sx={{ paddingBottom: { md: '100px', xs: '50px' }, }}>
                    <Typography gutterBottom sx={{ textAlign: 'center', fontSize: { md: '60px', xs: '40px' }, lineHeight: { md: '78px', xs: '50px' }, fontWeight: '600', }} color='text.primary'>
                        Telegram
                    </Typography>
                    <Typography sx={{ textAlign: 'center', fontSize: { md: '24px', xs: '20px' }, lineHeight: { md: '34px', xs: '30px' }, fontWeight: '500', }} color='text.primary'>
                        Contact us on telegram
                    </Typography>
                    <br /><br />
                    <Box sx={{ background: '#D9D9D9', width: {md:'519px',xs:'100%'}, margin: '1px auto' }}>
                        <br /><br />
                        <br /><br />
                        <Typography sx={{ textAlign: 'center', fontSize: { md: '24px', xs: '20px' }, lineHeight: { md: '34px', xs: '30px' }, fontWeight: '500', }} color='#000000'>
                            Telegram Msg???s Here
                        </Typography>
                        <br /><br />
                        <br /><br />
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default Contact

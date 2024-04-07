import { Button, Container, Grid, Typography, styled } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.jpg"
import DownloadIcon from "@mui/icons-material/Download"
const Hero = () => {

    const StyledHero = styled('div')(()=> ({
        background: 'black',
        height: "100vh",
    }))
    const StyledImg = styled('img')(()=> ({
        width: "100%",
        borderRadius: "50%"

    }))
    return (
        <>
            <Container>
                <StyledHero>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <StyledImg src={Avatar} />
                        </Grid>
                        <Grid item xs={8}>
                            <Typography color="primary" variant="h1"> Eloyse Fernanda </Typography> 
                            <Typography color="primary" variant="h2"> I'm a Software Enginer </Typography> 
                            <Button>  
                                <DownloadIcon/> 
                                Download CV 
                            </Button>
                            <Button> Contact me </Button>
                        </Grid>
                    </Grid>
                </StyledHero>
            </Container>
        </>
    )
  }
  
  export default Hero
  